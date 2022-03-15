import data from "../colors.json";
import Card from "./Card";

function App() {
  return (
    <div className="main">
      {data.map((animal) => (
        <Card {...animal} />
      ))}
    </div>
  );
}

export default App;
