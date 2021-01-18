import * as React from 'react';
import Header from './components/Header';

export default class StockView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <React.Fragment>
                <Header/>
                <h1>{this.props.match.params.stockSymbol}</h1>
            </React.Fragment>
        );
    }
}