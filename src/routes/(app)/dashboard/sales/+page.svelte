<script lang="ts">
	import { goto } from '$app/navigation';
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import AddCustomerIcon from '$lib/assets/icons/addCustomer.svelte';
	import Trucker from '$lib/assets/images/Trucker.png';
	import FutureProgram from '$lib/assets/images/FutureProgram.png';
	import AddCustomer from '$lib/assets/icons/addCustomer.svelte';

	export let data;
	$: ({ userData } = data);

	const modalStore = getModalStore();

	const modal: ModalSettings = {
		type: 'component',
		component: 'modalProducersSigning',
		title: 'Create a New Producer Process',
		body: `In order to Create a New Producer, you must first Send Producers Agreement for E-signature.`,
		backdropClasses: 'opacity-95',
		modalClasses: 'p-8'
	};
</script>

{#if userData}
	<div class="flex flex-col gap-4 p-8">
		<h2 class="h2">Sales</h2>
		<p>I want to...</p>
		<div class="card p-4 flex flex-col items-start gap-4 mb-8 border-b border-surface-200">
			<!-- <h4 class="h4 font-semibold">Sales</h4> -->
			<h4 class="h4 font-semibold flex gap-2 items-center">
				Sell a TruckSuite Warranty to my Customer (please select options below, if applicable)
			</h4>
			<div class="flex gap-4">
				<input
					class="checkbox"
					type="checkbox"
					id="inspection"
					name="inspection"
					value="inspection"
				/>
				<label class="label" for="inspection">Add Inspection Form</label>
			</div>
			<div class="flex gap-4">
				<input class="checkbox" type="checkbox" id="financing" name="financing" value="financing" />
				<label class="label" for="financing">Add TruckSuite Financing</label>
			</div>
			<button class="btn-primary" on:click={() => goto('/dashboard/sales/new-warranty')}
				>Get Started</button
			>
		</div>
		<div class="card p-4 flex flex-col items-start gap-4 mb-8 pb-8 border-b border-surface-200">
			<h4 class="h4 font-semibold flex gap-2 items-center">
				Sell an Non-Warranty TruckSuite Product to my Customer (please select one option below)
			</h4>
			<div class="flex gap-4">
				<input class="radio" type="radio" name="other_products" value="gap" />
				<label class="label" for="other1">GAP</label>
			</div>
			<div class="flex gap-4">
				<input class="radio" type="radio" name="other_products" value="diesel-decoder" />
				<label class="label" for="other1">Diesel Decoder</label>
			</div>
			<div class="flex gap-4">
				<input class="radio" type="radio" name="other_products" value="ts-health" />
				<label class="label" for="other1">TS Health</label>
			</div>
			<div class="flex gap-4">
				<input class="radio" type="radio" name="other_products" value="ts-dental" />
				<label class="label" for="other1">TS Dental</label>
			</div>
			<div class="flex gap-4">
				<input class="radio" type="radio" name="other_products" value="pm-program" />
				<label class="label" for="other1">Preventive Maintenance</label>
			</div>
			<div class="flex gap-4">
				<input class="radio" type="radio" name="other_products" value="other" />
				<label class="label" for="other1">Other Product</label>
			</div>
			<button class="btn-primary">Get Started</button>
		</div>
		<div class="card p-4 flex flex-col items-start gap-4 mb-8 pb-8 border-b border-surface-200">
			<h4 class="h4 font-semibold flex gap-2 items-center">Explore All TruckSuite Products</h4>
			<button class="btn-primary">View Our Products</button>
		</div>
		<!-- <div
				class="grid gap-4 w-full grid-rows-1"
				style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))"
			>
				<a
					class="card variant-filled-surface-50-900-token card-hover shadow-md flex flex-col items-center gap-4 w-full h-min relative pb-8"
					href="/dashboard/customers/new-warranty"
					><header class="flex items-center w-full h-auto overflow-hidden rounded-t">
						<img src={Trucker} alt="Trucker" />
					</header>
					<section class="flex items-center px-4">
						<h4 class="h4 font-semibold">New Warranty Customer</h4>
					</section>
					<footer class="z-10">
						<button class="btn-primary">Launch</button>
					</footer></a
				>
				<a
					class="card variant-filled-surface-50-900-token card-hover shadow-md flex flex-col items-center gap-4 w-full h-min relative pb-8"
					href="/dashboard/customers/new-warranty"
					><header class="flex items-center w-full h-auto overflow-hidden rounded-t">
						<img src={Trucker} alt="Trucker" />
					</header>
					<section class="flex items-center px-4">
						<h4 class="h4 font-semibold">New Warranty Customer (with Inspection Form)</h4>
					</section>
					<footer class="z-10">
						<button class="btn-primary">Launch</button>
					</footer></a
				>
				<a
					class="card variant-filled-surface-50-900-token card-hover shadow-md flex flex-col items-center gap-4 w-full h-min relative pb-8"
					href="/dashboard/customers/new"
					><header class="flex items-center w-full h-auto overflow-hidden rounded-t">
						<img src={FutureProgram} alt="FutureProgram" />
					</header>
					<section class="flex items-center px-4">
						<h4 class="h4 font-semibold">New Future Program Customer</h4>
					</section>
					<footer class="z-10">
						<button class="btn-primary">Launch</button>
					</footer></a
				>
			</div> -->
	</div>
{/if}
