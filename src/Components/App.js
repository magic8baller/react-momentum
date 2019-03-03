import React, { Component } from 'react';
import GlobalStyle from './GlobalStyles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Name from './Name';
import Clock from './Clock';
import Search from './Search';
import Weather from './Weather';


library.add(faSearch);

class App extends Component {
    state = {
        name: null
    };

    saveName = data => {
        this.setState({
            name: data,
        });
    };

    getName = () => {
        const name = localStorage.getItem('MOMENTUM_NAME');

        if (name !== null) {
            this.setState({
                name,
            });
        }
    };

    componentDidMount() {
        this.getName();
    }


    render() {
        const { name } = this.state;
        return (
            <>
                <GlobalStyle />
                {
                    name === null
                        ? <Name saveName={this.saveName} />
                        : <>
                            <Clock name={name} />
                            <Search />
                            <Weather />
                        </>
                }

            </>
        );
    }
}

export default App;
