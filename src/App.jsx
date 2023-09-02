import { ItemListContainer } from "./components/ItemListContainer"
import NavBar  from "./components/NavBar"


function App() {

  const greeting = "Bienvenidos a mi E-commerce"
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={greeting}/>
    </>
  )
}

export default App
