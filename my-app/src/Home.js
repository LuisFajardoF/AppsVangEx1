import React from 'react';
import Button from '@material-ui/core/Button';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title:'Bienvenido'};
        this.intercalar = this.intercalar.bind(this);
    }

    intercalar() {
        this.setState({title:'Weather App'});
    }

    render() {
        return <div>
            <h1>{this.state.title}</h1>
            <h1>Weather App</h1>
            <Button variant="contained" color="primary">
                Intercalar
            </Button>
            <Button variant="contained" color="primary">
                Weather for 
            </Button>
            <Button variant="contained" color="primary">
                Weather for
            </Button>
            <Button variant="contained" color="primary">
                Weather for
            </Button>
            <Button variant="contained" color="primary">
                Weather for
            </Button>
        </div>
    }
};

export default Home;