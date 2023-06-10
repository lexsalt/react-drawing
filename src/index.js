import React, { useState } from "react";
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
      width: 1000,
      height: 100,
      color: "white",
      painting: true
    };
    this.canvasClickWhite = this.canvasClickWhite(this);
    this.canvasClickBlack = this.canvasClickBlack(this)
    // this.canvasClickRed = this.canvasClickRed(this)
    // this.canvasClickGreen = this.canvasClickGreen(this)
    // this.canvasClickBlue = this.canvasClickBlue(this)
    // this.canvasClickRandom = this.canvasClickRandom(this)    
  }  
   
canvasClickWhite() {
  console.log( "miameee")
}
canvasClickBlack() {
  //this.setState({ color: "black" });
  this.setState(state => ({ color: "black" }))
  console.log("how deep is your love")
}
// canvasClickRed() {
//   this.setState({ color: "red" });
// }
// canvasClickGreen() {
//   this.setState({ color: "green" });
// }
// canvasClickBlue() {
//   this.setState({ color: "blue" });
// }
// canvasClickRandom() {
//   let col1 = Math.floor(Math.random() * 254) + 1;
//     let col2 = Math.floor(Math.random() * 254) + 1;
//     let col3 = Math.floor(Math.random() * 254) + 1;
//     let strokeColorRandom = "rgba(" + col1 + "," + col2 + "," + col3 + ",1)";
//     let strokeColor = strokeColorRandom;
//   this.setState({ color: strokeColor });
// }
  
  render() {
    const canvasWidth = this.state.width
    const canvasHeight = this.state.height
    const backgroundColor = this.state.color
    console.log("height: "+this.state.height)
    console.log("width: "+this.state.width)
    console.log("color: "+this.state.color)
    return (
      <div className="parent">
        <div id="sister" className="sister" style={{ background: backgroundColor, outline: "1px solid pink", width:{canvasWidth}, height:{canvasHeight} }}>
        {/* <canvas>{}</canvas> */}
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
            <Contador></Contador>
          </div>
          <div className="bloque">
            <h4>Background</h4>
            <button id="whiteCvnBtn" onClick={this.canvasClickWhite}>Blanco</button>
            <button id="blackCvnBtn" onClick={this.canvasClickBlack}>Black</button>
            {/* <button id="redCvnBtn" onClick={this.canvasClickRed}>Red</button>
            <button id="greenCvnBtn" onClick={this.canvasClickGreen}>Green</button>
            <button id="blueCvnBtn" onClick={this.canvasClickBlue}>Blue</button>
            <button id="randomCvnBtn" onClick={this.canvasClickRandom}>Random</button> */}
          </div>
        </div>
      </div>
    );
  }
  updateDimensions = () => {
    this.setState(state => ({ width: window.innerWidth, height: window.innerHeight }))
   }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}

function Contador() {
  const [ count, setCount ] = useState(4)
  function decrementCount() {
    if (count > 0) {
      setCount(prevCount => prevCount - 1)
    } 
  }
    function incrementCount() {
      if (count < 10) {
        setCount(prevCount => prevCount + 1)
      }    
  }
  return (
    <div>
            <div id="sizeLabel">Size</div>
            <div className="counter">
            <span id="strokeSize" >{count}</span>
            </div>
            <button id="masSize" onClick={incrementCount}>+ Size</button>
            <button id="menosSize" onClick={decrementCount}>- Size</button>
          </div>
  )
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
