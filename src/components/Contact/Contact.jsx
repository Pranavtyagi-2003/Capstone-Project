import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react';
import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { contactUs } from '../../redux/Actions/other';
import toast from 'react-hot-toast';

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()
    const {
      loading,
      error,
      message: stateMessage,
    } = useSelector(state => state.other);

    const submitHandler = e => {
      e.preventDefault();
      dispatch(contactUs(name, email, message));
    };

    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: 'clearError' });
        setName('');
        setEmail('');
        setMessage('');
      }
  
      if (stateMessage) {
        toast.success(stateMessage);
        dispatch({ type: 'clearMessage' });
        setName('');
        setEmail('');
        setMessage('');
      }
    }, [dispatch, error, stateMessage]);


  return (
    <Container h={'92vh'} marginTop={['20','']}>
      <VStack height={'full'} justifyContent={'center'} spacing='16'>
        <Heading children="Contact Us" />
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
        <Box marginY={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="XYZ"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box marginY={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box marginY={'4'}>
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Message...."
              focusBorderColor="yellow.500"
            />
          </Box>
          <Button isLoading={loading} marginY="4" colorScheme={'yellow'} type="submit">
            Send Mail
          </Button>
          <Box my="4">
                Request for a course?{" "}<Link to="/request">
                    <Button colorScheme={"yellow"} variant="link">Click</Button>
                    {" "}here
                </Link>
              </Box>
        </form>
      </VStack>
    </Container>
  );
}

export default Contact;
