import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/features/cart';
import { NumberInput } from '../../components/NumberInput/NumberInput';
import { updateItemToCartAction } from '../../store/actions/cartAction';
import { update } from 'lodash';

const headers = [
    "Product Details", "Price", "Quantity", "Shipping", "SubTotal", "Action"
];




const Cart = () => {

    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();






    const onChangeQuantity = useCallback((value, productId, variantId) => {

        console.log("Receive ",value);

        dispatch(updateItemToCartAction({
            productId: productId,
            variant_id: variantId,
            quantity: value
        }))

        
    },[dispatch])

    

  return (
    <div className='p-4' >
        <p className='text-sm text-black p-4'>Shopping Bag</p>
        <table className='w-full text-lg'>
            <thead className='text-sm bg-black text-white uppercase'>
                <tr>
                    {headers?.map(header => {
                        return (
                            <th scope='col' className='px-6 py-3'>
                                {header}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    cartItems?.map((item, index) => {
                        return (
                            <tr className='p-4 bg-white border-b'>
                                <td>
                                    <div className='flex p-4'>
                                        <img src={item?.thumbnail}  alt={'product ' + index} className='w-[120px] h-[120px] object-cover'/>
                                        <div className='flex flex-col text-sm px-2 text-gray-600'>
                                            <p>{item?.name || 'Name'}</p>
                                            <p>Size {item?.variant?.size}</p>
                                            <p>Color {item?.variant?.color} </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='text-center text-sm text-gray-600' >${item?.price}</p>
                                </td>
                                <td>
                                    <NumberInput max={2} quantity={item?.quantity} onChangeQuantity={(value) => onChangeQuantity(value, item?.productId, item?.variant?.id)} />
                                </td>
                                <td>
                                    <p className='text-center text-sm text-gray-600'>Free</p>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>    
    </div>
  )
}

export default Cart