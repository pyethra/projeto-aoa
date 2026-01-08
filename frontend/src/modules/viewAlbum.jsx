import "./styles/viewAlbum-styles.css"
import ListGroup from 'react-bootstrap/ListGroup'
import { useState, useEffect } from "react"
import getAlbum from '../services/serviceAlbum'

export default function ViewAlbum () {
    const [album, setAlbum] = useState({faixas: []});
    
    useEffect(() => {
    async function carregarFaixas () {
    try {
      const dataGetAlbum = await getAlbum();
      const capaUrl = dataGetAlbum?.image?.contentUrl || "capaTeste.jpg";
      const albumFormatado = {
        capaAlbum: dataGetAlbum?.image?.contentUrl || capaUrl,
        tituloAlbum: dataGetAlbum.name,
        artistas: dataGetAlbum.creditedTo,
        duracaoAlbum: 0, // "PT51M23S"
        faixas: dataGetAlbum.track.map(track => ({
            id: track["@id"],
            numero: track.trackNumber,
            tituloFaixa: track.name,
            duracaoFaixa: track.duration // exemplo: "PT03M15S"
            }))
        };
      setAlbum(albumFormatado);
      console.log(albumFormatado);

    } catch (erro) {
      console.error("erro ao carregar faixas", erro);
    } 
  }
  carregarFaixas();
}, []);



    return(
        <div>
        {album &&( 
            <div className="Info-Album">
                <img src={album.capaAlbum} alt="Capa do álbum" className="CapaAlbum" />

                
                <p>Nome do Album:{album.tituloAlbum}</p>
                <p>Nome do Artista:{album.artistas}</p>
                <p>Duração:{album.duracaoAlbum}</p>
            </div>
            
        )}          

            <div className="Faixas">

                <div className="header">
                  <span>#</span>
                  <span>Nome</span>
                  <span>Duração</span>
                </div>

                {album?.faixas.map((faixas) => {
                    return (
                    <div className="row" key={faixas.id}>
                        <span>{faixas.numero}</span>
                        <span>{faixas.tituloFaixa}</span>
                        <span>{album.artistas}</span>
                        

                        <span className="time">{faixas.duracaoFaixa}</span>
                    </div>
                    )
                })}

            </div>
        </div>

            
    )
}
