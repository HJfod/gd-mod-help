<script lang="ts">
    import { onMount } from "svelte";
    import { setPageControl, navigateTo, registerPage } from "./Pages";
    let control;

    onMount(() => {
        setPageControl(control);
    });
</script>

<article bind:this={control}>
    <slot />
</article>
