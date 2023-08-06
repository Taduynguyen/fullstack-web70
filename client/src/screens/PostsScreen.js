/** @format */

import React, { useState, useEffect } from 'react';
import { Button, Card, List, Spin, message } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserName from '../components/UserName';

function PostsScreen() {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getAllPosts();
	}, []);

	const getAllPosts = async () => {
		setIsLoading(true);

		const api = `http://localhost:3001/api/v1/posts`;
		const token = await localStorage.getItem('accessToken');
		if (token) {
			try {
				const res = await axios({
					method: 'get',
					url: api,
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
						apiKey: 'fasjfhasjk',
					},
				});

				if (res && res.status === 200 && res.data) {
					const data = res.data;
					if (data.length > 0) {
						setPosts(data);
					} else {
						message.error(res.data.message);
					}
					setIsLoading(false);
				} else {
					setIsLoading(false);
				}
			} catch (error) {
				console.log(error);
				setIsLoading(false);
			}
		}
	};

	return (
		<div className='container mt-4'>
			<Card
				extra={
					<Link to={'/add-new'}>
						<Button type='primary' title='Posts'>
							Add new
						</Button>
					</Link>
				}>
				<List
					itemLayout='vertical'
					isLoading={isLoading}
					pagination={[{ position: 'center' }]}
					dataSource={posts}
					renderItem={(item) => (
						<List.Item>
							<List.Item.Meta
								title={
									<Link to={`/post-detail?id=${item.id}`}>{item.title}</Link>
								}
								description={item.body}
							/>
							<UserName uid={item.userId} />
						</List.Item>
					)}
				/>
			</Card>
		</div>
	);
}

export default PostsScreen;
