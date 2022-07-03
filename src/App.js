import "./App.css";
import Navbar from "./Componets/NavBar/Navbar";
import Body from "./Componets/Body/Body";
import Banner from "./Componets/Banner/Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Componets/Checkout/Checkout";
import Login from "./Componets/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Context/StateContext";
import { useEffect } from "react";
import Payment from "./Componets/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Componets/Orders/Orders";

const promise = loadStripe(
  "pk_test_51LHC3ND6O7WBuk9cUaI2fEBAKFmgfqc5nyNhFCk3hHws4rpnqlM1jpFk7yaKFLBX14Vrn3AQxXQjyqubqEZhPesY00Mhosgzyc"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);

      if (authUser) {
        //the user is logged in
        dispatch({
          type: "set_user",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "set_user",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* <Route
            path="/orders"
            element={
              <div>
                <Navbar />
                <Orders />
              </div>
            }
          /> */}
          <Route
            path="/payment"
            element={
              <div>
                <Navbar />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <div>
                <Navbar />
                <Checkout />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Banner />
                <Body />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
