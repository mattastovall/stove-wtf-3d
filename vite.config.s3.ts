
import { defineConfig } from 'vite';
import BASE_CONFIG from './vite.config';

// https://vitejs.dev/config/
export default defineConfig({
	...BASE_CONFIG,
	build: {
		manifest: true,
		rollupOptions: {
			output: {
				entryFileNames: `assets/[name].js`,
				chunkFileNames: `assets/[name].js`,
				assetFileNames: `assets/[name].[ext]`,
			},
		},
	},
});
