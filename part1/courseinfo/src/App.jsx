const App = () => {
  const course = 'Kalilinux'
  const part1 = 'Basic commands and networking'
  const exercises1 = 10
  const part2 = 'Understanding different tools,uses and laws'
  const exercises2 = 7
  const part3 = 'Practicing using virtual labs'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App