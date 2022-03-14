import data from "../data.json";
import Article from "./Article";

function Articles() {
  return (
    <div className="container">
      <div className="grid">
        {data.map((info) => (
          <Article key={info.author} {...info} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
