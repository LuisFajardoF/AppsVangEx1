import React from 'react';
import Button from '@material-ui/core/Button';
import Weather from './Weather';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title1: 'Bienvenido', title2: 'Weather App'};
        this.intercalar = this.intercalar.bind(this);
    }

    intercalar() {
        this.setState({ title1: 'Weather App', title2: 'Bienvenido'});
    }

    render() {
        return <div>
            <h1>{this.state.title1}</h1>
            <h1>{this.state.title2}</h1>
            <Button variant="contained" color="primary" onClick={this.intercalar}>
                Intercalar
            </Button>
            <h5></h5>
            <Weather weatherMonth={'May'} weatherDay={20}/>
            <h5></h5>
            <Weather weatherMonth={'May'} weatherDay={21}/>
            <h5></h5>
            <Weather weatherMonth={'May'} weatherDay={22}/>
            <h5></h5>
            <Weather weatherMonth={'May'} weatherDay={23}/>
            
        </div>
    }
};

export default Home;