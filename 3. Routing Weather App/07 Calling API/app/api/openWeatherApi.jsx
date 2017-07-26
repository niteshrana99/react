var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3bfe2aac97b1416f2b11b4649298b846&units=imperial';
//http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial
module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location)
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
         return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message)
            } else {
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message)
        })
            
        }
}

//opem weather uses some other type of syntax so if u pass 'jhjhj' as city name it is not gonna return 404 error so we need to pass some edge cases in success function itself.