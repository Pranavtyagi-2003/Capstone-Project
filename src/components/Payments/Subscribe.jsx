import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { buySubscription } from '../../redux/Actions/user';
import { server } from '../../redux/store';
import logo from '../../assets/images/logo 2.png'

function Subscribe({user}) {

  const dispatch = useDispatch();
  const [key, setKey] = useState("")

  const {loading,error,subscriptionId} = useSelector(state=>state.subscription)
  const {error:courseError} = useSelector(state=>state.course)

  const subscribeHandler = async()=>{
    const {data:{
      key
    },} = await axios.get(`${server}/razorpaykey`);

    setKey(key);
    dispatch(buySubscription())
  }

  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:'clearError'})
    }

    if(courseError){
      toast.error(courseError);
      dispatch({type:'clearError'})
    }

    if(subscriptionId){
      const openPopUp = ()=>{
        const options={
          key,
          name:"Codify Programming",
          description:"Get access to all premium content",
          image:logo,
          subscription_id:subscriptionId,
          callback_url:`${server}/paymentverification`,
          prefill:{
            name:user.name,
            email:user.email,
            contact:""
          },
          notes:{
            address:"Codify Programming at youtube"
          },
          theme:{
            color:"#FFC800"
          }
        };
        const razor = new window.Razorpay(options);
        razor.open();
      }
      openPopUp();
    }

  },[dispatch,error,subscriptionId,user.name,user.email,key,courseError]);

  return (
    <Container h={'90vh'} p="16">
      <Heading children="Welcome" my={'8'} textAlign={'center'} />
      <VStack
        boxShadow={'lg'}
        alignItems="stretch"
        borderRadius={'lg'}
        spacing="0"
      >
        <Box bg={'yellow.400'} p="4" css={{ borderRadius: '8px 8px 0 0' }}>
          <Text color={'black'} children={`Pro Pack - ₹149.00`} />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px="8" mt={'4'} spacing={'8'}>
            <Text
              children={`Join pro pack and get access to all content.`}
            />
            <Heading size={'md'} children={'₹149 Only'} />
          </VStack>
          <Button isLoading={loading} onClick={subscribeHandler} my={'8'} w={'full'} colorScheme="yellow">
            Buy Now
          </Button>
        </Box>
        <Box bg={'blackAlpha.600'} p="4" css={{ borderRadius: '0 0 8px 8px' }}>
          <Heading
            size={'sm'}
            color={'white'}
            textTransform={'uppercase'}
            children={'100% Refund at cancellation'}
          />
          <Text fontSize={'sx'} color='white' children={"*Terms & Condition Apply*"}/>
        </Box>
      </VStack>
    </Container>
  );
}

export default Subscribe;
