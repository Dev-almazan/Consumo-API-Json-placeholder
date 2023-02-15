
import logo from './logo.svg';

import { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {

                const api = fetch('https://jsonplaceholder.typicode.com/todos/', {
                  'method': 'get'
                }).then((response) => {

                response.json().then((result) => 
                  {

                        setData(result)
                  })

                }).catch((error) => {

                  console.log(error)
                })


  },[])


  return (
    <div className="App">
      <header className="App-header">
    
    

      </header>
      
    </div>
  );




}

export default App;
