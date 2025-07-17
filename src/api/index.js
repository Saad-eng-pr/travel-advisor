import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data : { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, 
            {params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_RAPID_API_TRAVEL_ADVISOR_KEY,
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }}
        );

        return data; 
    } catch (error) {
        console.log(error);
    }
}

export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather',
            {params: {
                lat: lat,
                lon: lng,
                appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
            }}
        );

        return data;
    } catch (error) {
        console.log(error);
    }
}