const currentDayDOM = document.getElementById("currentDay");

async function getData() {
  const url = `http://localhost:3000/weather`;
  const response = await fetch(url);
  const weatherTable = await response.json();
  console.log(weatherTable);

  const result = weatherTable.map(
    (element) =>
      `
  <div class="row list_element">

  <span class="list_item">${element.date.substring(0, 10)}</span>
  <span class="list_item"> humidity : ${element.humidity}</span>

  <span class="list_item">   ${element.minTemp}</span>
  <span class="list_item"> ${element.maxTemp}</span>
  <span class="list_item">${element.cloud}</span> 

  </div>
  `
  );
  const listDOM = document.getElementById("list");
  result.forEach(
    (listItem) => (listDOM.innerHTML = listDOM.innerHTML + listItem)
  );
}
