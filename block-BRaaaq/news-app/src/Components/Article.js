import PropTypes from "prop-types";

function Article(props) {
  return (
    <div className="wrapper flex">
      <div className="articleImage">
        <img src={props.urlToImage} alt="" width="380" />
        <h2 className="author">{props.author}</h2>
      </div>

      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <button>
        <a href={props.url}>Read More!</a>
      </button>
    </div>
  );
}

Article.prototype = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Article;
