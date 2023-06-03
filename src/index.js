import React from "react";
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
  render() {
    //
    //
    //   const ref = useRef(null);

    // const [width, setWidth] = useState(0);
    // const [height, setHeight] = useState(0);

    // useLayoutEffect(() => {
    //   setWidth(ref.current.offsetWidth);
    //   setHeight(ref.current.offsetHeight);
    // }, []);

    //
    // let str1 = "https://twitter.com/intent/tweet?text="
    // let link = str1.concat(this.state.quote+" ("+this.state.author+")")

    return (
      //   <div id="bg" style={{background: this.state.color}}>
      //   <div id="wrapper">
      //       <div id="quote-box">
      //          <div id='text' style={{color: this.state.color}}><h1>{this.state.quote}</h1></div>
      //         <div id='author' style={{color: this.state.color}}><p>-</p><p>{this.state.author}</p></div>
      //         <div id='buttons'>
      //         <button id='new-quote' onClick={() => this.handleClick()} style={{background: this.state.color}}>New Quote</button>
      //           <a class="twitter-share-button"
      //   href={link} data-size="large" id='tweet-quote' style={tweetQuoteStyle}>
      // Tweet this quote!</a>
      //         </div>
      //       </div>
      // </div>
      // </div>
      <div className="parent">
        <div id="sister" className="sister">
          <Canvas
            draw={(canvas, ctx) => {
              ctx.strokeRect(5, 5, 5, 5);
            }}
          />
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

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
  }
  render() {
    const { width, height } = this.props;
    return (
      <canvas
        ref={(node) => (this.canvas = node)}
        width={width}
        height={height}
        style={{ outline: "1px solid" }}
      />
    );
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    const ctx = this.canvas.getContext("2d");
    this.props.draw(this.canvas, ctx);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
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
