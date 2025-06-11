<script>
    export let title;
    export let image;
</script>

<div class="flex w-full">
    <div class="w-1/2">
        <div class="sticky top-0 bg-white dark:bg-[#1e1e1e] flex flex-col">
            <div class="2xl:h-9"></div>
            <h1 class="">
                {title}
            </h1>
        </div>
        <div class="2xl:w-[80%]">
            <slot />
        </div>
    </div>
    <div class="w-1/2">
        <div class="flex justify-center">
            <img
                class="fixed top-1/6 2xl:top-1/4 mt-5 h-96 2xl:h-[36rem]"
                alt="the album cover"
                src={"/images/" + image.substring(9)}
            />
        </div>
    </div>
</div>
