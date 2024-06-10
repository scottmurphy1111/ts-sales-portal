<script lang="ts">
	import LogoSalesportal from '$lib/assets/images/logo-salesportal.svg';
</script>

<div
	class="bg-welcome absolute top-0 left-0 bg-cover w-full h-full z-0"
	style="background-position: bottom center"
></div>
<div class="flex flex-col gap-0 justify-center items-center h-full w-auto relative z-10">
	<div class="card variant-soft flex flex-col gap-8 p-8">
		<div class="w-[300px]">
			<img class="block dark:hidden" src={LogoSalesportal} alt="ts-logo" />
			<!-- <img class="hidden dark:block" src={TsLogoDark} alt="ts-logo-dark" /> -->
		</div>

		<a class="btn-primary" href="/dashboard">Launch</a>
	</div>
</div>
