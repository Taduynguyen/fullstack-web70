import { Form, Input, Modal } from 'antd'
import React, { useEffect, useRef } from 'react'
import {contansts} from '../constansts'
import axios from 'axios'

function RestaurantModal({isVisible, onClose, restaurant}) {
const formRef = useRef()
  useEffect(() => {
    restaurant && formRef.current.setFieldsValue({
      name: restaurant.name,
      address: restaurant.address.zipcode
    })
  }, [restaurant])

  

  const handleAddNew = async (values) => { 

    if (restaurant) {
      console.log('update')
    }else{
      const api = `http://localhost:3001/api/v1/restaurants/add-new`;

    try {
      const res  = await axios({
        method: 'post',
        url: api,
        maxBodyLength: Infinity,
        headers: {
          'Content-Type': 'application/json',
        },
        data: values
      })

      if (res.status === 200) {
        onClose()
      }
    } catch (error) {
      console.log(error)
    }
    }

    
  }

  return (
    <Modal open={isVisible} onCancel={onClose} okText='Đồng ý' cancelText='Hủy bỏ' onOk={() => formRef.current.submit()} title='fasfsa'>
      <Form ref={formRef} onFinish={handleAddNew} layout='vertical'>
        <Form.Item name={'name'} label='Tên nhà hàng'>
          <Input placeholder='Tên nhà hàng' />
        </Form.Item>
        <Form.Item name={'address'} label='Địa chỉ'>
          <Input placeholder='Hồ Chí Minh city' />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default RestaurantModal