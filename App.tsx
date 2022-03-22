// App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import InvestButton from "./components/InvestButton";
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import GetDividendsButton from "./components/GetDividendsButton";
import WithdrawButton from "./components/WithdrawButton";
import { Image } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import {useEffect} from "react";
import AddPolygonNetworkButton from "./components/AddPolygonNetworkButton";


export default function App() {

    useEffect(() => {
        // http://localhost:3000/?referrer=0x123
        const queryParams = new URLSearchParams(window.location.search);
        const referrer = queryParams.get('referrer');
        if (referrer != null) {
            alert("Referrer = [" + referrer + "]");
        }
    });

    return (
        <ChakraProvider>
            <Center>
                <Image src="/sakleotop.png" alt="sakleotop staker"/>
                <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='4xl' fontWeight='extrabold'>
                    Welcome to Sakleotop Staker
                </Text>
            </Center>
            <Layout>
                <Center><AddPolygonNetworkButton /*name='str'*/ /></Center>
                <Text align='center' w='40%' bg='blackAlpha.500' color='gray.400' fontSize='4xl'>Supastaka</Text>
                <Box h='5'/>
                <ConnectButton />
                <Box h='5'/>
                <InvestButton />
                <Box h='5'/>
                <GetDividendsButton />
                <Box h='5'/>
                <WithdrawButton />
            </Layout>
        </ChakraProvider>
    )
}
