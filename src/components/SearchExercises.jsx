import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import  {useEffect, useState} from 'react';
import  {exerciseOptions ,fetchData} from '../utils/fetchData';

const SearchExercises = () => {
  const [search,setSearch]=useState('');
  const handleSearch =async ()=>{
    // console.log("search");
    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
    console.log(exerciseData);

    }
  }
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
        type="text"
        onChange={(e)=>setSearch(e.target.value.toLowerCase())}
        placeholder='Search Exercises'

        />
        <Button   variant="contained" color="error" className="search-btn"
         sx={{
bgcolor:"FF2625",
color:"#fff",
textTransform:'none',
width:{lg:'175px',xs:"80px"},
height:"56px",
position:'absolute',
// right:'0',
// borderRadius:"40px",
fontSize:{lg:'20px',xs:'14px'}
        }}
        onClick={handleSearch}
        >Search</Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises
