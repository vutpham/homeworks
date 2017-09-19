import React from 'react';
import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({searchTerm: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.fetchSearchGiphys(this.state.searchTerm);
  }

  render() {
    return(
      <div>
        <h2>Giphys Search</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='text' placeholder="Search..." value={this.state.searchTerm}></input>
          <input type='button' value='submit'></input>
        </form>

        <GiphysIndex giphys={this.props.giphys}/>
      </div>
    );
  }
}

export default GiphysSearch;
