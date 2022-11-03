
import './App.css'
import Navbar from './Components/Header/Navbar'
import React from 'react'
import Content from './Components/Content/Content'
import PostData from './Components/Form/PostData'
import api from './Api/Contacts'
import DeleteData from './Api/DeleteData'


function App() {
  
  const RetriveApi = async () => {
const response = await api.get("/contacts")
return response.data;
  }
  
  return ( 
    <div>
     
      <Navbar/>
      <DeleteData/>
      
      <PostData/>
    <br />
    <br />
    



  <Content/>




    </div>
  )
}

export default App
