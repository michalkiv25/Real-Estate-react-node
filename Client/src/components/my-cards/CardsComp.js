import { useState, useEffect } from "react";
import { getMeCards, deleteCard } from "../../helpers/FetchHelper";
import CardComp from "./CardComp";

function CardsComp({ handleClick }) {
  const [cards, setCards] = useState([]);
  // useEffect,Gets 2 parameters: What to do-callback function , And data set

  useEffect(() => {
    if (localStorage.getItem("token"))
      getMeCards(localStorage.getItem("token"), (data) => {
        setCards(data);
      });
  }, []);

  return cards.map((c, index) => (
    <CardComp
      key={index}
      handleClick={(id) => {
          deleteCard(id, localStorage.getItem("token"), (card) => {
          setCards(cards.filter((x) => x._id != id));
        });
      }}
      card={c}
    ></CardComp>


  ));
}
export default CardsComp;



