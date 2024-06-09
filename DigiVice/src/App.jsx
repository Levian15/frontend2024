import { useState } from 'react'
import './assets/CSS/index.css'
import SearchMons from './components/SearchMons'
import MonsCard from './components/MonsCard'

const App = () => {
  const [Dmons, setMons]= useState([])

  // const [Dmons, setMons]= useState(
  //   JSON.parse(localStorage.getItem('MonsData')) || []
  // )

  // if(SearchMons.length===0){
  //   localStorage.setItem('MonsData')
  // }


  // localStorage.setItem("Historial", DataMons);
  // Historial = localStorage.getItem("Historial");


  return (
    <div className='container'>
      <h1 className="text-center text-warning bg-dark"><strong>Digivice</strong></h1>
      <hr/>
      <SearchMons Dmons={Dmons} setMons={setMons}/>
      <hr/>
      <div className='row'>
        {
         Dmons.map((Mons,index)=>(
          <MonsCard key={index} Mons={Mons}/>
         ))
        }
      </div>
    </div>
  )
}

export default App