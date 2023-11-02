<script lang="ts" >
    import { urlStore } from "../stores";

    export let title : string;
    export let path : string = "NONE";
    export let beforeNav : Function = () => {};
    export let linkColor : string = 'white';

    function onClick() {

        // If path is NONE then this function will do no shit man!

        beforeNav();
        
        if (path != "NONE") {
            urlStore.update((old) => {
                console.log(`Old Path: ${old}`);
                console.log(`New Path: ${path}`)
                return path
            })
        } else {
            console.log("Did nothing you fool!");
        }

        // Is run before the app navigates
    }
</script>

<main>
    <button on:click={onClick} >
        <h1 style="color:{linkColor}">{title}</h1>
    </button>
</main>

<style>
    main {
        color: white;
    }

    button {
        background-color: transparent;
        width: fit-content;
        height: fit-content;
        border: none;
    }

    h1 {
        font-size: 30px;
        font-weight: 400;
        transition: all, 0.3s;
    }

    button:hover {
        background-color: transparent;
        border: none;
        color: purple;
    }

    button:focus {
        outline: none;
    }

</style>