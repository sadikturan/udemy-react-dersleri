import React, { useEffect, useState } from 'react'
import './Details.css';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [tarif, setTarif] = useState(null);
  const url = "http://localhost:3000/tarifler/" + id;

  useEffect(() => {
   fetch(url)
    .then(res => res.json()) 
    .then(data => setTarif(data))
  }, [url])

  return (
    <div className='row mt-3'>
      {
        tarif && (
          <>
            <div className="col-4">
              <img src={`/img/${tarif.resim}`} alt={tarif.baslik} className='img-fluid rounded'/>
            </div>
            <div className="col-8">
              <h5>{ tarif.baslik }</h5>
              <p>{ tarif.aciklama }</p>
              <ul>
                {
                  tarif.malzemeler.map(malzeme => (
                    <li>{ malzeme }</li>
                  ))
                }
              </ul>
            </div>
            <div className="col-12 mt-3">
              <p>{ tarif.hazirlanisi }</p>
              <a href={ tarif.url } className='btn btn-outline-primary'>Tarifi İncele</a>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Details