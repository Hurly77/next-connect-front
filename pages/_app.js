import { Provider } from 'react-redux';
import Layout from '@/layout/layout';
import store from '../store/redux/index';
import '@/styles/global.css';

function MyApp({ Component, pageProps }) {
	const NestedLayout = Component.NestedLayout || Empty;
	return (
		<Provider store={store}>
			<Layout>
				<NestedLayout>
					<Component {...pageProps} />
				</NestedLayout>
			</Layout>
		</Provider>
	);
}

const Empty = ({ children }) => <>{children}</>;

export default MyApp;
