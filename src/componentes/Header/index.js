import Logo from '../logo'
import Opcoes from '../opcoes'
import Icones from '../Icones'
import './estilo.css'
function Header(){
    return(
    <header className="App-Header">
    <Logo></Logo>   
    <Opcoes></Opcoes>
    <Icones></Icones>
    </header>
    )
}
export default Header