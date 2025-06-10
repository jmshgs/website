<script>
    import { onMount } from "svelte";
    export let article;
    let isHovered = false;
    import { goto } from "$app/navigation";
</script>

<div>
    <button
        onmouseleave={() => {
            isHovered = false;
        }}
        onmouseenter={() => {
            isHovered = true;
        }}
        onclick={() => {
            goto("articles/" + article.articleSlug);
        }}
        class="flex flex-row px-0.5 cursor-pointer"
    >
        <img
            class="h-60 transition-all duration-1-0 {isHovered
                ? 'scale-105'
                : ''}"
            src={"/images/" + article.articleSlug + "/cover.webp"}
            alt=""
        />
        <div class="flex flex-col px-5 py-0 space-y-2 text-left">
            <h2 class="text-4xl font-bold font-sans">{article.title}</h2>
            <h3 class="text-xl font-semibold font-sans">{article.date}</h3>
            <p class="font-mono text-md tracking-tighter">
                {article.description}
            </p>
        </div>
    </button>
</div>
