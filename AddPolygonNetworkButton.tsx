// AddPolygonNetworkButton.tsx
import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";

import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import React, {useEffect} from "react";
import { SimpleGrid } from '@chakra-ui/react'

import { ethers } from "ethers";
import {BigNumber} from "@ethersproject/bignumber";

type Props = {
    handleOpenModal: any;
}

// https://chainlist.org/
export default function AddPolygonNetworkButton(/*props: any*/) {

    //const [value, setValue] = React.useState(props.name)

    useEffect(() => {
    });

    // const { activateBrowserWallet, account } = useEthers();
    // const etherBalance = useEtherBalance(account);
    //
    // const format = (val: string) => val
    // const parse = (val: string) => val.replace(/^\$/, '')

    //const [value, setValue] = React.useState('0.01')

    async function addNetwork() {

        const provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
        provider.send("wallet_addEthereumChain", [{ chainName: 'Polygon Mainnet', chainId: '0x89', nativeCurrency: {name: 'MATIC', decimals: 18, symbol: 'MATIC'}, rpcUrls: ['https://polygon-rpc.com/'],},]).then(r => {

        });

        // provider.request({
        //     method: 'wallet_addEthereumChain',
        //     params: [{ chainName: 'Polygon Mainnet', chainId: web3.utils.toHex(chainId), nativeCurrency: {name: 'MATIC', decimals: 18, symbol: 'MATIC'}, rpcUrls: ['https://polygon-rpc.com/'],},],
        // });
    }

    return (
        <Box bg='blackAlpha.500'>
            <Button onClick={addNetwork}>Add Polygon Network</Button>
        </Box>
    );
}
