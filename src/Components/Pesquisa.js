import React from 'react'

export default function Pesquisa(props){
    return (
        <main>
        <div className='form'>
            <h1>Buscador de animes</h1>
            <form onSubmit={props.controlador}>
                <input type="search" onChange={e => props.SetTexto(e.target.value)}/>
            </form>
        </div>
       
        <div>

        <div className='lista'>
        {props.lista.map(anime =>(
        <div className='card'>
        <div className='unitario'>
            <figure>
            <img src={anime.images.jpg.image_url} alt="Imagem anime"/>
            </figure>
            <p>{anime.title}</p>
            <span>{anime.synopsis}</span>
        </div>
        </div>))}    
        </div>
        </div>
        </main>
        
    )
}