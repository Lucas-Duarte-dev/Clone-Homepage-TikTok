import React from 'react';
import { Content, Text, SubTitle, Button, Container, Image } from "./StyleMain"
import { PlayArrow } from '@material-ui/icons/';

export default function Main() {
    return (
        <Content>
            <Text>Make Your Day</Text>
            <SubTitle>Real People. Real Videos</SubTitle>
            <Button><PlayArrow style={{ fontSize: 27, color: "#fff" }} /> Assistir agora</Button>
            <Container>
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
            </Container>
        </Content>
    );
}