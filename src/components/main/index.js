import React from 'react'
import Product from './left'
import Show from './right'
import data from '../../data'
const Course = () => {
    
    return (
        <div className='flex gap-8'>
            <Product data={data}/>
            <Show/>
        </div>
    )
}

export default Course
