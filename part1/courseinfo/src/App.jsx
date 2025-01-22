const Content = () => {
  return (
    <div>
      <Part name="Part 1" exercises={10} />
      <Part name="Part 2" exercises={7} />
      <Part name="Part 3" exercises={5} />
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Number of exercises: {exercises}</p>
    </div>
  );
};

export default Content
