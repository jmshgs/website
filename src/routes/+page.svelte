<script>
    import ReviewCard from "$lib/components/review-card.svelte";

    let albums = [
        {
            title: "Rodeo",
            artist: "Travis Scott",
            description: "a masterful, ambitious debut album that blends psychedelic trap, southern hip-hop, and cloup rap.",
            articleSlug: "travisscott/rodeo"
        },
        {
            title: "KIDS SEE GHOSTS",
            artist: "KIDS SEE GHOSTS, Kanye West & Kid Cudi",
            description: "a futuristic, minimalistic and retrospective album from the legendary duo",
            articleSlug: "kidsseeghosts/kidsseeghosts"
        },
        {
            title: "Let's Start Here.",
            artist: "Lil Yachty",
            description: "yachty brings a new genre to his music with a psychedelic rock album",
            articleSlug: "lilyachty/letsstarthere"
        },
    ]
</script>

<div class="flex flex-col py-5 items-start">
    <h1 class="text-[2.5rem] font-bold font-sans py-5">latest reviews</h1>
    <div class="grid sm:grid-cols-2 sm:space-y-10">
        {#each albums.toReversed() as album}
            <ReviewCard {album} />
        {/each}
        
    </div>

      
</div>
