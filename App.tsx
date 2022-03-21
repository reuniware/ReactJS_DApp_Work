// App.tsx
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import InvestButton from "./components/InvestButton";
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import GetDividendsButton from "./components/GetDividendsButton";


export default function App() {

    return (
        <ChakraProvider>
            <Layout>
                <Text align='center' w='40%' bg='blackAlpha.500' color='gray.400' fontSize='4xl'>Supastaka</Text>
                <Box h='5'/>
                <ConnectButton />
                <Box h='5'/>
                <InvestButton />
                <Box h='5'/>
                <GetDividendsButton />
            </Layout>
        </ChakraProvider>
    )
}
