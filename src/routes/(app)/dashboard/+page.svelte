<script lang="ts">
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
	import SignIn from 'clerk-sveltekit/client/SignIn.svelte';
	import PersonIcon from '$lib/assets/icons/person.svelte';
	import ReportIcon from '$lib/assets/icons/report.svelte';
	import InvoiceIcon from '$lib/assets/icons/invoice.svelte';
	import CreditIcon from '$lib/assets/icons/credit.svelte';
	import RepairIcon from '$lib/assets/icons/repair.svelte';
	import TruckSale from '$lib/assets/images/TruckSale.png';
	import Reports from '$lib/assets/images/Reports.png';
	import Invoices from '$lib/assets/images/Invoices.png';
	import Credits from '$lib/assets/images/Credits.png';
	import Mechanic from '$lib/assets/images/Mechanic.png';

	export let data;

	$: ({ userData } = data);
</script>

{#if userData && userData.publicMetadata.ts_role}
	<div class="flex flex-col p-8">
		<div class="flex mb-4 gap-8 justify-between items-center">
			<h2 class="h2 w-1/2">Dashboard</h2>
		</div>
		<div class="w-full flex flex-col gap-8 md:flex-row items-start">
			<div
				class="w-full grid gap-4 flex-wrap"
				style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))"
			>
				<a
					class="card variant-filled-surface-50-900-token card-hover shadow-md flex flex-col items-center gap-4 w-full h-min relative pb-8"
					href="/dashboard/sales"
					><header class="flex items-center w-full h-auto overflow-hidden rounded-t">
						<img src={TruckSale} alt="TruckSale" />
					</header>
					<section class="flex items-center">
						<h4 class="h4 font-semibold">Sales</h4>
						<!-- <svelte:component this={PersonIcon} /> -->
					</section>
					<footer class="z-10">
						<button class="btn-primary">Launch</button>
					</footer></a
				>
				<a
					class="card variant-filled-surface-50-900-token card-hover shadow-md flex flex-col items-center gap-4 w-full h-min relative pb-8"
					href="/dashboard/customers"
					><header class="flex items-center w-full h-auto overflow-hidden rounded-t">
						<img src={TruckSale} alt="TruckSale" />
					</header>
					<section class="flex items-center">
						<h4 class="h4 font-semibold">Customers</h4>
						<!-- <svelte:component this={PersonIcon} /> -->
					</section>
					<footer class="z-10">
						<button class="btn-primary">Launch</button>
					</footer></a
				>
				<a
					class="card variant-filled-surface-50-900-token card-hover shadow-md flex flex-col items-center gap-4 w-full h-min relative pb-8"
					href="/dashboard/reports"
					><header class="flex items-center w-full h-auto overflow-hidden rounded-t">
						<img src={Reports} alt="Reports" />
					</header>
					<section class="flex items-center">
						<h4 class="h4 font-semibold">Reports</h4>
						<!-- <svelte:component this={PersonIcon} /> -->
					</section>
					<footer class="z-10">
						<button class="btn-primary">Launch</button>
					</footer></a
				>
				<a
					class="card variant-filled-surface-50-900-token card-hover shadow-md flex flex-col items-center gap-4 w-full h-min relative pb-8"
					href="/dashboard/invoices"
					><header class="flex items-center w-full h-auto overflow-hidden rounded-t">
						<img src={Invoices} alt="Invoices" />
					</header>
					<section class="flex items-center">
						<h4 class="h4 font-semibold">Invoices</h4>
						<!-- <svelte:component this={PersonIcon} /> -->
					</section>
					<footer class="z-10">
						<button class="btn-primary">Launch</button>
					</footer></a
				>
				<a
					class="card variant-filled-surface-50-900-token card-hover shadow-md flex flex-col items-center gap-4 w-full h-min relative pb-8"
					href="/dashboard/credits"
					><header class="flex items-center w-full h-auto overflow-hidden rounded-t">
						<img src={Credits} alt="Credits" />
					</header>
					<section class="flex items-center">
						<h4 class="h4 font-semibold">Credits</h4>
						<!-- <svelte:component this={PersonIcon} /> -->
					</section>
					<footer class="z-10">
						<button class="btn-primary">Launch</button>
					</footer></a
				>
				<a
					class="card variant-filled-surface-50-900-token card-hover shadow-md flex flex-col items-center gap-4 w-full h-min relative pb-8"
					href="/dashboard/claims"
					><header class="flex items-center w-full h-auto overflow-hidden rounded-t">
						<img src={Mechanic} alt="Mechanic" />
					</header>
					<section class="flex items-center">
						<h4 class="h4 font-semibold">Claims</h4>
						<!-- <svelte:component this={PersonIcon} /> -->
					</section>
					<footer class="z-10">
						<button class="btn-primary">Launch</button>
					</footer></a
				>
			</div>
		</div>
	</div>
{:else if userData && !userData.publicMetadata.ts_role}
	<div class="flex flex-col">
		<div class="flex gap-4 justify-center items-center h-screen">
			<h3 class="h3">
				You do not have access yet, please email <span class="link">scott@trucksuite.com</span>
			</h3>
		</div>
	</div>
{:else}
	<div class="flex flex-col">
		<div class="flex gap-4 justify-center items-center">
			<SignedOut>
				<SignIn />
			</SignedOut>
		</div>
	</div>
{/if}
