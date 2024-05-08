<script lang='ts'>
    import "../app.css";
	import { getSnark, isItWednesday } from "$lib/helper";

    const wednesday = isItWednesday(Date.now())
    let snark: string = getSnark(wednesday)
</script>

{#if snark}
<h1 class='font-serif text-2xl h-screen flex items-center justify-center px-12'>{snark}</h1>
{/if}
