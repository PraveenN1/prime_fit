import React from 'react'
import { Box,Stack,Typography, Button} from '@mui/material';

import HeroBannerImage from '../assets/assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box 
        sx={{
            mt:{lg: '212px', xs:'70px' },
            ml:{sm:'50px'}
        }}
        position="relative" p="20px">
        <Typography
            color='#FF2625'
            fontWeight='600'
            fontSize='26px'>
            Fitness Club
        </Typography>
        <Typography
            fontWeight='700'
            sx={{fontSize:{lg:'52px',xs:'45px'}}}>
            Sweat, Smile <br/> And Repeat
        </Typography>
        <Typography
            fontSize="22px"
            lineHeight="35px"
            mb={3}
            href='#exercises' 
            sx={{ p:'10px'}}>
            Check out the most effective exercises...
        </Typography>
        <Button variant="contained" color="error">
            Explore Exercises
        </Button>
        <Typography
            fontWeight={600}
            color='#FF2625'
            sx={{
                opacity:0.1,
                display:{lg:'block' , xs:'none'}
            }}
            fontSize="200px"
            >

            Exercises
        </Typography>
        <img src={HeroBannerImage}
             alt="banner"
             className='hero-banner-img'/>
        

        
    </Box>

    
  )
}

export default HeroBanner