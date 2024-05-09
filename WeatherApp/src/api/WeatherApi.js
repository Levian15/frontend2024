export const getWeather = async ()=>{
    const key = 'f29ca5c950204d89bdc171011243004'
    const url =`http://api.weatherapi.com/v1/current.json?key=${key}&q=Tuxtepec&aqi=no`
    const response = await fetch(url)
    const weather = await response.json()

    //console.log(weather.current.condition.text)
    return weather
}