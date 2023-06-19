import React from 'react'
import { Container, Box, Text, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { useEffect } from "react";
// import { useHistory } from "react-router";
import { useNavigate } from "react-router-dom";
import  Login  from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
const Homepage = () => {
  // const history = useHistory();
  const navigate = useNavigate();


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    //   if (user) history.push("/chats");
    // }, [history]);
    if (user) {
      navigate("/chats");
    }
  }, [navigate]);





  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        textAlign="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">
          Socio-Chit-Chat
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        color="black"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign-Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
             <Login/>
            </TabPanel>
            <TabPanel>
             <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage
