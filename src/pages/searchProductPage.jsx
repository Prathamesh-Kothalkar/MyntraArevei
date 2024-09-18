import {  Grid } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
const server = import.meta.env.VITE_BACKEND_SERVER;

export default function SearchProductPage() {
        const navigate = useNavigate();
        const [search,setSearch] = useState([])
        const searchQuery = new URLSearchParams(useLocation().search);
        useEffect(()=>{
                axios.get(`${server}/v1/product/search`, 
                        {
                            params:{
                                'q':searchQuery.get('q')
                            }
                        }
                ).then((resp)=>{console.log(resp.data);setSearch(resp.data)}).catch((err)=>console.log(err))
        },[searchQuery.get('q')])
  return (
    <div className=' mt-[50px] pt-28 w-full sm:w-[90%] md:w-[80%] mx-auto'>
      <Grid container spacing={1}>
        { search?.map((item)=>{
  return (
    <>
  <Grid item xs={6} sm={4} md={3} lg={2.4} >
  <div className="box  w-[clamp(100,calc(30%/2rem+10px),300)]  mx-auto " onClick={()=>navigate(`/product/${item?._id}`)}>
            <div className='rounded-lg h-[200px] md:h-[250px] overflow-hidden'>
            <img className='object-cover object-top w-full h-full' src={item?.images[0]} alt="" />
            </div>
            <div className="p-2 ">

              <h1 className='font-sans font-medium text-clamp-p line-clamp-2 leading-4 md:leading-6'>{item?.name}</h1>
              <p className=' text-clamp-h5 text-green-800' >&#8377;{item?.price} </p>
            </div>
            </div>
  </Grid>
  </>
    )  })}
      </Grid>
    </div>
  )
}
