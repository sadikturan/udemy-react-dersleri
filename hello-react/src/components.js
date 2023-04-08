var root = ReactDOM.createRoot(document.getElementById("root"));

class TodoApp extends React.Component {
    render() {
        const data = {
            baslik: "Todo Application",
            aciklama: "Bekleyen Görevler",
            gorevler: ['görev 1', 'görev 2', 'görev 3']
        }
        return (
            <div> 
                <Header title={ data.baslik } description={ data.aciklama } /> 
                <TodoList items={ data.gorevler } /> 
            </div>
        );
    }
}

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

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.items.map((gorev,index) => 
                        <TodoItem key={index} item={gorev}/>)
                }
            </ul>
        );
    }
}

class TodoItem extends React.Component {
    render() {
        return <li>{this.props.item}</li>
    }
}

root.render(<TodoApp />);