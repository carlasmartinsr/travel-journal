import Header from "./Header"
import Card from"./Card"
import './App.css'
import data from './data'



function App() {
  const cards  = data.map(card=>{
    return (
      <Card 
      id = {card.id}
      item = {card }
      />)
  })
  console.log(cards)

  return (
    <>
    <Header />
    <section className="cards">
      {cards}
    </section>
    </> 
  )
}

export default App
