import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from "axios"
import { useState, useEffect } from 'react';

export default function ListaClientes(props) {

    const [lista, setLista] = useState(undefined)

    const botaoEditar = (dados) => {
        props.setFormData(dados)
        console.log(props.formData)
    }

    function fetchListaClientes(){
        axios("http://localhost:3003/clientes_all")
            .then(resposta => {
                var listaGroup = resposta.data.map( e => 
                    <ListGroup.Item key={e.id_cliente}>
                        {e.nome + " " + e.sobrenome} 
                        <Button onClick={() => botaoEditar(e)}  variant="primary">Editar</Button>{' '}
                        <Button variant="dark">Ver Perfil</Button>{' '}
                    </ListGroup.Item>
                )
                setLista(listaGroup)
            })
    }

    useEffect(() => {
        fetchListaClientes();
    })

    return (
        <ListGroup>
            {lista}
        </ListGroup>
    )
  }