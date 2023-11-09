import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';


export default function FormClientes() {

    const [ formData, setFormData ] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        salario: 0,
    })

    function alteraCampos(e) {
        // console.log("Nome_campo", e.target.name)
        // console.log("Valor_campo", e.target.value)
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]: value})
    }

    function submitFormulario(e){
        console.log("Dados Formulario", formData)
        e.preventDefault()
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        axios.post("http://localhost:3003/clientes", 
            formData, 
            { headers : {
                'Content-Type': 'multipart/form-data'
              } })
        .then(resposta => {
           console.log(resposta)
        })

    }

    return (
        <Form onSubmit={submitFormulario}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" name="nome" onChange={alteraCampos}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Sobrenome</Form.Label>
                <Form.Control type="text" placeholder="Sobrenome" name="sobrenome" onChange={alteraCampos}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="text" placeholder="E-mail" name="email" onChange={alteraCampos}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Salário</Form.Label>
                <Form.Control type="number" placeholder="Salário" name="salario" onChange={alteraCampos}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Realizar Cadastro
            </Button>
        </Form>
    )


}