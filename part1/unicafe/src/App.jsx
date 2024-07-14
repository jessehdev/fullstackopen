import { useState } from 'react'

const Header = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
} 

const Button = (props) => {
  return (
  <button onClick={props.handleCLick}>{props.text}</button>
  )
}

const StatElement = ({statText, metric, allClicks}) => {
  return (
    <p>{statText}: {allClicks.filter(r => r === metric).length}</p>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    console.log("Good clicked")
    setAll(allClicks.concat('G'))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    console.log("Neutal clicked")
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    console.log("BAd clicked")
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text="Give feedback" />
      <Button handleCLick={handleGoodClick} text='Good' />  
      <Button handleCLick={handleNeutralClick} text='Neutral' />  
      <Button handleCLick={handleBadClick} text='Bad' />  
      <h1>Statistics</h1>
      <StatElement statText="Good" metric="G" allClicks={allClicks}/>
      <StatElement statText="Neutal" metric="N" allClicks={allClicks}/>
      <StatElement statText="Bad" metric="B" allClicks={allClicks}/>
    </div>
  )
}

export default App