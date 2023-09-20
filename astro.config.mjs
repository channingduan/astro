import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	output: 'hybrid',
	adapter: node({
		mode: 'standalone',
	}),
	// adapter: node({
	// 	mode: 'middleware' // or 'standalone'
	// }),
	// output: 'hybrid',
	integrations: [
		starlight({
			title: 'Example Site',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Marketing Pages',
					items: [
						{ label: 'page0920', link: '/marketing/page0920/' },
					],
				},{
					label: 'Sign Pages',
					items: [
						{ label: 'about', link: '/about/me' },
					],
				},
			],
		}),
	],
});
