import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import colors from 'tailwindcss/colors';
import { customTheme } from './src/custom-theme';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			backgroundImage: {
				welcome: "url('./src/lib/assets/images/welcome-bg.jpg')"
			}
		},
		colors: {
			'ts-blue': '#1575CF',
			'ts-gray-md': '#D5D5D5',
			'ts-gray-dk': '#4a4a4a',
			white: colors.white,
			black: colors.black
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [customTheme]
			}
		})
	]
} satisfies Config;
