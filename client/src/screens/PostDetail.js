/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Spin } from 'antd';

function PostDetail() {
	const [postDetail, setPostDetail] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const postId = 'fafhsjk';

	useEffect(() => {
		getPostDetail();
	}, [postId]);

	const getPostDetail = async () => {
		const api = `http://localhost:3001/api/v1/posts/post-detail?id=${postId}`;
		setIsLoading(true);
		try {
			const res = await axios.get(api);

			if (res && res.status === 200 && res.data) {
				setPostDetail(res.data);
				console.log(res.data);
				setIsLoading(false);
			} else {
				setIsLoading(false);
				console.log('post not found');
			}
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	};

	return (
		<div>
			<div className='container mt-4'>
				{isLoading ? (
					<Spin />
				) : postDetail ? (
					<Card>
						<h1>{postDetail.title}</h1>
						<p>{postDetail.body}</p>
					</Card>
				) : (
					<h1>Post not found</h1>
				)}
			</div>
		</div>
	);
}

export default PostDetail;
