import React, { Component } from 'react';
import "./City.css";
import axios from 'axios';

class City extends Component {
    state = { 
        city: ""
    }

    cityChange() {
        console.log('je suis rentrer');
        axios.get("https://api.openweathermap.org/data/2.5/forecast?q=lens&lang=fr&units=metric&appid=d5e44897f4af26e0ff80b8eafafcd463")
        
    }
    
    handleChangeCity = (e) => {
        this.setState({
          city:  e.target.value
        })
      }

    render() { 
        return ( 
            <div>
                <input type="text" value={this.state.city} placeholder="Your city" onChange={this.handleChangeCity} />
                <button onClick={this.cityChange}>Envoyer</button>
            </div>
        );
    }
}
 
export default City;