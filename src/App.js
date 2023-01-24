import './App.css';
import { useState, useEffect } from 'react';
import Pesquisa from './Components/Pesquisa';

export default function App() {
  const [texto,SetTexto] = useState("");
  const [lista,SetLista] = useState([]);
  
  
  const dados = async(texto) =>{
    const list = await fetch(`https://api.jikan.moe/v4/anime?q=${texto}&limit=20`).then(res => res.json());
    SetLista(list.data);
  }

  const start = async() =>{
    const list = await fetch("https://api.jikan.moe/v4/anime").then(res => res.json());
    SetLista(list.data);
  }

  const controlador= e =>{
    e.preventDefault();
    dados(texto);
  }

  useEffect(()=>{
    start();
  },[])


  return (
    <div className="App">
      <Pesquisa controlador={controlador} SetTexto={SetTexto} lista={lista}/>
    </div>
  );
};