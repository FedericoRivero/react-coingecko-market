import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./App.css";
import axios from "axios";
import TableCoins from "./components/TableCoins";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
    );
    // console.log(res.data);
    setCoins(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-2">
          <div className="col-lg-6 mx-auto">
            
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <figure className="img-fluid px-4 me-sm-3">
                <Player
                  autoplay
                  loop
                  background={"transparent"}
                  src="https://assets1.lottiefiles.com/private_files/lf30_h03e9pog.json"
                  style={{ height: "150px", width: "150px" }}
                ></Player>
              </figure>

              <h1 className="display-5 fw-bold text-white px-4 mt-4">
                Market Coin
              </h1>
              <hr />
            </div>
            <p className="fs-5">
              A simple website using the coingecko API to display the
              cryptocurrency prices.
            </p>
          </div>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search price coin"
        className="form-control bg-dark text-light fs-5 border-0 mt-2 mb-1 text-center"
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableCoins coins={coins} search={search} />
    </div>

  );
}

export default App;
