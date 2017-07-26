var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherApi = require('openWeatherApi');

var Weather = React.createClass({
  getInitialState: function() {
      return {
          location:'Miami',
          temp:88
      }
  },    
  handleSearch: function(location) {
      var self = this;
      openWeatherApi.getTemp(location).then(function(temp){
          self.setState({
          location:location,
          temp:temp
      })
      }, function(errorMessage){
          alert(errorMessage)
      })

  },
  render: function () {
      var {temp, location} = this.state;
    return (
        <div>
      <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
            <WeatherMessage temp={temp} location={location}/>
            </div>
    )
  }
});

module.exports = Weather;
