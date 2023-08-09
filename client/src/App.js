/** @format */

import './App.css';
import { useEffect, useState } from 'react';
import 'antd/dist/reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
	LoginScreen,
	HomeScreen,
	PostsScreen,
	PostDetail,
	AddNewPost,
} from './screens';
import { Spin } from 'antd';
import Restaurants from './screens/Restaurants';

function App() {
	const [isLogin, setIsLogin] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getToken();
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	const getToken = async () => {
		const token = await localStorage.getItem('accessToken');

		if (token) {
			setIsLogin(true);
		}
	};

	return isLoading ? (
		<Spin />
	) : !isLogin ? (
		<>
			<LoginScreen />
		</>
	) : (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<PostsScreen />} />
				<Route path='/post-detail' element={<PostDetail />} />
				<Route path='/add-new' element={<AddNewPost />} />
				<Route path='/restaurants' element={<Restaurants />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
