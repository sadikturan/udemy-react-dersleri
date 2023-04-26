import React, { useContext } from 'react'
import './Search.css';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import ProductCard from '../../components/ProductCard';
import { ThemeContext } from '../../contexts/ThemeContext';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { mode } = useContext(ThemeContext);

  const url = "http://localhost:3000/tarifler?q=" + query;
  const {data: tarifler, isLoading, error} = useFetch(url);

  return (
    <div className="row mt-3">
      <h2 className={`text-${mode === "dark" ? "light" : "dark"}`}>Aranan Kelime "{query}"</h2>
      <hr />
      { isLoading && <div className='alert alert-warning'>Yükleniyor...</div>}
      { error && <div className='alert alert-danger'>{error}</div>}
      {
        tarifler && tarifler.map(tarif => (
          <ProductCard key={tarif.id} tarif={tarif} />
        ))
      }
    </div>
  )
}

export default Search