<script>
    import Navbar from "./lib/components/Navbar.svelte";
    import Wrapper from "./lib/components/Wrapper.svelte";

</script>
<main>
  <Navbar/>
  <div>
    <Wrapper/>
  </div>
</main>

<style>
  main {
    flex-direction: column;
    display:  flex;
    width: 100%;
    height: 100%;
    flex: 1;
  }
</style>
