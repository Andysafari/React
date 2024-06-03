import { useState } from 'react'
import './App.css'
import  Card from "./Components/Card"
import Hero from "./Components/Hero"

function App() {
  const [count, setCount] = useState(0)

  
  
  
  return (
    <>
    <Hero />
     { count}
      <Card 
      image="https://www.topgear.com/sites/default/files/2023/08/P90492179_highRes_bmw-i7-xdrive60-m-sp%20%281%29.jpg"
      name= " Bmw"
      city= "Stamford"
     
      />
        <Card 
      imgage="https://www.topgear.com/sites/default/files/2023/08/P90492179_highRes_bmw-i7-xdrive60-m-sp%20%281%29.jpg"
      name=" bmw"
      city=" stamford"

      />
    </>
  );
}
export default App;