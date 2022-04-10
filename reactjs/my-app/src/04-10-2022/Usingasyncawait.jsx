import React, { useState } from "react";
import ForPrintlist from "./ForPrintlist";
import './Cssforprint.css'

export default function Maincomponent() {
  const [Fordata, setForData] = useState([]);
  const [Isloading, setIsloading] = useState(false);

  async function noname() {
    setIsloading(true)
    const res = await fetch("https://swapi.dev/api/films/");
    const data = await res.json();

    const moviedata = data.results.map((movieda) => {
      return {
        id: movieda.episode_id,
        title: movieda.title,
      }
    });
    setForData(moviedata);
    setIsloading(false);
  }
  return (
    <div className="mainsection">
      <section className="ptag" style={{height: '40px'}}>        
          <button onClick={noname}>To Get Movie name</button>
        </section>  
      <br/>
      <section className="ptag" style={{minHeight : '50px'}}>
        {Isloading && <h1>Loading ....</h1>}
        {!Isloading && <ForPrintlist data={Fordata} />}

      </section>
    </div>
  );
}
