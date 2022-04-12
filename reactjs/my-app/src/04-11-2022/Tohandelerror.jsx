import React, { useState } from "react";
import ForPrintlist from "../04-10-2022/ForPrintlist";
import '../04-10-2022/Cssforprint.css'

export default function Tohandelerror() {
  const [Fordata, setForData] = useState([]);
  const [Isloading, setIsloading] = useState(false);
  const [Erro,setErro]=useState(null)

  async function noname() {
    setIsloading(true)
    setErro(null)
    try {
      const res = await fetch("https://swapi.dev/api/film/");
      if(!res.ok){
        throw new Error('Something went wrong')
      }
      const data = await res.json();
      const moviedata = data.results.map((movieda) => {
        return {
          id: movieda.episode_id,
          title: movieda.title,
        }
      });
      setForData(moviedata);
      
    }catch (error){
      setErro(error.message)
    }
    setIsloading(false);
  }
  return (
    <div className="mainsection">
      <section className="ptag" style={{height: '40pxs'}}>        
          <button onClick={noname}>To Get Movie name</button>
        </section>  
      <br/>
      <section className="ptag" style={{minHeight : '50px'}}>
        {Isloading && <h1>Loading ....</h1>}
        {!Isloading && <ForPrintlist data={Fordata} />}
        {!Isloading && Erro &&<h1>{Erro}</h1>}
        {Isloading && Fordata.length==0 && !Erro && <h1>found no movies</h1>}



      </section>
    </div>
  );
} 
