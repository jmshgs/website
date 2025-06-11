<script>
    import { goto } from "$app/navigation";
    import "../app.css";
    import { ModeWatcher } from "mode-watcher";
    import { fade } from "svelte/transition";

    let { children } = $props();
</script>

<ModeWatcher />
<!-- <div class="flex justify-center w-screen"> -->
{@render children()}
<!-- </div> -->
