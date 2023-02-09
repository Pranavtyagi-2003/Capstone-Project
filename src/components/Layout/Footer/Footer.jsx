import { Box , Heading, HStack, Stack, VStack} from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular} from 'react-icons/ti'
import {DiGithub} from 'react-icons/di'

function Footer() {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={['center','flex-start']} width='full'>
                <Heading children="All Right Reserved" color={'white'}/>
                <Heading children="@Codify Programming" color={'yellow.400'} fontFamily={'body'} size='sm'/>
            </VStack>
            <HStack justifyContent="center" spacing={['2','10']} color='white' fontSize={'50'}>
                <a href="https://www.youtube.com/c/CodifyProgramming" target={'blank'}>
                    <TiSocialYoutubeCircular/>
                </a>
                <a href="https://www.instagram.com/_pranavtyagi_/" target={'blank'}>
                    <TiSocialInstagramCircular/>
                </a>
                <a href="https://github.com/Pranavtyagi-2003" target={'blank'}>
                    <DiGithub/>
                </a>
            </HStack>
        </Stack>
    </Box>
  )
}

export default Footer