import React, {useState, useEffect, useRef} from "react";
//import { UseRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//import { useEffect } from "react";


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
    this.backgroundColorBlack = this.backgroundColorBlack.bind(this);
    this.backgroundColorWhite = this.backgroundColorWhite.bind(this);
    this.renderTimes = this.renderTimes(this);
        
  }
  renderTimes(){
    let renderCount = 0
    renderCount++
    console.log(`Rendered ${renderCount} times`)
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
  backgroundColorBlack() {
    this.setState(state => ({ backgroundColor: "black" }))
    console.log("background is now color black")
  }
  backgroundColorWhite() {
    this.setState(state => ({ backgroundColor: "white" }))
    console.log("background is now color white")
  }

  render() {
    
    return (
      <div className="parent">
               <div className="brother">
                 <div className="bloque">
                   <h4>Color</h4>
                   <span className="colorcito" style={{background:this.state.pointerColor}}/>
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
                   <span id="strokeSize">{this.state.strokeSize}</span>
                   </div>
                   <button id="masSize" onClick={this.incrementStrokeSize}>+ Size</button>
                   <button id="menosSize" onClick={this.decrementStrokeSize}>- Size</button>
                 </div>
                 </div>
                 <div className="bloque">
                   <h4>Background</h4>
                   <button id="whiteCvnBtn" onClick={this.backgroundColorWhite}>Blanco</button>
                   <button id="blackCvnBtn" onClick={this.backgroundColorBlack}>Black</button>
       
                 </div>
               </div>
               <div id="sister" className="sister" style={{ background: this.state.backgroundColor, outline: "1px solid pink" }}>
                    <Mapp />
               </div>

             </div>
    );
  }
};

// function Hello() {
  
//   const [windowWidth, setwindowWidth] = useState(window.innerWidth)
//   const [windowHeight, setwindowHeight] = useState(window.innerHeight)
//   const handleResize = () => {
//     setwindowWidth(window.innerWidth)
//     setwindowHeight(window.innerHeight)
//   }
//   const sisterDiv = useRef(null)
//   //
//   useEffect ((windowWidth, sisterDiv) => {
//     window.addEventListener("resize", handleResize)
    
//     return () => {
//       window.removeEventListener("resize", handleResize)
//     }
//   }, [])
//   return (
//     <div ref={sisterDiv} style={{background: "pink",width: windowWidth, height: windowHeight, border: "4px black solid"}}><h1>{windowWidth}{" x "}{windowHeight}</h1></div>
//   )
// }

function Mapp() {
  
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect (() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`
    const c = canvas.getContext('2d')
    c.lineCap = 'round'
    c.strokeStyle = "black"
    c.lineWidth = 5
    contextRef.current = c

  }, [])

  const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX,offsetY)
    setIsDrawing(true)

  }
  const endDrawing = () => {
    contextRef.current.closePath()
  setIsDrawing(false)
  }
  const draw = (nativeEvent) => {
    if(!isDrawing) {
      const {offsetX, offsetY} = nativeEvent
      contextRef.current.lineTo(offsetX,offsetY)
      contextRef.current.stroke()
    }
  }

  return(
    <canvas 
    onMouseDown={startDrawing}
    onMouseUp={endDrawing}
    onMouseMove={draw}
    ref={canvasRef}
    style={{background:"green"}}
    />
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
