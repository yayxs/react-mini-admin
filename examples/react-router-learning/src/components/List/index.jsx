import React, { memo } from 'react'
import {useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import queryString from '../../utils/queryString'
export default memo(function List(props) {
    const location = useLocation();
    console.log(location)
    // {pathname: "/list", search: "?id=123", hash: "", state: undefined}
    let res =  queryString(location.search.slice(1))
    console.log(res)

    useEffect(()=>{
       
    },[])
    return (
        <div>
            列表页
        </div>
    )
})
