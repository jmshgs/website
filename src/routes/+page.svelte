<script>
    import ReviewCard from "$lib/components/review-card.svelte";

    let article = [
        {
            title: "Review: Rodeo",
            description:
                "a masterful, ambitious debut album that blends psychedelic trap, southern hip-hop, and cloup rap.",
            date: "4/13/2025",
            articleSlug: "music/travisscott/rodeo",
            music: true,
        },
        {
            title: "Review: KIDS SEE GHOSTS",
            description:
                "a futuristic, minimalistic and retrospective album from the legendary duo",
            date: "4/23/2025",
            articleSlug: "music/kidsseeghosts/kidsseeghosts",
            music: true,
        },
        // {
        //     title: "Review: Let's Start Here.",
        //     description:
        //         "yachty brings a new genre to his music with a psychedelic rock album",
        //     date: "4/23/2025",
        //     articleSlug: "music/lilyachty/letsstarthere",
        //     music: true,
        // },
        // {
        //     title: "ICE in LA",
        //     description:
        //         "a scary sign of what's to come under the trump administration",
        //     date: "6/10/2025",
        //     articleSlug: "icela",
        //     music: false,
        // },
    ];
    import { Mail, Github } from "lucide-svelte";
    import { ModeWatcher } from "mode-watcher";
</script>

<ModeWatcher />

<div class="font-manrope flex h-screen w-screen flex-col">
    <div
        class="flex h-[50vh] w-full flex-col items-center justify-center space-y-6 pt-20"
    >
        <img class="w-40 rounded-2xl" src="/images/pfps/pfp.webp" alt="" />
        <div
            class="flex w-[50vw] flex-col items-center justify-evenly space-y-3 text-center"
        >
            <div class="flex flex-row space-x-5">
                <h1 class="text-4xl dark:text-white">👋</h1>
                <h1 class="text-4xl dark:text-white">hey! i'm james</h1>
            </div>
            <p class="text-xl text-gray-600 dark:text-gray-400">
                i'm a 17 year old from california that likes to write swift,
                learn about politics, and listen to music (which you can read my
                reviews of below)
            </p>
            <div class="flex flex-row space-x-3">
                <a
                    class="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gray-400 transition-all ease-linear hover:bg-gray-500/25 dark:border-gray-600"
                    href="mailto:hey@jxhug.me"
                    target="_blank"
                >
                    <Mail class="stroke-gray-600 dark:stroke-gray-400" />
                </a>
                <a
                    class="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gray-400 transition-all ease-linear hover:bg-gray-500/25 dark:border-gray-600"
                    href="https://github.com/jmshgs"
                    target="_blank"
                >
                    <Github class="stroke-gray-600 dark:stroke-gray-400" />
                </a>
            </div>
        </div>
    </div>
    <div class="flex flex-col px-20 py-15 items-start">
        <h1 class="text-[2.5rem] font-bold font-sans py-5">latest articles</h1>
        <div class="grid sm:grid-cols-2 sm:space-y-10">
            {#each article.toReversed() as article}
                <ReviewCard {article} />
            {/each}
        </div>
    </div>
</div>
