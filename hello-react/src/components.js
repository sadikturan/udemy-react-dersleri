var root = ReactDOM.createRoot(document.getElementById("root"));

// function component
// class component

// function Header(props) {
//     console.log(props);
//     return <div> 
//                 <h1>{ props.title }</h1>
//                 <p> { props.description }</p>
//            </div>;
// }

class Header extends React.Component {
    render() {
        return  (
            <div> 
                <h1>{ this.props.title }</h1>
                <p> { this.props.description }</p>
            </div>
        );
    }
}

class TodoApp extends React.Component {
    render() {
        return (
            <div> 
                <Header title="Todo Uygulaması" description="Bekleyen Görevler"/> 
                <Todo /> 
            </div>
        );
    }
}


function Todo(props) {
    return (
        <ul>
            <li>Görev 1</li>
            <li>Görev 2</li>
            <li>Görev 3</li>
        </ul>
    );
}

root.render(<TodoApp />);