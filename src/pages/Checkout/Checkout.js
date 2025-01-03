import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/features/cart'
import { fetchUserDetails } from '../../api/userInfo';
import { setLoading } from '../../store/features/common'

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState([]);

    const subTotal = useMemo(()=> {
      let value=0;
      cartItems?.forEach(element => {
        value += element?.subTotal
      });
      return value;
    },[cartItems])

    useEffect(()=>{
      dispatch(setLoading(true))
      fetchUserDetails().then(res=>{
        setUserInfo(res);
      }).catch(err=>{

      }).finally(()=>{
        dispatch(setLoading(false))
      })
    },[dispatch])





  return (
    <div className='p-8 flex'  >
      <div className='w-[70%]' >
        <div>
          {/* Address */}
          <p>Delivery Address</p>
        </div>
      </div>
      <div className=' w-[30%] border rounded-lg border-gray-500 p-4 flex flex-col gap-4' >
        <p>Order Summary</p>
        <p>Items Count - {cartItems?.length}</p>
        <p>SubTotal - ${subTotal}</p>
        <p>Shipping - FREE</p>
        <hr className='h-[2px] bg-gray-400' ></hr>
        <p>Total Amount - ${subTotal}</p>
      </div>
    </div>
  )
}

export default Checkout