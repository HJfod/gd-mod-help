<script lang="ts">
    import { registerPage } from "../Pages";
    import { onMount } from "svelte";
    import Link from "../Link.svelte";
    import Items from "../Items.svelte";

    let control;
    onMount(() => {
        registerPage('404', () => control);
    });
</script>

<div bind:this={control}>
    <Items>
        <h2>404, oopsy daisy</h2>
        <Link
            text="Back to Home"
            page="home"
        />
    </Items>
</div>
