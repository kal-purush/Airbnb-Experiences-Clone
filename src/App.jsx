import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Content from './components/Content'
import Card from './components/Card'
import data from './data'
import './App.css'
// import './css/NavBar.css'

function App() {
  // const [count, setCount] = useState(0)
  const about_content = `Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.`;
  const cards = data.map(item => {
    return (
        <Card
          key={item.id}
          item={item}
        />
    )
  })
  return (
    <>
      <NavBar/>
      <div className='main'>
        <div className='hero'>
          <Hero/>
          <Content  title={"Online Experiences"} content={about_content}/>
        </div>
        <section className="cards-list">
            {cards}
        </section>
      </div>.
    </>
  )
}

export default App
