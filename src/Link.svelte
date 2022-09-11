<script lang="ts">
    export let text;
    export let page = "";

    import { navigateTo } from "./Pages";
    
    function onNextPage() {
        navigateTo(page);
    }
</script>

<button>
    <div on:click={onNextPage}>
        <p>{text}</p>
        <span class="arrow"></span>
    </div>
</button>

<style lang="scss">
    button {
        margin: 1em;
        padding: 0;

        > div {
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: row;
            border-left: .5em solid var(--button-border-left);
            border-radius: inherit;
            padding: .6em;
            padding-right: 2em;

            justify-self: start;

            > p {
                margin-left: .5em;
            }

            > .arrow {
                border: solid white;
                border-width: 0 .25em .25em 0;
                padding: .35em;
                transform: rotate(-45deg) translate(-.5em, -.5em);
                margin-left: auto;
                justify-self: end;
                float: right;
                opacity: 0%;
                transition-duration: .25s;
            }
        }


        &:hover {
            > div > .arrow {
                transform: rotate(-45deg);
                opacity: 100%;
            }
        }
    }

</style>
