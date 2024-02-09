import Listitem from './Listitem.jsx'

const links = [
  {
    name:'Google',
    url:'https://www.google.com'
  },
  {
    name:'Facebook',
    url:'https://www.facebook.com'
  },
  {
    name:'YouTube',
    url:'https://www.youtube.com'
  }
]
function App() {

  return (
    <div>
    <h1>Catalogo de Links</h1>
    <hr />
    <ul>
    {
      links.map((link)=>(
        <Listitem 
        key={link.name}
        name={link.name}
        url={link.url}
        />
      ))
    }
    </ul>
    </div>

  )
}

export default App
