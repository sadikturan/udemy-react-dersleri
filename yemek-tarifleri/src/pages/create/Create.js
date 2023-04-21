import React, { useState } from 'react'
import './Create.css';

function Create() {
  const [baslik, setBaslik] = useState('');
  const [aciklama, setAciklama] = useState('');
  const [hazirlanisi, setHazirlanisi] = useState('');
  const [resim, setResim] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(baslik, aciklama, hazirlanisi, resim, url);
  }

  return (
   <div className="card mt-3">
    <div className="card-body">
      <h2>Yeni Tarif Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="baslik" className="form-label">Başlık: { baslik }</label>
          <input type="text" name="baslik" id="baslik" className='form-control' onChange={(e) => setBaslik(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="aciklama" className="form-label">Açıklama</label>
          <input type="text" name="aciklama" id="aciklama" className='form-control' onChange={(e) => setAciklama(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="hazirlanisi" className="form-label">Hazirlanisi</label>
          <textarea name="hazirlanisi" id="hazirlanisi" className='form-control' onChange={(e) => setHazirlanisi(e.target.value)}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="resim" className="form-label">Resim</label>
          <input type="text" name="resim" id="resim" className='form-control' onChange={(e) => setResim(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">Url</label>
          <input type="text" name="url" id="url" className='form-control' onChange={(e) => setUrl(e.target.value)}/>
        </div>
        <button type="submit" className='btn btn-primary'>Kaydet</button>
      </form>
    </div>
   </div>
  )
}

export default Create