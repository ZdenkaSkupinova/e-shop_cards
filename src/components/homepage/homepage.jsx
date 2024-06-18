import "./homepage.css"

const response = await fetch("http://localhost:4000/api/cards")
const json = await response.json()
const cards = json.data

console.log(cards)

export const HomePage = () => {
  return (
    <div className="uvodni_stranka">
       <h1>Magické meditační karty</h1>
       {
      cards.map((item) => (
        <div className="card_name" key={item.id}><a href={`detail.html?id=${item.id}`}>{item.name}</a></div>         
     ))
    }
    </div>
  );
};