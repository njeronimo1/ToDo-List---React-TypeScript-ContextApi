import { Container } from "./styles";

import Logo from '../../assets/Logo.png';

export function Header(){
    return(
        <Container>
            <img src={Logo} alt="Logo do ToDo List"/>
        </Container>
    )
}