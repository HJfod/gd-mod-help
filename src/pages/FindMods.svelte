<script lang="ts">
    import Link from '../Link.svelte'
    import Items from '../Items.svelte';
    import { registerPage } from "../Pages";
    import { onMount } from "svelte";

    let control;
    onMount(() => {
        registerPage('home', () => control);
    });
</script>

<div bind:this={control}>
    <h2>Please select your problem:</h2>
    <Items>
        <Link
            text="I want to find mods"
            page="pick-platform=>find-mods"
        />
        <Link
            text="I want to install a mod"
            page="install-mods"
        />
        <Link
            text="I want to make my own mod"
            page="make-mods"
        />
    </Items>
</div>

