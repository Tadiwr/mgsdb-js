<script lang="ts" >
    import AddStudent from "../page/AddStudent.svelte";
    import GetStudents from "../page/GetStudents.svelte";
import Home from "../page/Home.svelte";
import pathUrls, { urlStore } from "../stores";

    $: currentPath = pathUrls.home;

    urlStore.subscribe((newPath) => {
        console.log(`Navigated to: ${newPath}`);
        currentPath = newPath;
    })
</script>

<main>
    {#if currentPath == pathUrls.home}
        <Home/>
    {:else if currentPath == pathUrls.addStudent}
        <AddStudent/>
    {:else if currentPath == pathUrls.getStudent}
        <GetStudents/>
    {:else}
        <h1>Page Not Found 🤕</h1>
    {/if}
</main>