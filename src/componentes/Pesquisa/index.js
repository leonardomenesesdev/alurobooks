import styled from "styled-components"
import Input from "../Input"
import { useState } from "react"
import { livros } from './dadosPesquisa'
const LivrosContainer = styled.div`
    display: flex;
    justify-content: center; /* Centraliza os livros na tela */
    gap: 20px; /* Espaço entre os livros */
`;

// Contêiner para cada livro
const LivroItem = styled.div`
    text-align: center;
    width: 150px; 
`;

const PesquisaContainer = styled.section`
    max-width: 100%; 
    margin: 0 auto; 
    padding: 85px 0;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 100%);
    text-align: center;
    color: #FFF;
`;

const Titulo = styled.h2`
color: #FFF;
font-size: 36px;
text-align: center;
width: 100%;
`

const Subtitulo = styled.h3`
font-size: 18px;
font-weight: 500;
margin-bottom: 40px;
`

function Pesquisa(){
    const [textoDigitado, setLivrosPesquisados] = useState([])
    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Pesquise o livro desejado</Subtitulo>
            <Input
            placeholder="Escreva sua próxima leitura"
            onBlur={evento =>{
                const textoDigitado = evento.target.value
                const resultadoPesquisa = livros.filter(livro => 
                    livro.nome.toLowerCase().includes(textoDigitado.toLowerCase())
                );
                
                setLivrosPesquisados(resultadoPesquisa)
            }}
            />
            <LivrosContainer>
            {textoDigitado.map(livro => (
                             <LivroItem key={livro.id}>
                             <p><strong>{livro.nome}</strong></p>
                             <img src={livro.src} width="150" height="250" alt="Capa do livro" />
                         </LivroItem>
        ))}
            </LivrosContainer>
     
        </PesquisaContainer>
    )
}
export default Pesquisa