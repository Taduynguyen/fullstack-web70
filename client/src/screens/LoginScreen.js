/** @format */

import { Card, Form, Input, Button, Space, message } from 'antd';
import React, { useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LoginScreen() {
	const fromRef = useRef();

	const handleRegister = async (values) => {
		const { password, rePassword, username } = values;

		if (password !== rePassword) {
			message.error('Mật khẩu không trùng khớp');
		} else {
			const api = 'http://localhost:3001/api/v1/users/register/';

			try {
				const res = await axios({
					method: 'post',
					maxBodyLength: Infinity,
					url: api,
					headers: {
						'Content-Type': 'application/json',
					},
					data: { username, password },
				});

				if (res && res.status === 200 && res.data) {
					const accesstoken = res.data.token;

					localStorage.setItem('accessToken', accesstoken);
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div className='container'>
			<div className='row mt-5'>
				<div className='col '>
					<Card>
						<h1>Register</h1>
						<Form
							layout='vertical'
							size='large'
							ref={fromRef}
							onFinish={handleRegister}>
							<Form.Item
								name={'username'}
								label='User name'
								rules={[
									{
										required: true,
										message: 'Vui lòng nhập username!',
									},
								]}>
								<Input max={20} showCount allowClear placeholder='username' />
							</Form.Item>
							<Form.Item
								name={'password'}
								label='Password'
								rules={[
									{
										required: true,
										message: 'Vui lòng nhập password!',
									},
								]}>
								<Input.Password max={20} min={6} placeholder='password' />
							</Form.Item>
							<Form.Item
								name={'rePassword'}
								label='Confirm Password'
								rules={[
									{
										required: true,
										message: 'Vui lòng nhập lại mật khẩu!',
									},
								]}>
								<Input.Password max={20} min={6} placeholder='password' />
							</Form.Item>
						</Form>

						<div className='text-center'>
							<Button
								size='large'
								type='primary'
								onClick={() => fromRef.current.submit()}>
								Register
							</Button>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default LoginScreen;
