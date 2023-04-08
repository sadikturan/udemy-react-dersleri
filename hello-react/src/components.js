var root = ReactDOM.createRoot(document.getElementById("root"));

// function component
// class component

// function Header(props) {
//     return (<h1>Todo App</h1>);
// }

class TodoApp extends React.Component {
    render() {
        return (
            <div> 
                <Header /> 
                <Todo /> 
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (<h1>Todo App</h1>);
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