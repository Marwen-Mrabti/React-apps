import React from 'react';

class SearchBar extends React.Component {
  state = {
    userInput: '',
  };

  handleOnUserInput = (event) => {
    this.setState({ userInput: event.target.value });
  };
  handleOnSearch = (event) => {
    event.preventDefault();
    this.props.onSearchCallback(this.state.userInput);
    // this.setState({ userInput: '' });
  };

  render() {
    return (
      <form className="search-input" onSubmit={this.handleOnSearch}>
        <input
          id="search"
          type="text"
          value={this.state.userInput}
          onChange={this.handleOnUserInput}
        />
      </form>
    );
  }
}

export default SearchBar;
