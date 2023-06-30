import React ,{useState} from 'react'
import {Box} from '@mui/material';
import Herobanner from '../components/Herobanner';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  return (
    <Box>
<Herobanner />
<SearchExercises />
<Exercises />
    </Box>
  )
}

export default Home
