

//start writing your code here
	//create your variables
	// added a click event listener


// It will get the data from the API if the response is ok otherwise will throw an error
async function weather(city) {
    // Clear the error message when making a new request
    

    try {
        const apiKey = '107e9ea76e4810e528542eb72b27f7a7';
        const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
        const finalURL = apiURL + `&q=${city}&appid=${apiKey}`;
        const request = new Request(finalURL);
        const response = await fetch(request);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parsing the API response into JSON format
        const WeatherObjText = await response.text();
        const WeatherObj = JSON.parse(WeatherObjText);

        console.log(WeatherObj);

        // Call the functions inside the try block
       
    } catch (error) {
        // Handle the error, and display a message
       
        
    }
}

// weather();



// Changes the temperature, place, humidity, wind speed
function weatherChanger(obj) {

	
    Humidity.innerHTML = `<i class="bx bx-water"></i><div class="more-info Humdity">${obj.main.humidity}% Humidity</div>`;
    windSpeed.innerHTML = `<i class="bx bx-wind"></i><div class="more-info wind">${obj.wind.speed} km/h Wind Speed</div>`;
}

// Changes the icon
const iconChanger = (obj) => {
    const newIcon = obj.weather[0].icon;
    DivIcon.innerHTML = `<img id="img" src="https://openweathermap.org/img/wn/${newIcon}.png" />`;
   
};
