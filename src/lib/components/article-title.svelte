<script>
    export let title;
    export let image;
</script>

<div class="flex w-full">
    <div class="w-1/2">
        <h1 class="m-0 sticky top-0 bg-white dark:bg-[#1e1e1e]">{title}</h1>
        <slot />
    </div>
    <div class="w-1/2">
        <div class="sticky top-28 flex justify-center">
            <img
                class="mt-5 h-96"
                alt="the album cover"
                src={"/images/" + image.substring(9)}
            />
        </div>
    </div>
</div>
