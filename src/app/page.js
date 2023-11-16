"use client"
import Image from 'next/image'
import styles from './globals.css'
import { useState } from 'react'
import ListaClientes from './componentes/listaClientes'
import FormClientes from './componentes/formClientes'

import 'bootstrap/dist/css/bootstrap.min.css';

const usuario = {
  nome : "Fulana de Tal",
  imageUrl : 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize : 90
}



function Perfil(){  
  return(
    <>
      <h1>{usuario.nome}</h1>
      <img 
        className='avatar'
        src={usuario.imageUrl}
        alt= "Imagem do fulano de tal"
        width={usuario.imageSize}
      />
      
      
    </>
  )
}

export default function Home() {
  
  const [ formData, setFormData ] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    salario: 0,
  })
  
  var logado = true
  var conteudo
  if(logado){
    conteudo = <>
    {/* <div>
      <Perfil />
    </div> */}
    <div>
      <FormClientes formData = {formData} setFormData = {setFormData}/>
    </div>
    </>
  } else {
    conteudo = <h1>Realize o Login</h1>
  }
  return (
    <main>
      {conteudo}
      <div>
        <ListaClientes formData = {formData} setFormData = {setFormData} />
      </div>
    </main>
  )
}
