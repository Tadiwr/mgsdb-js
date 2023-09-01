<script lang="ts" >
    import { GetAllStudents } from "../api/usecases/get_students";
    import { SearchStudent } from "../api/usecases/search_students";
    import Table from "../components/table.svelte";

    const usecase = new SearchStudent();

    $: showRes = false;

    const columns = [
        { key: "student_id", title: "Student ID", value: (v : any) => v.student_id },
        { key: "surname", title: "Surname", value: (v : any) => v.surname },
        { key: "firstname", title: "First Name", value: (v : any) => v.firstname },
        { key: "dob", title: "Date of Birth", value: (v : any) => v.dob },
        { key: "phone_number", title: "Phone Number", value: (v : any) => v.phone_number },
        { key: "email", title: "Email", value: (v : any) => v.email },
        { key: "gender", title: "Gender", value: (v : any) => v.gender },
        { key: "form", title: "Form", value: (v : any) => v.form },
    ];

    $: searchValue = "";

    function onSearch() {
        showRes = false;
        showRes = true;
    }

</script>
<main>
    <h1>Search By Name</h1>

    <div class="search">
        <input  bind:value={searchValue}  placeholder="Search student by name" />
        <!-- <button on:click={onSearch} >Search</button> -->
    </div>


    {#if searchValue != "" }
        {#await usecase.callJson(searchValue)}
            <p>Loading Data....</p>
        {:then data}

            {#if data.length == 0}
                <p>Student Not Found</p>
            {:else}
                <Table data_columns={columns} rows={data} />
            {/if}
        {/await}
    {/if}

</main>


<style>

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input {
        width: 100%;
        height: 60px;
        background-color: white;
        border: solid;
        border-color: rgb(142, 142, 142);
        border-radius: 10px;
        color: black;
        padding-left : 20px;
        margin: 5px;
    }

    button {
        height: 60px;
        margin: 5px;
    }

    .search {
        display: flex;
        flex-direction: row;
        width: 50%;
    }
</style>