import * as React from 'react'
import { Heading, Container, Box, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase'
import { signOut } from "firebase/auth";

const Dashboard = () => {
    let navigate = useNavigate();

    const signOutHandler = async (event) => {
        event.preventDefault();
        // await signOut(auth);
        // navigate('/');

        signOut(auth).then(() => {
            alert('signout successfuly');
            navigate('/');
        }).catch((error) => {
            // An error happened.
        });

    }
    return (
        <Box maxW='md' mx="auto" mt="10" borderWidth='1px' borderRadius='lg' p="5">
            <Container>
                <Box mb="4" textAlign="center">
                    <Heading as='h2' size='lg'>Dashboard</Heading>
                </Box>
                <form onSubmit={signOutHandler}>
                    <Box mb="3">
                        <Button colorScheme='blue' type='submit' >Sign Out</Button>
                    </Box>
                </form>

            </Container>
        </Box>
    )
}

export default Dashboard