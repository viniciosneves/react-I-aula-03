import styled from "styled-components"
import EstilosGlobais from "./EstilosGlobais/EstilosGlobais"
import FormLogin from "./componentes/FormLogin/FormLogin"
import SubTitulo from "./componentes/SubTitulo/SubTitulo"

const ContainerEstilizado = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 160px;
`

const ImgEstilizada = styled.img`
  margin-top: 40px;
`

function App() {
  return (
    <>
      <EstilosGlobais />
      <ContainerEstilizado>
        <div>
          <ImgEstilizada src="/logo.png" alt="" />
          <SubTitulo>Nós Transformamos Ideias em Inovação</SubTitulo>
        </div>
        <FormLogin />
      </ContainerEstilizado>
    </>
  )
}

export default App
