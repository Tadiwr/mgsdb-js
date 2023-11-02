<script lang="ts" >
    import { BackendConnector } from '../api/services/backend_connecter';
    import StudentCard from '../components/Student_card.svelte';

    export let studentName : string;

    const api = new BackendConnector();

</script>

<main>
    {#await api.getStudentWithName(studentName)}
        <h1>Please wait...</h1>
    {:then students} 

        {#if students.length == 0}
            <p>Student not found</p>
        {:else}
            {#each students as student}
                <StudentCard  studentData={student} />
            {/each}
        {/if}

    {:catch error}
        <p>Error: {error.message}</p>
    {/await}
</main>