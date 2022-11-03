import axios from 'axios';
import React, { useEffect, useState } from 'react';



const Content = () => {
  const [Detail, setDetail] = useState([])
  console.log(Detail[1])

  useEffect(() => {
    const Data = async () => {
      const res = await axios.get("http://127.0.0.1:8000/apiV1/status/");
      setDetail(res.data);
    } 

  Data()
  }, [])



  return (
    <div className='container '>


      {
        Detail.map( (at) =>{
          return (
            <div className='container felx sm:text-center'>
{/* <h3 className='text-center'>USer ID : {at.id}</h3>
    <p className='text-center'>{at.content}</p>

    <div className='flex justify-center'>
    <img className='w-[400px] justify-center' src={at.image} alt="" />
           </div> */}

          
<div className=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0 ">
    <div className="w-full flex justify-between p-3">
      <div className="flex">
        <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
          <img src="https://avatars0.githubusercontent.com/u/38799309?v=4" alt="profilepic"/>
        </div>
        <span className="pt-1 ml-2 font-bold text-sm">{at.name}</span>
      </div>
      <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"><i className="fas fa-ellipsis-h pt-2 text-lg"></i></span>
    </div>
    <img className="w-full bg-cover" src={at.image}/>
    <div className="px-3 pb-2">
      <div className="pt-2">
        <i className="far fa-heart cursor-pointer"></i>
        <span className="text-sm text-gray-400 font-medium">12 likes</span>
      </div>
      <div className="pt-1">
        <div className="mb-2 text-sm">
          <span className="font-medium mr-2">{at.name}</span> 
        </div>
      </div>
      <div className="text-sm mb-2 text-gray-400 cursor-pointer font-medium">View all 14 comments</div>
      <div className="mb-2">
        <div className="mb-2 text-sm">
          <span className="font-medium mr-2">Id :{at.id}</span> {at.content}
     </div>
      </div>
    </div>
  </div>
            </div>
          )
        })
      }

      
      </div>
  )
    
};

export default Content;