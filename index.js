let info = document.querySelector('.info');
let unit = document.querySelector('.unit');
let unit1 = document.querySelector('.unit1');
let unit2 = document.querySelector('.unit2');
let btn = document.querySelector('.btn');
let btn1 = document.querySelector('.btn1');

// According to Country
btn.onclick = () => {
    let input2 = document.getElementById("input").value;
    fetchWeather(input2).catch(error => {
        unit1.innerHTML = error.name;
    });;

};
let fetchWeather = async (input2) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input2}&appid=e1f58d5c1339bf9bd35fa5fec58f25be&units=metric`);

    const data = await response.json();
    console.log(data);

    unit.style.border = "2px dashed white";
    unit.style.transition = "smooth";
    unit1.innerHTML = " " + data.main.temp + "°C";
    unit2.innerHTML = "Feels Like " + ":" + " " + data.main.feels_like + "°C" +
        "<br/>" + "Humidity" + ": " + " " + data.main.humidity + "<br/>" + "Description" + ":" + " " + data.weather[0].description;

}
//According to User's Location
let fetchWeather2 = async (lat, lon) => {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e1f58d5c1339bf9bd35fa5fec58f25be&units=metric`);

    const data = await response.json();
    console.log(data);

    unit.style.border = "2px dashed white";
    unit.style.transition = "smooth";
    unit1.innerHTML = " " + data.main.temp + "°C";
    unit2.innerHTML = "Feels Like " + ":" + " " + data.main.feels_like + "°C" +
        "<br/>" + "Humidity" + ": " + " " + data.main.humidity + "<br/>" + "Description" + ":" + " " + data.weather[0].description;
    // unit1.style.background = "white";
    // unit1.style.borderRadius = "10px";
}

btn1.onclick = () => {
    // Geolocation API

    let a = navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        let vi = pos.coords;
        let lat = vi.latitude;
        let lon = vi.longitude;

        fetchWeather2(lat, lon).catch(error => {
            unit1.innerHTML = error.name;
        });;
    }
    function error(err) {
        console.log(`Error is: ${err.message} `);
    }

};



