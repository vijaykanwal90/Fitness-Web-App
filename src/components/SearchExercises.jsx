import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import  {useEffect, useState} from 'react';
const SearchExercises = () => {
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
        width:{lg:'1170px',xs:'350px'},
        backgroundColor:'#fff',
        borderRadius:'40px'
      }}
      
        value=""
        type="text"
        onChange={(e)=>{}}
        placeholder='Search Exercises'

        />
        <Button   variant="contained" color="error" className="search-btn">Search</Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises
