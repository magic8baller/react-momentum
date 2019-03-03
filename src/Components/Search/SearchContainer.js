import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';

class SearchContainer extends Component {
    state = {
        shouldBeSearchedKeyword: '',
        isOpen: false,
    };

    handleSubmit = e => {
      e.preventDefault();

      const { shouldBeSearchedKeyword } = this.state;

      window.location.href = `https://www.google.com/search?q=${shouldBeSearchedKeyword}`
    };

    handleChange = e => {
      this.setState({
          shouldBeSearchedKeyword: e.target.value
      });
    };

    toggleSearchButton = () => {
        const { isOpen } = this.state;
        console.log(isOpen);

        this.setState({
            isOpen: !isOpen
        });
    };

    render() {
        const { shouldBeSearchedKeyword, isOpen } = this.state;

        return <SearchPresenter
            shouldBeSearchedKeyword={shouldBeSearchedKeyword}
            isOpen={isOpen}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            toggleSearchButton={this.toggleSearchButton}
        />
    };
}

export default SearchContainer;