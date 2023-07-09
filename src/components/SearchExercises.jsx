import  { React, useEffect, useState } from 'react';

import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollBar';
import  {exerciseOptions ,fetchData} from '../utils/fetchData';

const SearchExercises = ({setExercises, bodyPart, setBodyPart }) => {
  const [search,setSearch]=useState('');
  // const [exercises, setExercises] = useState([]);
  const [bodyParts,setBodyParts]=useState([]);

  useEffect(()=>{
const fetchExercisesData = async () => {
  const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
  setBodyParts(['all', ...bodyPartsData]);
  console.log(typeof setBodyParts );
};
fetchExercisesData();
  }, []);
  const handleSearch = async () => {
    console.log('handleSearch');
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
console.log(exercisesData);
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };


  return (
    <Stack
    alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight={700}
      sx={{fontSize:{lg:"44px", xs:"30px"}}} mb="44px"  textAlign="center">
        Awesome Exercises You <br/> Should Know
      </Typography>
      <Box postion="relative" mb="72px">
        <TextField height="76px"
        sx={{
          input:{fontWeight:'700',
        border:'none', borderRadius:'4px'},
        width:{lg:'800px',xs:'350px'},
        backgroundColor:'#fff',
        borderRadius:'40px'
      }}
      
        value={search}
        
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        placeholder='Search Exercises'
        type="text"
        />
        <Button   variant="contained" color="error" className="search-btn"
         sx={{
           color:"#fff",
           bgcolor:"FF2625",
          textTransform:'none',
          width:{lg:'175px',xs:"80px"},
          height:"56px",
          position:'absolute',
          fontSize:{lg:'20px',xs:'14px'}
        }}
        onClick={handleSearch}
        >Search</Button>
      </Box>
      <Box sx={{postion:'relative',width:'100%',p:'20px'}}>
<HorizontalScrollBar data={bodyParts}
setbodyPart={setBodyPart}
bodyPart = {bodyPart} 
isBodyPart={true}  
/>
      </Box>
    </Stack>
  )
}

export default SearchExercises
// const handleSearch = async ()=>{
//   // console.log("search");
//   if(search){
//     const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
//   // console.log(exerciseData);
//   const searchedExercises = exercisesData.filter((item)=> {
//     const exerciseTarget = exercise.target
//     ? exercise.target.toLowerCase()
//     : "";
//   const exerciseBodyPart = exercise.bodypart
//     ? exercise.bodypart.toLowerCase()
//     : "";
//   const exerciseName = exercise.name ? exercise.name.toLowerCase() : "";

//   return (
//     exerciseName.includes(search) ||
//     exerciseTarget.includes(search) ||
//     exerciseBodyPart.includes(search)
//   );
// });
  
//   setSearch("");
//   setExercises(searchedExercises);
//   }
// };
// isBodyParts={isBodyParts}
