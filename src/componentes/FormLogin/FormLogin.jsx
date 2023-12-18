import styled from "styled-components"
import Titulo from "../Titulo/Titulo"
import Link from "../Link/Link"
import Botao from "../Botao/Botao"

const FormEstilizado = styled.form`
    border-radius: 20px;
    padding: 28px;
    background: #EAEAEA;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const LegendaEstilizada = styled.h3`
    color: #8C8C8C;
    text-align: center;
    font-family: Lato;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const InputEstilizado = styled.input`
    border-radius: 60px;
    background: #FFF;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 22px 40px;
    box-sizing: border-box;
    display: block;
    margin-bottom: 40px;
    width: 450px;
    &:placeholder {
        color: rgba(198, 198, 198, 0.50);
    }
`
const LabelEstilizada = styled.label`
    color: #353535;
    font-family: Lato;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: center;
    gap: 18px;
    input {
        width: 20px;
        height: 20px;
    }
`

const DivEstilizada = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ParagrafoEstilizado = styled.p`
    color: #353535;
    text-align: center;
    font-family: Lato;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`

const FormLogin = () => {
    return (<FormEstilizado>
        <Titulo>Olá, mundo!</Titulo>
        <LegendaEstilizada>Faça login com seus dados</LegendaEstilizada>
        <InputEstilizado placeholder="Usuário ou e-mail" />
        <InputEstilizado placeholder="Senha" />
        <DivEstilizada>
            <LabelEstilizada>
                <input type="checkbox" /> Manter conectado
            </LabelEstilizada>
            <Link href="#">
                Esqueceu a sua senha?
            </Link>
        </DivEstilizada>
        <Botao>
            Login
        </Botao>
        <ParagrafoEstilizado>
            Ainda não tem uma conta? <Link href="#">Crie uma conta.</Link>
        </ParagrafoEstilizado>
    </FormEstilizado>)
}

export default FormLogin