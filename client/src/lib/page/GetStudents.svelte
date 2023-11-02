<script lang="ts" >
    import { Student } from '../api/model/student';
    import Result from './result.svelte';
    import AllStudents from './All_students.svelte';

    $: studentName = '';
    $: payload = [Student.empty()];
    $: errMessage = '';
    $: showResults = false;

</script>

<main>
    <h1>Query Students</h1>

    <p>{errMessage}</p>
    <input placeholder="Search students by name" bind:value={studentName} />
    <button >Search</button>

    <h1>Results</h1>

    {#if studentName == ""}
        <h1>All Students</h1>
        <AllStudents/>
    {:else}
    <Result bind:studentName={studentName} />
    {/if}


</main>

<style>
    input {
        background-color: white;
        border-radius: 10px;
        height: 30px;
        width: 50%;
        color: black;
    }
</style>