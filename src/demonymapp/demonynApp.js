import React, { Component } from 'react';
import Demonym from './demonym';
import CountrySelector from './countrySelector';


class DemonymApp extends Component {
    constructor(props) {
    super(props);
    this.state = {
        countries: [],
        selected: null
    };
    }

    componentDidMount() {
    fetch('https://country.register.gov.uk/records.json?page-size=5000')
        .then(response => {
            console.log('About to make a request')
            if(!response.ok){
                console.log('A wild error appeared!')
                throw new Error('Something went bump in the night. Try again later')
            }
            return response
        })
        .then(response => response.json())
        .then(data => {
            const countries = Object.keys(data)
                    .map(key => data[key].item[0]);
            this.setState({
                countries
            });
        })
        .catch(err => {
            console.log('Handling the error here', err)
        })
    }

    setSelect(selected) {
        this.setState({
            selected
        })
    }

    render() {
        const demon = this.state.selected
            ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name}/>
            : <div className="demonym_app__placeholder">Select a country above</div>;
        
        const error = this.state.error
            ? <div className = 'demonym_app__error'>{this.state.error}</div>
            : "";
            

    return (
        <div className="demonym_app">
        <CountrySelector countries={this.state.countries}
        changeHandler={selected=>this.setState(selected)}/>
        {demon}
        </div>
    );
    }
    }

export default DemonymApp;