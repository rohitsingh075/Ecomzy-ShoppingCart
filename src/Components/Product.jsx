import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../redux/Slices/cartSlice';
import { remove } from '../redux/Slices/cartSlice';

const Product = ({ post }) => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    const addToCart = () => {
        dispatch(add(post));
        toast.success("Added to Cart ");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Removed from Cart");
    }


    return (
        <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline-4 outline-green-400 h-[400px]  shadow-[10px_10px_10px_5px_rgba(0,0,0,0.7)] ]
'>


            {/* Card i.e. Item Title */}
            <div>
                <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
            </div>

            {/* Item Description */}
            <div className='w-40 text-gray-400 text-[12px]  text-left font-semibold'>
                <p>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>

            {/* Item Image */}
            <div className='h-[180px] '>
                <img src={post.image} alt="" className='h-full w-full object-contain' />
            </div>

            {/* Item Price and Buy Button */}
            <div className='flex justify-between gap-12'>

                <div>
                    <p className='text-green-700 font-semibold'>₹{(85.17 * (post.price)).toFixed(0)}</p>
                </div>

                {
                    cart.some((p) => p.id == post.id) ?

                        (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-red-400 hover:text-white transition duration-300 ease-in' onClick={removeFromCart} >
                            Remove Item
                        </button>) :

                        (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' onClick={addToCart}>
                            Add to Cart
                        </button>)
                }

            </div>
        </div>

    )
}

export default Product
