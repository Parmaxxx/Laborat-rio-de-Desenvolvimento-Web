import helloWorld from "./assets/images/hello_world.png" 
import './App.css'


function App() {
  return (
    <>
      <div>
        <img src={helloWorld} alt="Hello World" />

      </div>
      <h1>Laboratorio de Desenvolvimento Web</h1>
      
      <p className="read-the-docs">
        Primeira atividade utilizando React
      </p>
    </>
  )
}

export default App
