<script lang='ts'>
    import "../app.css";
	import { getSnark, isItWednesday } from "$lib/helper";

    let snark: string = getSnark(isItWednesday(Date.now()))
</script>

{#if snark !== ''}
<h1 class='font-serif text-2xl h-screen flex items-center justify-center px-12'>{snark}</h1>
{/if}
