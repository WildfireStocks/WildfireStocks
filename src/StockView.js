import * as React from 'react';

export default class StockView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return(
            <React.Fragment>
                <h1>{this.props.stockSymbol}</h1>

            </React.Fragment>
        );
    }
}