import React, { Component } from 'react';
import axios from 'axios';
import WeatherPresenter from './WeatherPresenter';

class WeatherContainer extends Component {
    state = {
        temp: 0,
        name: '',
        location: '',
    };

    weatherApi = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5',
        params: {
            APPID: 'dd5d5f79d44cd01862f28a4767542422'
        }
    });

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            const getWeather = this.weatherApi.get('weather', {
                    params: {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    },
                },
                error => console.log(error)
            );

           getWeather
               .then(response => {
                   this.setState({
                       temp: Math.ceil(response.data.main.temp - 273.15),
                       name: response.data.weather[0].main,
                       location: response.data.name,
                   });
               })
               .catch(error => console.log(error));
        });
    };

    render() {
        const { temp, name, location } = this.state;

        return <WeatherPresenter temp={temp} name={name} location={location} />;
    };
}

export default WeatherContainer;