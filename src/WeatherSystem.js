import React, { Component } from 'react';
import axios from 'axios';

import "./WeatherSystem.css";

import Period from "./Period";
import City from "./City";

class WeatherSystem extends Component {
    state = {
        periods: [] 
     }

    componentDidMount() {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=dunkerque&lang=fr&units=metric&appid=d5e44897f4af26e0ff80b8eafafcd463')
        .then(res => {
            console.log(res.data);
            this.setState({ 
                periods: res.data.list
            })
        })
    }

    
    render() { 
        let periodsList = this.state.periods.map(period => {
            return <Period period={period} />
        })

        return ( 
            <section>
                <City/>
                <div className="weathersystem">
                    {periodsList}
                </div>
            </section>
         );
    }
}
 
export default WeatherSystem;
/* 
- lorsque vous soumettez le formulaire, vous récupérez la ville.
- Dans votre URL, vous spécifiez la nouvelle ville
- Vous récupérez les infos et vous adaptez le periods */