import * as React from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import secret from "./secret.json";

export default class StockView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockData: {
        labels: [],
        datasets: [
          {
            label: "close",
            data: [],
            backgroundColor: "rgb(255, 111, 0)",
            borderColor: "rgba(255, 111, 0, 0.2)",
          },
        ],
      },
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" +
          this.props.match.params.stockSymbol +
          "&apikey=" +
          secret.avApiKey
      )
      .then((res) => {
        if (!res["data"]["Time Series (Daily)"]) return;
        let data = this.state.stockData;
        data.labels = [];
        data.datasets.data = [];

        Object.keys(res["data"]["Time Series (Daily)"]).forEach((key) => {
          data.labels.push(key);
          data.datasets[0].data.push(
            parseFloat(res["data"]["Time Series (Daily)"][key]["4. close"])
          );
        });

        data.labels.reverse();
        data.datasets[0].data.reverse();
        this.setState({ stockData: data });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.match.params.stockSymbol.toUpperCase()}</h1>
        {this.state.stockData.labels ? (
          <Line
            data={this.state.stockData}
            height={100}
            options={{
              responsive: true,
              tooltips: {
                mode: 'index',
                intersect: false,
              }
            }}
          />
        ) : (
          <h2>Unable to find stock</h2>
        )}
      </React.Fragment>
    );
  }
}
