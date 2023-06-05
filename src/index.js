import React, { useRef, useEffect } from "react";
//import { UseRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// const defColor = '#2196F8';
//const tweetQuoteStyle = {background: '#1DA1F2'};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 50,
      height: 100,
      color: "red",
      painting: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const quotes = [
      ["Believe you can and you're halfway there.", "Theodore Roosevelt"],
      ["You miss 100% of the shots you don't take.", "Wayne Gretzky"],
    ];
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const cuotation = quotes[randomQuoteIndex][0];
    const theAuthor = quotes[randomQuoteIndex][1];
    this.setState((state) => ({
      quote: cuotation,
      author: theAuthor,
      color: newColor,
    }));
  }
   updateDimensions = () => {
     this.setState({ width: window.innerWidth, height: window.innerHeight });
   }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  
  render() {
    const canvasWidth = this.state.width
    const canvasHeight = this.state.height
    const backgroundColor = this.state.color
    return (
      <div className="parent">
        <div id="sister" className="sister">
        <canvas style={{ background: backgroundColor, outline: "13px solid pink", width:{canvasWidth},
        height:{canvasHeight} }}>{
      }</canvas>
        </div>
        <div className="brother">
          <div className="bloque">
            <h4>Color</h4>
            <span className="colorcito" />
            <button id="BlackBtn">Black</button>
            <button id="RedBtn">Red</button>
            <button id="GreenBtn">Green</button>
            <button id="BlueBtn">Blue</button>
            <button id="RandomBtn">Random</button>
            <button id="whiteBtn">White</button>
          </div>
          <div className="bloque">
            <h4>Size</h4>
            <div className="counter">
              <h6>Size </h6>
              <p id="strokeSize" />
              <p />
            </div>
            <button id="masSize">+ Size</button>
            <button id="menosSize">- Size</button>
          </div>
          <div className="bloque">
            <h4>Background</h4>
            <button id="whiteCvnBtn">Blanco</button>
            <button id="blackCvnBtn">Black</button>
            <button id="redCvnBtn">Red</button>
            <button id="greenCvnBtn">Green</button>
            <button id="blueCvnBtn">Blue</button>
            <button id="randomCvnBtn">Random</button>
          </div>
        </div>
      </div>
    );
  }
  
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
