/** @format */

import React, { useRef } from 'react';
import { Button, Card, Form, Input } from 'antd';
import axios from 'axios';

function AddNewPost() {
	const formRef = useRef();

	const handlePostNewPost = (values) => {
		let config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'http://localhost:3001/api/v1/posts/',
			headers: {
				'Content-Type': 'application/json',
			},
			data: {
				...values,
				id: 102,
				userId: 1,
			},
		};

		axios
			.request(config)
			.then((response) => {
				console.log(JSON.stringify(response.data));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className='container mt-4'>
			<Card title='Addnew'>
				<Form
					layout='vertical'
					size='largel'
					ref={formRef}
					onFinish={handlePostNewPost}>
					<Form.Item
						rules={[
							{
								required: true,
								message: 'Vui lòng nhập tiêu đề',
							},
						]}
						name={'title'}
						label='Tiêu đề'>
						<Input placeholder='Tiêu đề' max={150} showCount allowClear />
					</Form.Item>
					<Form.Item name={'body'} label='Nội dung'>
						<Input.TextArea placeholder='Nội dung' />
					</Form.Item>
				</Form>
				<div className='text-right'>
					<Button onClick={formRef.current.submit()}>Post</Button>
				</div>
			</Card>
		</div>
	);
}

export default AddNewPost;
