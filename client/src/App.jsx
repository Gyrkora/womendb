import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import TasksPage from './pages/TasksPage';
// import TaskFormPage from './pages/TaskFormPage';
import { Navigation } from './components/Navigation';
// import { Toaster } from 'react-hot-toast';
// import { Categories } from './pages/Categories';
import { WomenByCategory } from './pages/WomanByCategory';
import RootComponent from './components/RootComponent';

function App() {
	return (
		<BrowserRouter>
			<Navigation />

			<Routes>
				{/* <Route path="/" element={<Navigate to="/tasks" />} />
				<Route path="/tasks/api/v1/categories" exact component={Categories} />
				<Route path="/category/:categoryId" component={WomenByCategory} /> */}

				<Route path="/" element={<Navigate to="/tasks" />} />
				<Route path="/tasks" element={<RootComponent />} />
				<Route path="/category/:categoryId" element={<WomenByCategory />} />
				{/* <Route path="/tasks-create" element={<TaskFormPage />} /> */}
				{/* <Route path="/tasks/:id" element={<TaskFormPage />} /> */}
			</Routes>
			{/* <Toaster /> */}
		</BrowserRouter>
	);
}

export default App;
// https://www.youtube.com/watch?v=38XWpyEK8IY&t=6s&ab_channel=FaztCode

// http://127.0.0.1:8000/tasks/api/v1/women/?category=2
