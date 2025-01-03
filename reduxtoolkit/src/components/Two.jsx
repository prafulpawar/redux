import React from 'react'
import {useSelector} from 'react'
function Two() {
    const {products} = useSelector((state)=>state)
    console.log(products)
  return (
    <div>Two</div>
  )
}

export default Two