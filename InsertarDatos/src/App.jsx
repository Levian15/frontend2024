const persona = {
nombre :'Ian levi Lagunes Gallegos',
edad : '26',
profesion: 'Estudiante',
pasatiempo:['Videojuegos','Leer manga','Cocinar','Dormir'],
cumpleaños:'15 de noviembre',
signozodiaco:'Escorpio'
}

function App() {
  
  return (
   <div> 
    <h1>Informacion personal</h1>  
    <hr/>
    <ul>
      <li>Nombre completo: {persona.nombre}</li>
      <li>Edad:{persona.edad}</li>
      <li>Profesion:{persona.profesion}</li>
      <li>Pasatiempo:</li>
      <ul>
        {
          persona.pasatiempo.map((pasatiempo)=>{
            return<li key={pasatiempo}>{pasatiempo}</li>
          })
        }
      </ul>
      <li>Cumpleaños:{persona.cumpleaños}</li>
      <li>Signo Zodiacal:{persona.signozodiaco}</li>
    </ul>
    </div>
  )
}

export default App
