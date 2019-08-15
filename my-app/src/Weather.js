import React from 'react';
import PropTypes from 'prop-types';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.weatherItems = [{ month: 'May', day: '20', max: '38', min: '18' }, { month: 'May', day: '21', max: '30', min: '20' }, { month: 'May' day: '22', max: '33', min: '17' }, { month: 'May', day: '23', max: '31', min: '19' }];
    }

    render() {
        return (

        );
    }
};

Weather.PropTypes = {

}

export default Weather;