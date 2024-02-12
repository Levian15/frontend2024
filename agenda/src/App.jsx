import Agenda from './assets/agenda.jsx'

const records = [
  {name:'Roberto Gonzalez',
  mail:'bobgon@gmail.com',
  phonenumber:'287456987'},

  {name:'Jimena Perez',
  mail:'jimerez@gmail.com',
  phonenumber:'287415478'},

  {name:'Jorge Lopez',
  mail:'jopez@gmail.com',
  phonenumber:'287963456'}
]

function App() {
 
  return (
    <div>
    <h1>Agenda</h1>
    <hr />
    <ul>
    {
      records.map((record)=>(
        <Agenda
        key={record.name}
        name={record.name}
        mail={record.mail}
        phonenumber={record.phonenumber}
        />
      ))
    }
    </ul>
    </div>
    
  )
}

export default App
