import imagem from '../../imagens/logo.svg'
import styled from 'styled-components'
const LogoContainer = styled.div`
    margin-left: 10px;
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
    margin-right: 10px; 
`
function Logo(){
    return (
        <LogoContainer>
            <LogoImage
             src={imagem}
             alt='Logo do site'
             />
            <p><strong>Alura</strong><i>Books</i></p>
      </LogoContainer>
    )
}
export default Logo