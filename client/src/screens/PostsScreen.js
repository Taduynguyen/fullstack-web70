/** @format */

import React, { useState, useEffect } from 'react';
import { Button, Card, List, Spin } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostsScreen() {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getAllPosts();
	}, []);

	const getAllPosts = async () => {
		setIsLoading(true);

		const api = `http://localhost:3001/api/v1/posts`;

		try {
			const res = await axios.get(api);

			if (res && res.status === 200 && res.data) {
				setPosts(res.data.data);
				setIsLoading(false);
			} else {
				setIsLoading(false);
			}
		} catch (error) {
			console.log(error);
			setIsLoading(false);
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
							<a>{item.userId}</a>
						</List.Item>
					)}
				/>
			</Card>
		</div>
	);
}

export default PostsScreen;
