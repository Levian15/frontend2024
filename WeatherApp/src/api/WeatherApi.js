export const getWeather = async (city)=>{
    const key = 'f29ca5c950204d89bdc171011243004'
    const url =`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no&lang=es`
    const response = await fetch(url)
    const weather = await response.json()

    //console.log(weather.current.condition.text)
    return weather
}