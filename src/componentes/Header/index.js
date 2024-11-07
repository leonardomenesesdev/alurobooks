import Logo from '../logo'
import Opcoes from '../opcoes'
import Icones from '../Icones'
import styled from 'styled-components'
const HeaderContainer = styled.div`
    background-color: azure;
    display: flex;
    border-radius: 3px;
    box-shadow: inset;
    justify-content: center;
`
function Header(){
    return(
    <HeaderContainer>
    <Logo></Logo>   
    <Opcoes></Opcoes>
    <Icones></Icones>
    </HeaderContainer>
    )
}
export default Header