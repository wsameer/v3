import App from '@components/App';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<HelmetProvider>
		<App />
	</HelmetProvider>
);
