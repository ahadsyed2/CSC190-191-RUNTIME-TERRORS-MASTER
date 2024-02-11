import React, {useState, useEffect} from 'react'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { hamburgerMenu } from './hamburgerMenu';
import { IconContext } from 'react-icons';
import NavbarMenu from '../components/navbarMenu';
import './ProfilePage.css'
import { useProfileContext } from '../hooks/useProfileContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { usePostContext } from '../hooks/usePostContext';


const ViewPost = () => {
  
  const {post, dispatch} = usePostContext();

  var id = localStorage.getItem('post');
  localStorage.setItem('post', id)
  if(id == undefined){
    id = -1;
  }


  useEffect(() => {
    const fetchPost = async () => {
      
      const response = await fetch('/api/postRoutes/'+id)
      const json = await response.json()

      if(response.ok){
        console.log('response Ok')
        dispatch({type: 'SET_POST', payload: json})
      } 
    
    }
  
      fetchPost();
  })

  {/* Return statement only works if you ctrl+x the h3 and p tags out, refresh, then paste them back in for some reason*/}
  return(
    <div>
      {post ? 'Yes, post object exists' : 'No, post object does not exist'}
      <h3>{post.make} {post.model}</h3>
      <p>${post.price} {post.location}</p>
      <p>{post.mileage} {post.location}</p>
    </div>
    
  )

} 

export default ViewPost;