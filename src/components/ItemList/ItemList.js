

import { useState, useEffect  } from "react";

const ItemList = ()=>
{

     const [datos, setDatos] = useState([]);

     const [conteo,setConteo] = useState(5);

     useEffect(()=>{

         const api = fetch('https://jsonplaceholder.typicode.com/photos/',{
            'method': 'get'
            });
            
            api.then((response)=>{

                    response.json().then((respuesta)=>{


                        const data = respuesta.filter(element => element.id < conteo  );

                    setDatos(data)
                    
                })

            }).catch((error)=>{

                console.log(error);


            })

     },[conteo]);


    return(
        
        <div>
            <h2>Consumiendo  API JSON Placeholder</h2>
            <div className="s-botones">
                <button className="botones" onClick={() => { setConteo(conteo > 0 ? conteo + 5 : conteo) }}>+ resultados</button>
                <button className="botones" onClick={() => { setConteo(conteo > 5 ? conteo - 5 : conteo) }}> - resultados</button>
            </div>


        
                <div className="productos">

                    {
                        datos.map((element =>
                            <div className="col-productos" key={element.id}>
                                <img src={element.url} alt={element.title}  className="img-productos"></img>
                                <small className="s-productos">{element.id}</small>
                                <p className="p-productos">{element.title}</p><hr></hr>
                                
                            </div>
                        ))
                    }

                </div> 
        </div> 
         );
}

export default ItemList ;