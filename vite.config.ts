import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import prettier from 'vite-plugin-prettier';

export default defineConfig(configEnv => {
	const isDevelopment = configEnv.mode === 'development';

	return {
		base: '/v3/',
		plugins: [react(), prettier()],
		resolve: {
			alias: {
				'@components': resolve(__dirname, 'src', 'components'),
				'@hooks': resolve(__dirname, 'src', 'hooks'),
				'@assets': resolve(__dirname, 'src', 'assets')
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
