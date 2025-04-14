<script>
    export let name;
    export let artist;
    export let year;
    export let image;    
</script>

<div class="flex w-full">
    <div class="w-1/2">
        <h1 class="m-0 sticky inset-0 dark:bg-[#1e1e1e]">{artist} - {name} ({year})</h1>
        <slot/>
    </div>
    <div class="flex grow justify-center items-center sticky inset-0">
        <img class="w-96 mt-5 p-0" alt="the album cover" src={"/src/routes" + image} />
    </div>
</div>
