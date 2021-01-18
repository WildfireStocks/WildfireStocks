import * as React from 'react';

export default class StockView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return(
            <p>{this.props.stockSymbol}</p>
        );
    }
}