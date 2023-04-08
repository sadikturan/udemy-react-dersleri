import React, { Component } from 'react'

export class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.keyword);
        this.setState({ keyword: '' });
    }

    render() {
        return (
        <div className="container my-3">
            <form onSubmit={this.onSubmit}>
                <div className="input-group">
                    <input type="text" value={this.state.keyword} onChange={this.onChange} className='form-control' placeholder='Anahtar Kelime' />
                    <button className="btn btn-primary" type='submit'>Ara</button>
                </div>
            </form>
        </div>
        )
    }
}

export default Search