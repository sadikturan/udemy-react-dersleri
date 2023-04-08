// class component => state (Component), lifecycle
// function component + state (hooks) 


// import { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }

//   componentDidMount() {
//     console.log("did mount");
//   }

//   componentDidUpdate() {
//     console.log("component update");
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

// componentDidMount, componentDidUpdate

import { useState, useEffect } from "react";

function App(props) {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState(props.text);

  useEffect(() => {
    console.log("count");
  }, [count]);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  useEffect(() => {
    console.log("componentDidMount, componentDidUpdate")
  });

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

App.defaultProps = {
  count: 5,
  text: ''
}

export default App;
