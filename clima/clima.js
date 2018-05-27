const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&units=metric&appid=0c5f26b34fc85b62aac5d389ba1ed416');

    return resp.data.main.temp;
}

module.exports = {
    getClima
}