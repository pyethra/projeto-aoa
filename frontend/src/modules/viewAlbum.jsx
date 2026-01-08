import "./styles/viewAlbum-styles.css"
import urlCapaAlbum from './capaTeste.jpg'
import ListGroup from 'react-bootstrap/ListGroup'
import { useState, useEffect } from "react"
import getAlbum from "./services/getAlbum"


export default function ViewAlbum () {
    const [album, setAlbum] = useState(null)
    const [faixas, setFaixas] = useState([])


    useEffect(() => {
        async function carregarFaixas () {
            try {
                const dataGetAlbum = await getAlbum()

                setAlbum(dataGetAlbum)            
                setFaixas(dataGetAlbum.faixas)
        } catch (erro) {
            console.error("erro ao carregar faixas", erro)
        } 
        }
        carregarFaixas()
    }, [])


    return(
        <div>
        {album &&( 
            <div className="Info-Album">
                <img src={urlCapaAlbum} alt="a" className="CapaAlbum"/>
                
                <p>Nome do Album:{album.nome}</p>
                <p>Nome do Artista:{album.artistas}</p>
                <p>Ano de Lançamento:{album.anoLançamento}</p>
                <p>Duração:{album.duracao}</p>
            </div>
            
        )}          

            <div className="Faixas">

                <div className="header">
                  <span>#</span>
                  <span>Nome</span>
                  <span>Duração</span>
                </div>

                {faixas.map((faixa, index) => {
                    return (
                    <div className="row" key={faixa.id}>
                        <span>{index + 1}</span>
                        
                        <div>
                            <span>{faixa.nome}</span>
                            <span>{faixa.artistas}</span>
                        </div>

                        <span className="time">{faixa.duracao}</span>
                    </div>
                    )
                })}

            </div>
        </div>

            
    )
}
