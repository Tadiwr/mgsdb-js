<script>
    import pathUrls from "../stores";
    import Link from "./Link.svelte";

</script>
<main>
    <div class="nav-items">
        <Link title={"Home"} path={pathUrls.home}/>
        <Link title={"Search"}  path={pathUrls.getStudent}/>
        <Link title={"Add Student" } path={pathUrls.addStudent}/>
    </div>
</main>

<style>
    main {
        background-color: rgb(0, 0, 0);
        width: 100%;
        height: 80px;
    }

    .nav-items {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: white;
    }
</style>