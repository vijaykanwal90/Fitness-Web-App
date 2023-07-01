import React ,{useState} from 'react'
import {Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  return (
    <Box>
<HeroBanner />
<SearchExercises />
<Exercises />
    </Box>
  )
}

export default Home
