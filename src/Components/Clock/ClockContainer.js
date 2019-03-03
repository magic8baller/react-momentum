import React, { Component } from 'react';
import moment from 'moment';
import ClockPresenter from './ClockPresenter';

class ClockContainer extends Component {
    state = {
        time: '',
        greeting: '',
    };

    getTime = () => {
        const time = moment().format('HH:mm');

        this.setState({
            time,
        });

        if (moment().hours() >= 5 && moment().hours() < 12) {
            this.setState({
                greeting: 'Good Morning'
            });
        }
        else if (moment().hours() >= 12 && moment().hours() < 18) {
            this.setState({
                greeting: 'Good Afternoon'
            });
        }
        else {
            this.setState({
                greeting: 'Good Evening'
            });
        }
    };

    componentDidMount() {
        setInterval(this.getTime, 1);
    }

    render() {
        const { time, greeting } = this.state;
        const { name } = this.props;

        return <ClockPresenter name={name} time={time} greeting={greeting} />
    }
}

export default ClockContainer;