<script>
	import { goto } from '$app/navigation';
	import '../app.css';
	import { ModeWatcher } from "mode-watcher";
	import { fade } from 'svelte/transition';
	
	let { children } = $props();
</script>
<ModeWatcher />
<div class="flex flex-col p-10 space-y-2 items-start justify-start">
	<button class="cursor-pointer" onclick={() => {goto("/")}}>
    	<h1 class="text-[3rem] font-bold font-sans">music blog</h1>
	</button>
    <p class="font-mono">a personal music review website</p>
	{@render children()}
</div>
