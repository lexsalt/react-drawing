import React from "react";
//import { UseRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1000,
      height: 100,
      pointerColor: "black",
      strokeSize: 4,
      backgroundColor: "white",
      painting: true
    };
    this.pointerColorBlack = this.pointerColorBlack.bind(this);
    this.pointerColorRed = this.pointerColorRed.bind(this);
    this.pointerColorGreen = this.pointerColorGreen.bind(this);
    this.pointerColorBlue = this.pointerColorBlue.bind(this);
    this.pointerColorWhite = this.pointerColorWhite.bind(this);
    this.pointerColorRandom = this.pointerColorRandom.bind(this);
    this.incrementStrokeSize = this.incrementStrokeSize.bind(this);
    this.decrementStrokeSize = this.decrementStrokeSize.bind(this);
        
  }
  pointerColorBlack() {
    this.setState(state => ({ pointerColor: "black" }))
    console.log("pointer is now color black")
  }
  pointerColorRed() {
    this.setState(state => ({ pointerColor: "red" }))
    console.log("pointer is now color Red")
  }
  pointerColorGreen() {
    this.setState(state => ({ pointerColor: "green" }))
    console.log("pointer is now color Green")
  }
  pointerColorBlue() {
    this.setState(state => ({ pointerColor: "blue" }))
    console.log("pointer is now color Blue")
  }
  pointerColorWhite() {
    this.setState(state => ({ pointerColor: "white" }))
    console.log("pointer is now color White")
  }
  pointerColorRandom() {
    const newColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.setState(state => ({ pointerColor: newColor }))
    console.log("pointer is now color Random")
  }
  incrementStrokeSize() {
      let strokeSize = this.state.strokeSize
            if (strokeSize < 10) {
              this.setState(state => ({ strokeSize: strokeSize + 1 }))
            }
  }
  decrementStrokeSize() {
    let strokeSize = this.state.strokeSize
            if (strokeSize > 1) {
              this.setState(state => ({ strokeSize: strokeSize - 1 }))
            }
  }

  render() {
    let pointerColor = this.state.pointerColor
    let strokeSize = this.state.strokeSize
    //console.log("pointer es: "+pointerColor)
    return (
      <div className="parent">
               <div id="sister" className="sister" style={{ background: this.state.backgroundColor, outline: "1px solid pink" }}>
                    <h1>Hello</h1>
               </div>
               <div className="brother">
                 <div className="bloque">
                   <h4>Color</h4>
                   <span className="colorcito" style={{background:pointerColor}}/>
                   <button id="BlackBtn" onClick={this.pointerColorBlack}>Black</button>
                   <button id="RedBtn"  onClick={this.pointerColorRed}>Red</button>
                   <button id="GreenBtn" onClick={this.pointerColorGreen}>Green</button>
                   <button id="BlueBtn" onClick={this.pointerColorBlue}>Blue</button>
                   <button id="whiteBtn" onClick={this.pointerColorWhite}>White</button>
                   <button id="RandomBtn" onClick={this.pointerColorRandom}>Random</button>
                 </div>
                 <div className="bloque">
                 <div>
                   <div id="sizeLabel">Size</div>
                   <div className="counter">
                   <span id="strokeSize">{strokeSize}</span>
                   </div>
                   <button id="masSize" onClick={this.incrementStrokeSize}>+ Size</button>
                   <button id="menosSize" onClick={this.decrementStrokeSize}>- Size</button>
                 </div>
                 </div>
                 <div className="bloque">
                   <h4>Background</h4>
                   <button id="whiteCvnBtn">Blanco</button>
                   <button id="blackCvnBtn">Black</button>
       
                 </div>
               </div>
             </div>
    );
  }
};


// function Contador() {
//   const [ count, setCount ] = useState(4)
//   function decrementCount() {
//     if (count > 0) {
//       setCount(prevCount => prevCount - 1)
//     } 
//   }
//     function incrementCount() {
//       if (count < 10) {
//         setCount(prevCount => prevCount + 1)
//         console.log("1: ")
//       }    
//   }
//   return (
//     <div>
//             <div id="sizeLabel">Size</div>
//             <div className="counter">
//             <span id="strokeSize" >{count}</span>
//             </div>
//             <button id="masSize" onClick={incrementCount}>+ Size</button>
//             <button id="menosSize" onClick={decrementCount}>- Size</button>
//           </div>
//   )
// }


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
