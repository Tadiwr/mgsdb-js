<script lang="ts" >
    import SvelteTable, { type TableColumn } from "svelte-table";

    export let data_columns : TableColumn<object>[] = [];
    export let rows : any[] = [];
    

</script>

<main>
    <SvelteTable 
        rows={rows}
        columns={data_columns}
    />
</main>