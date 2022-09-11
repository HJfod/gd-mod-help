<script lang="ts">
    export let text;
</script>

<button>
    <div>
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
            gap: 10px;
            flex-direction: row;
            border-left: .5em solid hsla(237, 100%, 70%, 50%);
            border-radius: inherit;
            padding: 1em;

            justify-self: start;

            > .arrow {
                border: solid white;
                border-width: 0 .25em .25em 0;
                padding: .4em;
                transform: rotate(-45deg) translate(-1em, -1em);
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
