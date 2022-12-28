import { Component } from "react";

class Search extends Component {
    state = {
        search: ''
    }
    searching = (e) => {
        if (this.state.search.length) {
            this.props.searchingMovie(this.state.search)
        } else {
            this.props.searchingMovie('matrix')
        }
    }
    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input 
                        id="email_inline" 
                        type="search" 
                        placeholder="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                    />
                    <button className="btn" onClick={this.searching} >Search</button>
                </div>
            </div>
        );
    }
}

export default Search;
