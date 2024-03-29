import React,{useState} from 'react'
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [bodyPart,setBodyPart]=useState([]);
  const [exercises,setExercises] = useState('all');

  return (
    <div>
      <Box>
        <HeroBanner/>
        <SearchExercises 
          setExercises={setExercises} 
          bodyPart={bodyPart} 
          setBodyPart={setBodyPart}/>
        <Exercises
          setExercises={setExercises} 
          bodyPart={bodyPart} 
          setBodyPart={setBodyPart}
        />
      </Box>
    </div>
  )
}

export default Home;