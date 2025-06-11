<script>
    import { goto } from "$app/navigation";
    import "../../app.css";
    import { ModeWatcher } from "mode-watcher";
    import { fade } from "svelte/transition";

    let { children } = $props();
</script>

<ModeWatcher />
<div class="flex flex-col pl-10 pb-10 space-y-2 items-start justify-start">
    <div class="2xl:fixed pt-10">
        <button
            class="cursor-pointer group relative"
            onclick={() => {
                goto("/");
            }}
        >
            <h1 class="text-[3rem] font-bold font-sans">jmshgs</h1>
            <span
                class="absolute left-0 bottom-0 h-1 w-0 bg-current transition-all duration-300 group-hover:w-full"
            ></span>
        </button>
        <p class="font-mono">a personal website</p>
    </div>
    {@render children()}
</div>
