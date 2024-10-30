import './estilo.css'
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'BIBLIOTECA']
function Opcoes(){
    return (
    <ul className='opcoes'>
    {textoOpcoes.map( (texto) => (
      <li className='opcao'><p>{texto}</p></li>
   ) ) }
  </ul>
    )
}
export default Opcoes