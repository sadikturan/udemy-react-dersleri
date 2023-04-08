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
                <NewItem />
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
    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this);
    }
    clearItems() {
        console.log("clear items");
        console.log(this.props.items);
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.items.map((gorev,index) => 
                        <TodoItem key={index} item={gorev}/>)
                    }
                </ul>
                <button onClick={this.clearItems}>Temizle</button>
            </div>
        );
    }
}

class NewItem extends React.Component {
    onFormSubmit(e) {
        e.preventDefault();

        const item = e.target.elements.txtItem.value.trim();
        if(item) {
            e.target.elements.txtItem.value = "";
            console.log(item);
        }
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" name="txtItem" />
                <button type="submit">Ekle</button>
            </form>
        );
    }
}

class TodoItem extends React.Component {
    render() {
        return <li>{this.props.item}</li>
    }
}

root.render(<TodoApp />);