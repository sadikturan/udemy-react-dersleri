import React from 'react'
import './Home.css';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

function Home() {

  const { data: tarifler } = useFetch("http://localhost:3000/tarifler")

  return (
    <div className="row mt-3">
      {
        tarifler && tarifler.map(tarif => (
         <ProductCard key={tarif.id} tarif={tarif} />
        ))
      }
    </div>
  )
}

export default Home