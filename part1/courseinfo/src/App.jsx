import React from 'react';

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>{name} - {exercises} exercises</p>
    </div>
  );
};

const Content = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
      <p><strong>Total exercises: {totalExercises}</strong></p>
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
    </div>
  );
};

export default App;
