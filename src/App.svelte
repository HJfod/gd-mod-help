<script lang="ts">
    import Page from './Page.svelte';
    import NotFound from './pages/NotFound.svelte';
    import Home from './pages/Home.svelte';
    import Platform from './pages/Platform.svelte';
</script>

<main>
    <h1>GD Modding Help</h1>

    <Page>
        <NotFound />
        <Home />
        <Platform />
    </Page>

    <!-- teehehee -->
    <br/><br/><br/><br/>
    <hr>
    <br/>

    <footer>
        <p>Site by HJfod. (c) HJfod 2022</p>
    </footer>
</main>
