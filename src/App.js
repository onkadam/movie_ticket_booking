import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL, FRONTEND_URL} from './helper/Helper';

import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { allPublicRoutes } from './routes/allRoutes';

// export const initialState={
//   movies:[ {
//     name:'Alone2',
//     image:'http://pixner.net/boleto/demo/assets/images/movie/movie01.jpg'
//   },
//   {
//     name:'Mars2',
//     image:"http://pixner.net/boleto/demo/assets/images/movie/movie02.jpg"
//   },
//   {
//     name:'Venus2',
//     image:"http://pixner.net/boleto/demo/assets/images/movie/movie03.jpg"
//   } ],
//   cart:[]
// }

export const MovieContext = createContext()
   
function App() {
  //2.1
   const [initialState, setInitialState] = useState({
                                                      movies:[],
                                                      cart:[]
                                                    })


   useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/movies?populate=*`)
    .then(function(response){
      //console.log('response---->',response.data.data)
      setInitialState({
        movies: [
        ...response.data.data.map((cv,idx,arr)=>{
          return {
            name:cv.attributes.name,
            image:BACKEND_URL+cv.attributes.image_thumb.data.attributes.url
          }
        })
      ]
      })
    })
    .catch(function(error){
      console.log(error)
    })
    .finally(function(){

    })
   },[])
   //2.2


   //2.3
    return (
      <MovieContext.Provider value={initialState}>
        {console.log('123----',initialState)}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
            {
              allPublicRoutes && allPublicRoutes.map((cv,idx,arr)=>{
                return <Route key={idx} path={cv.path} element={cv.element}/>
              })
            }
            </Route>
            <Route path='/sign-in' element={<SignIn/>}></Route>
            <Route path='/sign-up' element={<SignUp/>}></Route>
            <Route path="*" element={<NoPage/>}></Route>
          </Routes>
        </BrowserRouter>
        </MovieContext.Provider> 
    );
} 

export default App;
