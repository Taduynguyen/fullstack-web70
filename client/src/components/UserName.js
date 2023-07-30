import React, { useEffect, useState } from 'react'
import axios from 'axios';

function UserName({ uid })
{

  const [userDetail, setUserDetail] = useState();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() =>
  {
    uid && getUserById()
  }, [uid])



  const getUserById = async () =>
  {
    const api = `http://localhost:3001/api/v1/users/users-detail?id=${uid}`;
    setIsLoading(true);
    try {
      const res = await axios({
        method: 'get',
        url: api,
        headers: {
          'apiKey': 'user1',
          'Content-Type': 'application/json'
        },
      });

      if (res && res.status === 200 && res.data) {
        setUserDetail(res.data);

        // console.log(res)

        setIsLoading(false);
      } else {
        setIsLoading(false);
        console.log('user not found');
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }


  return userDetail ? <p>{userDetail.name}</p> : (
    <p>User not found</p>
  )
}

export default UserName