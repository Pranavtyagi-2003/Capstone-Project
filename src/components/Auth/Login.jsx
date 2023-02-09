import { Box, Container, FormLabel, Heading, Input, VStack ,Button} from '@chakra-ui/react'
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../redux/Actions/user'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {loading} = useSelector(state=>state.user)

    const dispatch = useDispatch();

    const submitHandler=(e)=>{
      e.preventDefault()
      dispatch(login(email,password));
    }

  return (
    <Container h={'95vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
            <Heading children={"Welcome to Codify Programming"} fontSize="30px"/>
            <form onSubmit={submitHandler} style={{width:'100%'}}>
              <Box marginY={'4'}>
              <FormLabel htmlFor='email' children="Email Address"/>
              <Input required id='email' value={email} onChange={e=>setEmail(e.target.value)} placeholder='abc@gmail.com' type={'email'} focusBorderColor='yellow.500'/>
              </Box>
              <Box marginY={'4'}>
              <FormLabel htmlFor='password' children="Password"/>
              <Input required id='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='Enter Your Password' type={'password'} focusBorderColor='yellow.500'/>
              </Box>
              <Box>
                <Link to='/forgetpassword'>
                    <Button fontSize={"sm"} variant="link">Forget Password</Button>
                </Link>
              </Box>
              <Button isLoading={loading} marginY="4" colorScheme={"yellow"} type="submit">Login</Button>
              <Box my="4">
                New User?{" "}<Link to="/register">
                    <Button colorScheme={"yellow"} variant="link">Sign Up</Button>
                    {" "}here
                </Link>
              </Box>
            </form>
        </VStack>
    </Container>
  )
}

export default Login