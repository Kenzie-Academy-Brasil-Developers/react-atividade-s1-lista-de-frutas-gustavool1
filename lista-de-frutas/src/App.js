
import './App.css';
import { useState } from 'react';

function App() {
  const [fruits, setFruits] = useState([
     { name: "banana", color: "yellow", price: 2 },
     { name: "cherry", color: "red", price: 3 },
     { name: "strawberry", color: "red", price: 4 },
     { name: "ameixa", color: "purple", price: 4 },
     { name: "uva", color: "purple", price: 1 },
     { name: "mirtilo", color: "red", price: 2.5 }
  ])
  
  const filteredFruits = (fruit) => {
      let newFruits = fruits.filter((element)=>element.color === 'red')
      setFruits(newFruits)
  }
  const allFruits = () =>{
      setFruits(fruits.map((elemento)=>{
          return elemento
      }))
  }
  return (
    <div className="App">
      <header className="App-header">
        <p className='preco'>Preço total : {fruits.reduce((prevVal,elem)=>prevVal+elem.price,0)}</p>
        <ul className='frutas-lista'>
          {fruits.map((elemento) =>(
            <li>{elemento.name}</li>
          ))}
        </ul>
        <div className='btn-container'>
          <button onClick={()=>filteredFruits(fruits)}>Filtrar frutas vermelhas</button>
          <button onClick={allFruits} >Limpar filtros</button>
        </div>    
      </header>
    </div>
  );
}

export default App;
