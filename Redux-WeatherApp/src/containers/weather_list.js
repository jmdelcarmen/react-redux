'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeather(cityData) {
    const { city, list:foreCastList } = cityData;
    const temps = foreCastList.map(({ main }) => main.temp);
    const humidity = foreCastList.map(({ main }) => main.humidity);
    const pressure = foreCastList.map(({ main }) => main.pressure);

    console.log(foreCastList);
    return(
      <tr key={city.name}>
        <td>{city.name}</td>
        <td className="chart"><Chart color={"red"} data={temps} units="K"/></td>
        <td className="chart"><Chart color={"yellow"} data={pressure} units="hPa"/></td>
        <td className="chart"><Chart color={"blue"} data={humidity} units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K) </th>
            <th>Pressure (hPa) </th>
            <th>Humidity (%) </th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);
