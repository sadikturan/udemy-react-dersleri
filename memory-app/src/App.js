import { useEffect, useState } from 'react';
import './App.css';

const cardList = [
  { "path": "/img/1.jpeg" },
  { "path": "/img/2.jpeg" },
  { "path": "/img/3.jpeg" },
  { "path": "/img/4.jpeg" },
  { "path": "/img/5.jpeg" },
  { "path": "/img/6.jpeg" }
];


function App() {
  const [cards, setCards] = useState([]);

  const prepareCards = () => {

    setCards([...cardList, ...cardList]);
  }

  useEffect(() => {
    prepareCards();
  }, []);


  return (
    <div className="container">
      <h1>Memory App</h1>
      <button>Oyunu Başlat</button>

      <div className="card-grid">
        {
          cards.map(card => (
            <div className="card">
              <img className='cardFront' src={card.path} alt="" />
              <img className='cardBack' src="/img/cover.jpeg" alt="" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
