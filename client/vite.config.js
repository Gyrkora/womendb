import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
	base: command === 'build' ? '/static/' : '/',
	plugins: [react()],
	build: {
		outDir: '../../womendb-back-repo/frontend_build/dist',
		emptyOutDir: true,
	},
}));