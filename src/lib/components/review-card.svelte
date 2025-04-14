<script>
	import { onMount } from "svelte";
    export let album;
    let isHovered = false;
    import { goto } from "$app/navigation";
</script>

<button 
    onmouseleave={() => { isHovered = false; }} 
    onmouseenter={() => { isHovered = true; }} 
    onclick={() => { goto("articles/" + album.articleSlug) }} 
    class="flex flex-row px-3 cursor-pointer"
>
    <img 
        class="w-60 transition-all duration-1-0 {isHovered ? 'scale-105' : ''}" 
        crossorigin="anonymous"
        src={"/src/routes/articles/" + album.articleSlug + "/cover.webp"}
        alt=""
    />
    <div class="flex flex-col px-5 py-0 space-y-2 text-left">
        <h2 class="text-5xl font-bold font-sans">{album.title}</h2>
        <h3 class="text-xl font-semibold font-sans">{album.artist}</h3>
        <p class="sm:w-96 font-mono text-md tracking-tighter">{album.description}</p>
    </div>
</button>