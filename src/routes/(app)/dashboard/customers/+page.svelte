<script lang="ts">
	export let data;
	$: ({ userData } = data);
</script>

{#if userData}
	<div class="flex flex-col gap-4 p-8">
		<h2 class="h2">Sales</h2>
		<div class="flex flex-col items-start gap-4 mb-8 pb-8 border-b border-surface-200">
			<h4 class="h4 font-semibold">{`🔥 Producer's 🔥`} Customers</h4>
			<div class="flex gap-4 flex-wrap">
				<div>Customers Data Table</div>
			</div>
		</div>
		<div class="flex flex-col items-start gap-4 mb-8 pb-8 border-b border-surface-200">
			<h4 class="h4 font-semibold">Quotes</h4>
			<div class="flex gap-4 flex-wrap">
				<div>Quotes Data Table</div>
			</div>
		</div>
	</div>
{/if}
