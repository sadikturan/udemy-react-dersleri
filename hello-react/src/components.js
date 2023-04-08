var root = ReactDOM.createRoot(document.getElementById("root"));

// function component + hooks
// class component (state + lifecycle)

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            gorevler: ['görev 1', 'görev 2', 'görev 3']
        }
    }

    deleteItem(item) {
        this.setState((prevState) => {
            const arr = prevState.gorevler.filter((i) => {
                return item != i;
            });
            return {
                gorevler: arr
            }
        });
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
                <TodoList items={ this.state.gorevler } clear={this.clearItems} deleteItem={ this.deleteItem } /> 
                <NewItem addItem={ this.addItem }/>
            </div>
        );
    }

    componentDidMount() {
        const json_obj = localStorage.getItem("items");
        const items = JSON.parse(json_obj);

        if(items) {
            this.setState({
                gorevler: items
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.gorevler.length !== this.state.gorevler.length) {
           const json_str = JSON.stringify(this.state.gorevler);
           localStorage.setItem("items", json_str);
        }
    }
}

const Header = (props) => {
    return  (
        <div> 
            <h1>{ props.title }</h1>
            <p> { props.description }</p>
        </div>
    );
}

const TodoList = (props) => {
    return (
        <div>
            <ul>
                {
                    props.items.map((gorev,index) => <TodoItem key={index} item={gorev} deleteItem={ props.deleteItem } />)
                }
            </ul>
            <button onClick={props.clear}>Temizle</button>
        </div>
    );
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

    componentDidUpdate() {
        console.log("newitem component güncellendi.");
    }
}

const TodoItem = (props) => {
    return (
        <li>
            {props.item}
            <button onClick={() => { props.deleteItem(props.item) }}>x</button>
        </li>
    );
}

root.render(<TodoApp />);