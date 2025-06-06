import React, { useState } from 'react'
import { data } from '../data/data'

const Food = (props) => {
    const [ foods, setFoods ] = useState( data )
    
   
    console.log( data )

    // filter type burger/pizza/etc
    const filterType = ( category ) => {
        setFoods( data.filter( ( item ) => (
            item.category === category
        ) ) )
    }
    const filterPrice = ( price ) => {
        setFoods( data.filter( ( item ) => (
            item.price === price
        ) ) )
    }
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            {/* filter row */ }
            <div className='flex flex-col lg:flex-row justify-between'>

                {/* filter type */ }
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className=' flex justify-between flex-wrap'>
                        <button onClick={ () => setFoods( data ) } className='border-orange-600 text-orange-600 m-1  hover:text-white hover:bg-orange-600 '>All</button>
                        <button onClick={ () => filterType( 'burger' ) } className='border-orange-600 text-orange-600 m-1  hover:text-white hover:bg-orange-600 '>Burgers</button>
                        <button onClick={ () => filterType( 'pizza' ) } className='border-orange-600 text-orange-600 m-1  hover:text-white hover:bg-orange-600 '>Pizza</button>
                        <button onClick={ () => filterType( 'salad' ) } className='border-orange-600 text-orange-600 m-1  hover:text-white hover:bg-orange-600 '>Salade</button>
                        <button onClick={ () => filterType( 'chicken' ) } className='border-orange-600 text-orange-600 m-1 hover:bg-orange-600 hover:text-white'>Chicken</button>
                    </div>
                </div>
                {/* filter price */ }
                <div>
                    <p className='font-bold text-gray-700' >Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={ () => filterPrice( '$' ) } className='border-orange-600 text-orange-600 m-1 hover:bg-orange-600 hover:text-white'>$</button>
                        <button onClick={ () => filterPrice( '$$' ) } className='border-orange-600 text-orange-600 m-1 hover:bg-orange-600 hover:text-white'>$$</button>
                        <button onClick={ () => filterPrice( '$$$' ) } className='border-orange-600 text-orange-600 m-1 hover:bg-orange-600 hover:text-white'>$$$</button>
                        <button onClick={ () => filterPrice( '$$$$' ) } className='border-orange-600 text-orange-600 m-1 hover:bg-orange-600 hover:text-white'>$$$$</button>
                    </div>
                </div>

            </div>
            {/* display foods */ }
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                { foods.map( ( item, index ) => (
                    <div onClick={()=> {
                        props.setOverlay(!props.overlay)
                        props.setSelected(item) }} key={ index } className='border-gray-400 rounded-lg shadow-lg hover:scale-105 duration-300'>
                    
                        <img src={ item.image } alt={ item.name } className='w-full h-[200px] rounded-t-lg object-cover' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{ item.name }</p>
                            <p>
                                <span className='bg-orange-500 text-white rounded-full p-1'>{ item.price }</span>
                            </p>
                        </div>
                    </div> ) ) }
            </div>
        </div>
        
    )
}

export default Food