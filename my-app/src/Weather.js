import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';


class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.weatherItems = [
            { month: 'May', day: '20', max: '38', min: '18' }, 
            { month: 'May', day: '21', max: '30', min: '20' }, 
            { month: 'May', day: '22', max: '33', min: '17' }, 
            { month: 'May', day: '23', max: '31', min: '19' }
        ];
    }

    getWeatherItem(day) {
        for (let i = 0; i < this.weatherItems.length; i++)
            if(this.weatherItems[i].day == day)
                return i;
        return -1;
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="primary">
                    Weather for {this.props.weatherMonth} {this.props.weatherDay}
                </Button>
                {/* las cards estan feas :-/ */}
                <Card>
                    MAX: {this.weatherItems[this.getWeatherItem(this.props.weatherDay)].max}
                </Card>
                <Card>
                    MIN: {this.weatherItems[this.getWeatherItem(this.props.weatherDay)].min}
                </Card>
            </div>
        );
    }
};

Weather.propTypes = {
    weatherMonth: PropTypes.string,
    weatherDay: PropTypes.number
}




export default Weather;