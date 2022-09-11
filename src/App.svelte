<script lang="ts">
    import Link from './lib/Link.svelte'
    import Items from './lib/Items.svelte';
</script>

<main>
    <h1>GD Modding Help</h1>
    <h3>Please select your problem:</h3>

    <Items>
        <Link text="I want to find mods" />
        <Link text="I want to install a mod" />
        <Link text="I want to make my own mod" />
    </Items>
</main>
