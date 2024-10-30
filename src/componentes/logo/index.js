import './estilo.css'
import imagem from '../../imagens/logo.svg'
function Logo(){
    return (
        <div className='logo'>
            <img src={imagem} alt='Logo do site' className='logo-img'></img>
            <p><strong>Alura</strong><i>Books</i></p>
      </div>
    )
}
export default Logo