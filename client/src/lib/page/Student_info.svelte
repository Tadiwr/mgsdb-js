<script lang="ts" >
    import { get } from "svelte/store";
    import {Student} from "../api/model/student";
    import pathUrls, { currentStudentStore, navigateTo } from "../stores";
    import { BackendConnector } from "../api/services/backend_connecter";

    $: data = get(currentStudentStore);

    function goBack() {
        navigateTo(pathUrls.getStudent);
    }

    async function deleteStudent() {

        const choice = prompt("You are about to delete a student ⚠️! Enter Y to confirm this.")

        if (choice == 'Y') {

            const api = new BackendConnector();    
            const res = await api.deleteStudent(data.student_id);
            
            if(res) {
                alert("Student has been deleted")
                navigateTo(pathUrls.getStudent);
            } else {
                alert("Student was not deleted something went wrong");
            }
        }
    }

</script>

<main>

    <div class="header">

        <button  on:click={goBack}>👈 Navigate Back</button>
        <h1>Student Details</h1>
    </div>

    <h2>First Name: {data.firstname}</h2>
    <h2>Surname: {data.surname}</h2>
    <h2>Email: {data.email}</h2>
    <h2>Phone Number: {data.phone_number}</h2>
    <h2>Form: {data.form}</h2>
    <h2>Gender: {data.gender}</h2>
    <h2>Student ID: {data.student_id}</h2>


    <button class="red-button" on:click={deleteStudent} >Delete</button>
</main>


<style> 
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 40px;
    }

    .header {
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content:space-between;
    }


    :global(.red-button) {
        background-color: red;
    }
</style>