import "./Description.scss";

function Description({ title, description, note, specifications }) {
  return (
    <div className="card-description">
      <h2> {title}</h2>
      {description.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <p className="note">{note}</p>
      <h3>Spécifications techniques:</h3>
      <p>{specifications}</p>
    </div>
  );
}

export default Description;
