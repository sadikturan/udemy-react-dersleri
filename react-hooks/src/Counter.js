// class component => state (Component), lifecycle
// function component + state (hooks) 

import { useState } from "react";

// import { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }

//   render() {
//     return (
//       <>
//         <p>Butona { this.state.count } kez tıkladınız.</p> 
//         <button onClick={ () => this.setState({ count: this.state.count + 1 }) }>+1</button>
//       </>
//     );
//   }
// }

function App(props) {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState(props.text);
  return (
    <>
      <p>Butona { count } kez tıkladınız.</p> 
      <p>girilen text: { text }</p>
      <button onClick={ () => setCount(count + 1) }>+1</button>
      <button onClick={ () => setCount(count - 1) }>-1</button>
      <button onClick={ () => setCount(props.count) }>reset</button>
      <input type="text" value={ text } onChange={ (e) => setText(e.target.value) }/>
    </>
  );
}

export default App;
