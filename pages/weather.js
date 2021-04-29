const currentDayDOM = document.getElementById("currentDay");
const API_KEY = "3d276dd0248a8f6d4a15500dc0dec11a";

function GetDay() {
  const d = new Date();
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  const weekDayName = weekday[d.getDay()];
  return weekDayName;
}
async function getData() {
  const locationResult = window.location.search;
  city = locationResult.split("=")[1];
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&units=metric&APPID=${API_KEY}`;
  const response = await fetch(url);
  data = await response.json();

  const data2 = {
    temp: data.list[0].main.temp,
    country: data.city.country,
    city: data.city.name,
    week: data.list,
    humidity: data.list[0].main.humidity,
    days: [
      data.list[0],
      data.list[8],
      data.list[16],
      data.list[24],
      data.list[32],
    ],
    icon: data.list[0].weather[0].icon,
    description: data.list[0].weather[0].description,
  };
  console.log({ data2 });
  const result = data2.days.map(
    (day) =>
      `
  <div class="row list_element">
  <span class="list_item">${day.dt_txt.substring(0, 10)}</span>
  <span class="list_item">${day.main.temp_min}</span>
  <span class="list_item">${day.main.temp_max}</span>
  <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
  </div>
  `
  );
  const html = `
    <div class="currentday_container row">
    <div class="currentday_informations" >
    <h4>${data2.city}</h4>
   <div className="row">
   <span className="font-weight-bold">${GetDay()}</span>
   <span className="text-capitalize">${data2.description}</span>
  
    </div> 
    <span>Humidity: ${data2.humidity}%</span> 
    </div>
    <div class="icon_container">  
    <img class="icon_weather" src="http://openweathermap.org/img/wn/${
      data2.icon
    }@2x.png" alt="weather_icon" >
    <span class="currentday_temp font-weight-bold">
    ${data2.temp}
    </span>
    </div>
    </div>
   <div> 
    `;
  currentDayDOM.innerHTML = html;
  const listDOM = document.getElementById("list");
  result.forEach(
    (listItem) => (listDOM.innerHTML = listDOM.innerHTML + listItem)
  );
}
