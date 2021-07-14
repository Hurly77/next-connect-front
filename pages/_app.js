import { Provider } from 'react-redux';
import Layout from '@/layout/layout';
import store from '../store/redux/index';
import '@/styles/global.css';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />;
			</Layout>
		</Provider>
	);
}

export default MyApp;
