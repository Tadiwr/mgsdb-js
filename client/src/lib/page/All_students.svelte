<script lang="ts" >
    import { BackendConnector } from '../api/services/backend_connecter';
    import StudentCard from '../components/Student_card.svelte';

    const api = new BackendConnector();

</script>

<main>
    {#await api.getAllStudents()}
        <h1>Please wait...</h1>
    {:then students} 

        {#if students.length == 0}
            <main>No Students not found</main>
        {:else}
            {#each students as student}
                <StudentCard  studentData={student} />
            {/each}
        {/if}

    {:catch error}
        <p>Error: {error.message}</p>
    {/await}
</main>