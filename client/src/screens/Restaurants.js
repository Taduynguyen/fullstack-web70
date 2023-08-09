import { Card, List, Button, Modal, Space } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import RestaurantModal from '../modals/RestaurantModal';

function Restaurants()
{

  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisibleModalRestaurent, setIsVisibleModalRestaurent] = useState(false);
  const [restaurant, setRestaurant] = useState();

  useEffect(() =>
  {
    getAllRestaurants()
  }, [])

  const getAllRestaurants = async () =>
  {
    const api = `http://localhost:3001/api/v1/restaurants`;

    try {
      const res = await axios.get(api)

      if (res && res.status === 200 && res.data) {
        setRestaurants(res.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemove = async (item) =>
  {
    Modal.confirm({
      title: 'Delete item',
      content: 'Are you sure want to delete item?',
      onOk: async () =>
      {
        const api = `http://localhost:3001/api/v1/restaurants?id=${item._id}`;

        try {
          // const res = await axios.delete(api)



        } catch (error) {
          console.log(error)
        }
      }
    })



    getAllRestaurants()
  }


  return (
    <div className='container mt-4'>
      <Card  title='Restaurant' extra={<Button onClick={() => setIsVisibleModalRestaurent(true)}>Add new</Button>}>
        {restaurants.length > 0 ? <>
        <List dataSource={restaurants} renderItem={(item) => <Card className='m-2' title={item.name} extra={<Space>
          <Button onClick={() => {
            setRestaurant(item)
            setIsVisibleModalRestaurent(true)
          }} type='primary'>Edit</Button>
          <Button onClick={() => handleRemove(item)} type='primary' danger>Del</Button>
        </Space>} />} />
      </> : <p>Data not found</p>}

      </Card>
      
      <RestaurantModal isVisible={isVisibleModalRestaurent} onClose={() => {
        setRestaurant(undefined)
        setIsVisibleModalRestaurent(false) 
        getAllRestaurants()
        }} restaurant={restaurant} />
    </div>)
}

export default Restaurants