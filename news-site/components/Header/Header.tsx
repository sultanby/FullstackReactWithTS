import  React from 'react';
import Link from "next/link";
import { Center } from "../Center";
import { Container, Logo } from "./style";
import { FunctionComponent } from 'react';

export const Header: FunctionComponent = () => {
    return (
        <Container>
            <Center>
                <Logo>
                    <Link href="/">
                        <a>What's Next??</a>
                    </Link>
                </Logo>
            </Center>
        </Container>
    )
}