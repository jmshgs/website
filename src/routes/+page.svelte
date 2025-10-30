<script>
    import { Mail, Github } from "lucide-svelte";
    import { ModeWatcher } from "mode-watcher";
</script>

<ModeWatcher />

<div class="font-manrope flex h-screen w-screen flex-col">
    <div
        class="flex h-full w-full flex-col items-center justify-center space-y-6"
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
                i'm a 17 year old from california that likes to write swift, play video games, and learn about politics!
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
</div>
