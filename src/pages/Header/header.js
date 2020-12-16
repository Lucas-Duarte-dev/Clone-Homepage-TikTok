import React from 'react';

import { Head, Image, Container, Button } from './headerStyle';
import logo from '../../img/tiktok-logo-9.png'
import { Menu, BackupOutlined } from '@material-ui/icons/'

export default function Header() {
    return (
        <Head>
            <Container>
                <Menu style={{ fontSize: 25, color: "#333", cursor: "pointer" }} />
                <Image src={logo} />
            </Container>
            <Container>
                <BackupOutlined style={{ fontSize: 28, cursor: "pointer" }} />
                <Button >Entrar</Button>
            </Container>
        </Head>
    )
}