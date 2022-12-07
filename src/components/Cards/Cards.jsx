import Card from "../Card/Card";
// import './Cadrs.css'

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "35px",
      }}
    >
      {characters.map((char) => (
        <Card
          detailId={char.id}
          key={char.name}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          onClose={() => onClose(char.id)}
        />
      ))}
    </div>
  );
}
