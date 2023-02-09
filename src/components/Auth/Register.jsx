import {
  Box,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Button,
  Avatar,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/Actions/user';

export const fileUploadCss={
    cursor:"pointer",
    marginLeft:"-5%",
    width:"110%",
    height:"100%",
    color:"#ECC94B",
    backgroundColor:"white",
    border:"none"
}

const fileUploadStyle={
    "&::file-selector-button":fileUploadCss,
};

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')
  const [imagePrev, setImagePrev] = useState('')
  const [image, setImage] = useState('')

  const changeImageHandler=(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
        setImagePrev(reader.result);
        setImage(file)
    }
  }

  const dispatch = useDispatch()

  const {loading} = useSelector(state=>state.user)

  const submitHandler=(e)=>{
    e.preventDefault()
    const myForm = new FormData()
    myForm.append('name',name);
    myForm.append('email',email);
    myForm.append('password',password);
    myForm.append('file',image);
    dispatch(register(myForm))
  }

  return (
    <Container h={'95vh'} marginTop={['20','']} marginBottom={"12"}>
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading
          children={'Registration'}
          fontSize="30px"
          textTransform={'uppercase'}
        />
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
            <Box my={'4'} display={'flex'} justifyContent="center">
                <Avatar src={imagePrev} size={'2xl'}/>
            </Box>
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
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              type={'password'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box marginY={'4'}>
            <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
            <Input
              accept='image/*'
              required
              id="chooseAvatar"
              type={'file'}
              focusBorderColor="yellow.500"
              css={fileUploadStyle}
              onChange={changeImageHandler}
            />
          </Box>
          
          <Button isLoading={loading} marginY="4" colorScheme={'yellow'} type="submit">
            Sign Up
          </Button>
          <Box my="4">
            Already Signed Up?{' '}
            <Link to="/login">
              <Button colorScheme={'yellow'} variant="link">
                Login
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
}

export default Register;
