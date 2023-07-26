/** @format */

import './App.css';
import 'antd/dist/reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import PostsScreen from './screens/PostsScreen';
import PostDetail from './screens/PostDetail';
import AddNewPost from './screens/AddNewPost';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomeScreen />} />
				<Route path='/posts' element={<PostsScreen />} />
				<Route path='/post-detail' element={<PostDetail />} />
				<Route path='/add-new' element={<AddNewPost />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
