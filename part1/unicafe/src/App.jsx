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

const StatElement = ({statText, metric}) => {
  return (
    <p>{statText}: {metric}</p>
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
    setAll(allClicks.concat(1))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    console.log("Neutal clicked")
    setAll(allClicks.concat(0))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    console.log("BAd clicked")
    setAll(allClicks.concat(-1))
    setBad(bad + 1)
  }

  const countAverage = (allClicks) => {
    if (allClicks.length === 0) {
      return 0;
    }
    const sum = allClicks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log("array is", allClicks)
    console.log("sum", sum)
    console.log("length", allClicks.length)
    return sum / allClicks.length;
  };

  const countPositive = (allClicks) => {
    if (allClicks.length === 0) {
      return 0;
    } else {
      let counter = 0;
      allClicks.forEach(element => {
        if (element === 1) {
          counter++;
        }
      });
      return (counter / allClicks.length) * 100; 
    }
  }
  
  const countAll = () => allClicks.length 

  return (
    <div>
      <Header text="Give feedback" />
      <Button handleCLick={handleGoodClick} text='Good' />  
      <Button handleCLick={handleNeutralClick} text='Neutral' />  
      <Button handleCLick={handleBadClick} text='Bad' />  
      <h1>Statistics</h1>
      <StatElement statText="Good" metric={good}/>
      <StatElement statText="Neutral" metric={neutral}/>
      <StatElement statText="Bad" metric={bad}/>
      <StatElement statText="All" metric={countAll(allClicks)} />
      <StatElement statText="Average" metric={countAverage(allClicks)} />
      <StatElement statText="Positive" metric={countPositive(allClicks) + " %"} />
    </div>
  )
}

export default App