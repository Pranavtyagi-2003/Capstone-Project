import React from 'react'
import { Heading, Stack, VStack,Text, Button, Image, Box, HStack} from '@chakra-ui/react'
import './home.css'
import { Link } from 'react-router-dom'
import bg from '../../assets/images/bg.png'
import {CgGoogle,CgYoutube} from 'react-icons/cg'
import {SiCoursera,SiUdemy} from 'react-icons/si'
import {DiAws} from 'react-icons/di'
import introvideo from '../../assets/videos/intro.mp4'


function Home() {
  return (
    <section className='home'>
      <div className="container">
      <Stack
      direction={["column","row"]}
      height="100%"
      justifyContent={["center","space-between"]}
      alignItems="center"
      spacing={["16","56"]}
      >
        <VStack width = {"full"} alignItems={["center","flex-end"]} spacing={'6'}>
          <Heading children = "LEARNING WITH CODIFY " size={"xl"}/>
          <Text fontSize={'xl'} textAlign={['center','left']} children="Yor are not late start learning from today." fontFamily={'cursive'}/>
          <Link to="/courses">
            <Button size='lg' colorScheme="yellow">
              Explore Now
            </Button>
          </Link>
        </VStack>
        <Image boxSize={"md"} src={bg} objectFit="contain" className='vector-graphics'/>
      </Stack>
      </div>
      <Box padding={"8"} bg="blackAlpha.800">
        <Heading children = "OUR BRANDS" textAlign={"center"} fontFamily="body" color={"yellow.400 "}/>
        <HStack className='brands-banner' justifyContent={"space-evenly"} marginTop="4">
          <CgGoogle/>
          <CgYoutube/>
          <SiCoursera/>
          <SiUdemy/>
          <DiAws/>
        </HStack>
      </Box>
      <div className="container2">
        <video 
        muted
        autoPlay 
        controls 
        src={introvideo} 
        controlsList = "nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        ></video>
      </div>
    </section>
  )
}
   
export default Home