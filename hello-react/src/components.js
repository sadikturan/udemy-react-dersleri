var root = ReactDOM.createRoot(document.getElementById("root"));

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.state = {
            gorevler: ['görev 1', 'görev 2', 'görev 3']
        }
    }

    clearItems() {
        this.setState({
            gorevler: []
        });
    }

    addItem(item) {

        if (this.state.gorevler.indexOf(item) > -1) {
            return 'aynı elemanı ekleyemezsiniz';
        }

        this.setState((prevState) => {
            return { gorevler: prevState.gorevler.concat(item) }
        });
    }

    render() {
        const data = {
            baslik: "Todo Application",
            aciklama: "Bekleyen Görevler",            
        }
        return (
            <div> 
                <Header title={ data.baslik } description={ data.aciklama } /> 
                <TodoList items={ this.state.gorevler } clear={this.clearItems} /> 
                <NewItem addItem={ this.addItem }/>
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
            <div>
                <ul>
                    {
                        this.props.items.map((gorev,index) => <TodoItem key={index} item={gorev}/>)
                    }
                </ul>
                <button onClick={this.props.clear}>Temizle</button>
            </div>
        );
    }
}

class NewItem extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error: ''
        }
    }
    onFormSubmit(e) {
        e.preventDefault();

        const item = e.target.elements.txtItem.value.trim();
        if(item) {
            e.target.elements.txtItem.value = "";
            const error = this.props.addItem(item);
            this.setState({
                error: error
            })
        }
    }
    render() {
        return (
            <div>

                { this.state.error && <p> { this.state.error } </p> }
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="txtItem" />
                    <button type="submit">Ekle</button>
                </form>
            </div>
        );
    }
}

class TodoItem extends React.Component {
    render() {
        return <li>{this.props.item}</li>
    }
}

root.render(<TodoApp />);