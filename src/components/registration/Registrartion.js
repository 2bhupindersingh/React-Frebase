
import * as React from 'react'
import { useState } from 'react'
import { Heading, FormControl, FormLabel, Input, Container, Box, Button, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

const Registration = () => {
    let navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');
    const [inputValue, setvalue] = useState({
        email: '',
        password: ''
    });

    const { email, password } = inputValue;

    const loginHandler = () => {
        navigate('/');
    }

    const handleInputChange = (event) => {
        setvalue((prevValue) => ({
            ...prevValue, [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            setvalue({
                email: '',
                password: ''
            });

            navigate('/');

        } catch {
            setErrorMsg('Please enter email and password')
        }
    }


    return (
        <Box maxW='md' mx="auto" mt="10" borderWidth='1px' borderRadius='lg' p="5">
            <Container>
                <Box mb="4" textAlign="center">
                    <Heading as='h2' size='lg'>Registration</Heading>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Box mb="2">
                        {
                            errorMsg ? <Alert status='error'>
                                <AlertIcon />
                                <AlertDescription>{errorMsg}</AlertDescription>
                            </Alert> : ''
                        }
                    </Box>

                    <Box mb="4">
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input name="email" value={email} onChange={handleInputChange} type='email' />
                        </FormControl>
                    </Box>

                    <Box mb="4">
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' name="password" value={password} onChange={handleInputChange} />
                        </FormControl>
                    </Box>

                    <Box mb="3">
                        <Button colorScheme='blue' type='submit'>Register</Button>
                    </Box>
                </form>
                <Box mb="3">
                    <Button colorScheme='blue' onClick={loginHandler}>Login</Button>
                </Box>
            </Container>
        </Box>
    )
}

export default Registration