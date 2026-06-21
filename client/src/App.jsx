import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { WomenByCategory } from './pages/WomanByCategory';
import RootComponent from './components/RootComponent';
import { GlobalStyle } from './styles/GlobalStyle';
import { LanguageProvider } from './context/LanguageContext';

function App() {
	return (
		<LanguageProvider>
			<GlobalStyle />
			<BrowserRouter>
				<Navigation />

				<Routes>
					<Route path="/" element={<RootComponent />} />
					<Route path="/category/:categoryId" element={<WomenByCategory />} />
				</Routes>
			</BrowserRouter>
		</LanguageProvider>
	);
}

export default App;
