import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selected, setSelected] = useState();
  const [money, setMoney] = useState();
  const onSelect = (event) => setSelected(event.target.value);
  const onChange = (event) => setMoney(event.target.value);
  console.log(money);
  console.log(selected);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select value={selected} onChange={onSelect}>
          {coins.map((coin, index) => (
            <option value={coin.quotes.USD.price} key={index}>
              {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      {selected ? (
        <div>
          <input
            onChange={onChange}
            value={money}
            type="number"
            placeholder="Input your money"
          />
          <h3>Dollars to Coins : {money / selected}</h3>
        </div>
      ) : null}
    </div>
  );
}

export default App;

//fetch 공부해보기
//input 만들어서 내가 들고있는 달러로 얼마의 코인을 살수 있는지 만들어보기
