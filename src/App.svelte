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

    <!-- teehehee -->
    <br/><br/><br/><br/><br/>
    <hr>
    <br/>

    <footer>
        <p>Site by HJfod. Please contact HJfod#1795 on Discord for further assistance. (c) HJfod 2022</p>
    </footer>
</main>
