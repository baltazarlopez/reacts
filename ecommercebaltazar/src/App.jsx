import reactLogo from "./assets/react.svg";
import visualViewport from "/vite.svg";
import "./App.css";
function App() {
  return (
    <div className="">
      <h1>almacen de bebidas</h1>
      <img src={reactLogo} onClick={() => alert("")} />
      <hr />
      <div></div>
      <input />
      <img src={visualViewport} />
      <nav>
        <ul>
          <li>bebidas</li>
          <li>nosotros</li>
          <li>carrito</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
