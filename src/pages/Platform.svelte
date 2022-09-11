<script lang="ts">
    import Link from '../Link.svelte'
    import Items from '../Items.svelte';
    import { registerPage } from "../Pages";
    import { onMount } from "svelte";

    let control;
    onMount(() => {
        registerPage('pick-platform', () => control);
    });
</script>

<div bind:this={control}>
    <h2>Please select your platform:</h2>
    <Items>
        <Link
            text="Windows"
        />
        <Link
            text="Mac (OS X)"
        />
        <Link
            text="Android"
        />
        <Link
            text="Iphone (iOS)"
        />
        <Link
            text="Linux"
        />
    </Items>
</div>

