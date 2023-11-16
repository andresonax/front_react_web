import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';


export default function FormClientes(props) {

    // const [ formData, setFormData ] = useState({
    //     nome: '',
    //     sobrenome: '',
    //     email: '',
    //     salario: 0,
    // })

    function limparForm(){
        props.setFormData({
            nome: '',
            sobrenome: '',
            email: '',
            salario: 0,
          })
    }

    function alteraCampos(e) {
        // console.log("Nome_campo", e.target.name)
        // console.log("Valor_campo", e.target.value)
        const key = e.target.name;
        const value = e.target.value;
        props.setFormData({...props.formData, [key]: value})
    }

    function submitFormulario(e){
        console.log("Dados Formulario", props.formData)
        e.preventDefault()
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if(props.formData.id_cliente){
            axios.patch("http://localhost:3003/clientes/" + props.formData.id_cliente, 
                props.formData, 
                { headers : {
                    'Content-Type': 'multipart/form-data'
                } })
            .then(resposta => {
            console.log(resposta)
            }) 
        } else {
            axios.post("http://localhost:3003/clientes", 
                props.formData, 
                { headers : {
                    'Content-Type': 'multipart/form-data'
                } })
            .then(resposta => {
            console.log(resposta)
            }) 
        }
       

    }

    return (
        <Form onSubmit={submitFormulario} initialValues={props.formData}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" name="nome" onChange={alteraCampos}
                    value={props.formData.nome}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control type="text" placeholder="Sobrenome" name="sobrenome" onChange={alteraCampos}
                     value={props.formData.sobrenome}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="text" placeholder="E-mail" name="email" onChange={alteraCampos}
                 value={props.formData.email}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Salário</Form.Label>
                <Form.Control type="number" placeholder="Salário" name="salario" onChange={alteraCampos}
                 value={props.formData.salario}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                {props.formData.id_cliente ? "Atualizar Dados" : "Gravar Dados"}
            </Button>
            <Button variant="primary" onClick={limparForm}>
                Limpar Form
            </Button>
        </Form>
    )


}