import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { WomenByCategory } from './pages/WomanByCategory';
import RootComponent from './components/RootComponent';

function App() {
	return (
		<BrowserRouter>
			<Navigation />

			<Routes>
				<Route path="/" element={<RootComponent />} />
				<Route path="/category/:categoryId" element={<WomenByCategory />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
