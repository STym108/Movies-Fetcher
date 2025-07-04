import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'
const Api_url="https://www.omdbapi.com/?i=tt3896198&apikey=7f9ea793"

import './index.css'
import Cards from './Cards';

const App = () => {

  var [movies,changemovies]=useState([]);

  const searchit=async (title)=>{
  const response=await fetch(`${Api_url}&s=${title}`);
  const data= await response.json();
changemovies(data.Search);
console.log(data);
  }
 
//onclick function
var clickfun=()=>{
var inputval=document.querySelector(".searchinput").value;
searchit(inputval);

}

  return (
    <div>
<div className='titlename'><h1>  Cine </h1></div>

<div className='moviename'>
  <input type="text" placeholder='Enter movie name' className='searchinput'/>
<button className='butt' onClick={clickfun}>search</button>
</div>

{movies?.length>0?(
  <div className='containor'>
    {movies.map((movie)=>(
    <Cards movie={movie}/>
    ))}
  </div>
): (
  <div className='empty'><h1>Either You have not searched any movie or the movie name is invalid</h1></div>
)}
    </div>

  )
}
export default App
