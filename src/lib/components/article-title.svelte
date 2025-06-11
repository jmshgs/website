<script>
    export let title;
    export let image;
</script>

<div class="flex w-full">
    <div class="w-1/2">
        <div class="sticky top-0 bg-white dark:bg-[#1e1e1e] flex flex-col">
            <div class="h-9"></div>
            <h1 class="">
                {title}
            </h1>
        </div>
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
