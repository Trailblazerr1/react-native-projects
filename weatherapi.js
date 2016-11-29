const initurl = "http://api.openweathermap.org/data/2.5/weather?appid=a8e0949c844a3e2e0f28426ce2c99db4" 

export const fetchdata = (lat,lon) => {
    const url = initurl+"&lat=" +lat+"&lon="+lon+"&units=metric"
    console.log(url)

//method then is used to do work after promise
//of fetch, here pass it a fun
 return fetch(url)
        .then(res => res.json())
//we keep brackets around return obj
// so to avoid confusion with mustache braces
        .then(json => ({
            temp: json.main.temp,
            weather: json.weather[0].main
        }) )
}