import { Conteiner, Content, Text, Input, Image, ContentInput, Button, AreaCode } from './StyleFooter';
import logo from '../../img/tiktok-banner-black-3.svg'

export default function Footer() {
    return (
        <Conteiner>
            <Content>
                <Text>Envie um link para si mesmo para baixar o TikTok</Text>
                <ContentInput>
                    <AreaCode placeholder="BR+55" disabled={true} />
                    <Input placeholder="Número de telefone" />
                    <Button>Enviar</Button>
                </ContentInput>
            </Content>
            <Content>
                <Text>Baixar Agora</Text>
                <Image src={logo} />
            </Content>
        </Conteiner>
    )
}