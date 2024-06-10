<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import TsLogoSalesportal from '$lib/assets/images/logo-salesportal.svg';
	import TsLogoDarkSalesportal from '$lib/assets/images/logo-dark-salesportal.svg';
	import TireIcon from '$lib/assets/icons/tire.svelte';
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte';
</script>

<AppBar shadow="shadow-md">
	<svelte:fragment slot="lead">
		<div class="flex flex-col gap-0 justify-start items-start h-full w-auto relative">
			<a class="w-[240px]" href="/dashboard">
				<img class="block dark:hidden" src={TsLogoSalesportal} alt="logo-salesportal" />
				<img class="hidden dark:block" src={TsLogoDarkSalesportal} alt="logo-dark-salesportal" />
			</a>
		</div>
	</svelte:fragment>
	<div class="flex justify-items-start items-center gap-4">
		<img
			src="https://www.velocitytruckcenters.com/themes/vtc/assets/images/logo.webp"
			alt="logo"
			class="w-auto max-w-md"
		/>
	</div>
	<svelte:fragment slot="trail">
		<LightSwitch />
		<nav class="list-nav">
			<ul class="flex gap-4 items-center">
				<li class="flex gap-2">
					<SignedIn>
						<UserButton afterSignOutUrl="/dashboard" />
					</SignedIn>
				</li>
			</ul>
		</nav>
	</svelte:fragment>
</AppBar>
