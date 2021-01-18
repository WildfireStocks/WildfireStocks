import * as React from 'react';
import axios from "axios";
import Header from './components/Header';
import secret from './secret.json';
import { Line } from 'react-chartjs-2';

export default class StockView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockData: {}
        }
    }

    componentDidMount() {
        axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + this.props.match.params.stockSymbol + "&apikey=" + secret.avApiKey)
        .then((res) => {
            if(!res["data"]["Time Series (Daily)"]) return;
            let data = {labels: [], datasets: [{
                label: "close",
                data:[]
            }]};

            Object.keys(res["data"]["Time Series (Daily)"]).forEach((key) => {
                data.labels.push(key);
                data.datasets[0].data.push(parseFloat(res["data"]["Time Series (Daily)"][key]["4. close"]));
            });
            data.labels.reverse();
            data.datasets[0].data.reverse();
            this.setState({stockData: data});
        })
    }

    render() {
        return(
            <React.Fragment>
                <Header/>
                <h1>{this.props.match.params.stockSymbol}</h1>
                {this.state.stockData.labels ? 
                <Line data={this.state.stockData} options={{ reverse:true }} height={100}/>
                : <h2>Unable to find stock</h2>}
            </React.Fragment>
        );
    }
}