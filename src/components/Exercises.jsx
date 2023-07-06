import React , {useEffect, useState} from 'react';
import { Pagination } from "@mui/material";
import {Box , Stack , Typography} from '@mui/material/';
import {exerciseOptions , fetchData} from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
// import Loader from './Loader';
const Exercises = ({exercises, setExercises, bodyPart}) => {
  console.log(exercises);
const [currentPage , setCurrentPage]= useState(1);
const exercisePerPage = 9;
const indexOfLastExercise = currentPage * exercisePerPage;
const indexOfFirstExercise =  indexOfLastExercise - exercisePerPage;
const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise);
const paginate =(event , value) =>{
setCurrentPage =(value);
window.scrollTo({top:1800, behaviour:'smooth'})
};
// const [exercisePerPage] = useState(6);
 useEffect(() =>{
  const fetchExercisesData = async() =>{
   let exercisesData = [];
   if( bodyPart === 'all'){
   exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    }
    else {
      exercisesData = await fetchData ('https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}',exerciseOptions);
    }
    setExercises(exercisesData);
  };
  fetchExercisesData();
}, [bodyPart]);


// if(!currentExercises.length ) return <Loader />;
  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
    <Typography variant="h4"  mb="46px" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} >Showing Results</Typography>
    <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
      {currentExercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} />
      ))}
      
      </Stack>
      <Stack sx={{mt: {lg:'114px', xs:'70px'}}} alignItems="center">
        {exercises.length > 9 && (
          <Pagination 
          color="standard"
          shape="rounded" 
          defaultPage ={1}
            count = {Math.round(exercises.length / exercisePerPage)}
            page = {currentPage}
            onChange={paginate}
            size="large"/>
        )}
      </Stack>
    </Box>
  );
};

export default Exercises
