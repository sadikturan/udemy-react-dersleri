import React, { useState } from 'react'

const Search = ({ displayAlert,searchUsers,showClearButton,clearResults }) => {

    const [keyword, setKeyword] = useState('');

    const onChange = (e) => {
        setKeyword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(keyword === '') {
            displayAlert('Anahtar Kelime Giriniz', 'warning');
        } else {
            searchUsers(keyword);
            setKeyword('');
        }
    }

    return (
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" value={keyword} onChange={onChange} className='form-control' placeholder='Anahtar Kelime' />
                    <button className="btn btn-primary" type='submit'>Ara</button>
                </div>
            </form>
            {
                showClearButton && <button onClick={clearResults} className="btn btn-outline-danger mt-2 btn-block">Sonuçları Temizle</button>
            }        

        </div>
    )
}

export default Search