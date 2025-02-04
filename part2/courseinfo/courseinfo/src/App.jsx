const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  };

  return <Course course={course} />;
};

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => {
    console.log('Accumulator (sum):', sum, 'Current part:', part);
    return sum + part.exercises;
  }, 0);

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <p>
        <strong>Total number of exercises: {totalExercises}</strong>
      </p>
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

export default App;