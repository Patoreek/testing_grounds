import logo from "./logo.svg";
import classes from "./App.module.scss";
import TestingGround from "./containers/TestingGround/TestingGround";

function App() {
  const amount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={classes.app}>
      <h1>TESTING GROUNDS</h1>
      {amount.map((amount, i) => (
        <TestingGround key={i} />
      ))}
    </div>
  );
}

export default App;
