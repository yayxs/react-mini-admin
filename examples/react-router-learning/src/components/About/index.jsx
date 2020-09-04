import React, { memo , useEffect} from 'react'
import {useParams } from 'react-router-dom'
export default memo(function Index() {

    const params = useParams()
   

    console.log(params)
    return (
        <div>
            这是关于
        </div>
    )
})
