
import './App.css'
import Allproduct from './Component/Allproduct/Allproduct'




function App() {

  const country ={
    name:'uganda'
  }
  

  return (
    <>
         
         <Allproduct can={country} ></Allproduct>
    </>
  )
}

export default App
