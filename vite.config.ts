import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import prettier from 'vite-plugin-prettier';

export default defineConfig(configEnv => {
	const isDevelopment = configEnv.mode === 'development';

	return {
		plugins: [react(), prettier()],
		resolve: {
			alias: {
				components: resolve(__dirname, 'src', 'components'),
				hooks: resolve(__dirname, 'src', 'hooks')
			}
		},
		css: {
			modules: {
				generateScopedName: isDevelopment
					? '[name]__[local]__[hash:base64:5]'
					: '[hash:base64:5]'
			}
		}
	};
});
