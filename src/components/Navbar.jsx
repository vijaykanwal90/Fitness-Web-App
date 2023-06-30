import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import logo from '../assets/images/Logo.png';
const Navbar = () => {
  return (
    <Stack>
      <Link path="/">
        <img src={logo} alt="logo" />
      </Link>
      <stack>
        <Link to="/">Home</Link>
        <a href="#exercises">Exercises</a>
      </stack>
  
    </Stack>
  )
}

export default Navbar
