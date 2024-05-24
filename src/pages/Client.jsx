import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl } from './BackendUrl';





function Client() {

    
    
    const [products, setProducts]= useState([]) 
    useEffect(()=>{
         async function getCategories(){
            try{
                const response = await axios.get(`${backendUrl}/products`) ;
                setProducts(response.data);
                console.log(response.data);

            }catch(err){
                console.log("xatolik yuz berdi", err);
            } 
        }
        getCategories();
        
    },[])




  return (
    <div className=' grid grid-cols-4 '>
        {
            products.map(p =>(
                <div className=' bg-white p-4 shadow-xl w-[300px]  mb-3 '>
                   <img src={p.image} alt={p.name} width={300} height={300}/>
                   <h2 className=' text-bold text-[32px] text-center'>{p.title}</h2>
                   <h3><strong>subtitle:</strong>{p.subtitle}</h3>
                   <strong className='text-gray-400'><span className='text-black'>Price:</span> {p.price} so'm</strong>
                  <div className='w-[300px]'> 
                    <p><strong className='text-bold '>description:</strong>{p.description}</p>
                    </div>
                   <p><strong className='text-bold'>Color:</strong>{p.color}</p>
                   <p><strong className='text-bold'>Rate:</strong>{p.rate}</p>
                   <p><strong className='text-bold text-black'>Size:</strong>{p.size}</p>
                   <button  className='bg-gray-500 p-2 rounded-md w-[50%] my-4 ml-5' >Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default Client