import React, { Component } from 'react';

import { Cards, Chart, CountryPicker} from './components';
import Styles from './App.module.css';
import { fetchData } from './api';

class App extends Component {

    async componentDidMount(){
        const data = await fetchData();
        console.log(data);
    }

    render() {
        return (
            <div className = {Styles.container}>
               <Cards/>
               <CountryPicker/>
               <Chart/>
            </div>
        );
    }
}

export default App;