const Header = (props) => {
  return (
    <div>
       <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const parts = props.parts;
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} /> 
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
      {props.name} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  const [part1, part2, part3] = props.parts
  return (
    <div>
      <p>
         Number of exercises {part1.exercises + part2.exercises + part3.exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
export default App