const btn =document.getElementById('btn');
let cityname=document.getElementById('city-name');
const city=document.getElementById('city');
const infos=document.getElementsByClassName('infos')[0];
const container=document.getElementsByClassName('container')[0];
const country = document.getElementById('country');
const temprature =document.getElementById('temprature');
const min_temp =document.getElementById('min-temp');
const max_temp =document.getElementById('max-temp');
const humidity =document.getElementById('humidity');
const speed = document.getElementById('speed');
const error_pera =document.getElementsByClassName('error-pera')[0];
const discription =document.getElementById('discription');
const sunrise=document.getElementById('sunrise');
const sunset=document.getElementById('sunset');
const first_hours=document.getElementById('first-hours');
const second_hour=document.getElementById('second-hour');
const  third_hour=document.getElementById('third-hour');
const  four_hour=document.getElementById('four-hour');
const  five_hour=document.getElementById('five-hour');
const hour_temp_1=document.getElementById('hour-temp-1');
const hour_temp_2=document.getElementById('hour-temp-2');
const hour_temp_3=document.getElementById('hour-temp-3');
const hour_temp_4=document.getElementById('hour-temp-4');
const hour_temp_5=document.getElementById('hour-temp-5');
const hour_weat_1=document.getElementById('hour-weat-1');
const hour_weat_2=document.getElementById('hour-weat-2');
const hour_weat_3=document.getElementById('hour-weat-3');
const hour_weat_4=document.getElementById('hour-weat-4');
const hour_weat_5=document.getElementById('hour-weat-5');
const windy_1=document.getElementById('windy-1');
const windy_2=document.getElementById('windy-2');
const windy_3=document.getElementById('windy-3');
const windy_4=document.getElementById('windy-4');
const windy_5=document.getElementById('windy-5');
const contains=document.getElementById('data_hide');
let weather_icon=document.getElementById('image');

const date = new Date();
const day= date.getDay();
const year =date.getFullYear();
const month =date.getMonth();
let d;
let y;
const currenydate =date.getDate();
switch(day){
    case 0: d="Sunday"
    break;
    case 1: d="Monday"
    break;
    case 2: d="Tuesday"
    break;
    case 3: d="Wednesday"
    break;
    case 4: d="Thursday"
    break;
    case 5: d="Friday"
    break;
    case 6: d="Saturday"
    break;
}
switch (month){
  case 0 : y="Jan";
  break;
  case 1 : y="Feb";
  break;
  case 2 : y="Mar";
  break;
  case 3 : y="Apr";
  break;
  case 4 : y="May";
  break;
  case 5 : y="June";
  break;
  case 6 : y="July";
  break;
  case 7 : y="Aug";
  break;
  case 8 : y="Sept";
  break;
  case 9 : y="Oct";
  break;
  case 10 : y="Nov";
  break;
  case 11 : y="Dec";
  break;
}
const getInfo =async (even)=>{
    even.preventDefault();
   
  let cityval=cityname.value;
   if(cityval === ""){
    contains.style.display='none';
    infos.style.display='block';
  error_pera.innerText="city name required."
   }else{
    try{
        infos.style.display='none';
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=f7a1510de954c901488c5c25faffafe1&units=metric`;
        const response= await fetch(url);
        const data =await response.json();
        infos.style.display='none';
        contains.style.display='block';
        
        console.log(data);
        city.innerText =data.name;     
        country.innerText=`${data.sys.country}  ${currenydate} ${y} ${year} ${d}`;
        temprature.innerHTML =`${data.main.temp}<sup> o</sup>C ${data.weather[0].main}`;
        min_temp.innerHTML =`${data.main.temp_min}<sup style="background:none">o</sup>C`;
        max_temp.innerHTML =`${data.main.temp_max}<sup style="background:none">o</sup>C`;
        humidity.innerHTML=`${data.main.humidity}<sup style="background:none">o</sup>C`;
        speed.innerHTML=`${data.wind.speed}<sup style="background:none"></sup> m/s`;
        discription.innerHTML=`${data.weather[0].description}<sup style="background:none"></sup>`;
        sunrise.innerText=data.sys.sunrise;
        sunset.innerText=data.sys.sunset;
        let temp=data.weather[0].main;
        
        console.log(temp);
        if( temp == "Clouds"){
           weather_icon.innerHTML=`<i class="fa-solid fa-cloud icons1"></i>`;
        }
        else if(temp == "Clear"){
            weather_icon.innerHTML=`<i class="fa-solid fa-sun icons"></i>`;
        }
        else if(temp == "Snow"){
            weather_icon.innerHTML=`<i class="fa-solid fa-cloud-showers-heavy icons1"></i>`;
        }
        else if (temp == "Haze"){
            weather_icon.innerHTML=`<i class="fa-solid fa-cloud-sun-rain icons1"></i>`;
        }
        else if (temp == "Rain"){
            weather_icon.innerHTML=`<i class="fa-solid fa-cloud-rain icons1"></i>`;
        }
       let url1=`https://api.openweathermap.org/data/2.5/forecast?q=${cityval}&appid=f7a1510de954c901488c5c25faffafe1&units=metric`;
     let response1 = await fetch(url1);
     let data1= await response1.json();
     console.log(data1);
     first_hours.innerHTML=`${data1.list[0].dt_txt}`;
     second_hour.innerHTML=`${data1.list[1].dt_txt}`;
     third_hour.innerHTML=`${data1.list[2].dt_txt}`;
     four_hour.innerHTML=`${data1.list[3].dt_txt}`;
     five_hour.innerHTML=`${data1.list[4].dt_txt}`;
     hour_temp_1.innerHTML=`${data1.list[0].main.temp}<sup style="background:none">o</sup>c <i class="fa-solid fa-temperature-low"></i>`;
     hour_temp_2.innerHTML=`${data1.list[1].main.temp}<sup style="background:none">o</sup>c <i class="fa-solid fa-temperature-low"></i>`;
     hour_temp_3.innerHTML=`${data1.list[2].main.temp}<sup style="background:none">o</sup>c <i class="fa-solid fa-temperature-low"></i>`;
     hour_temp_4.innerHTML=`${data1.list[3].main.temp}<sup style="background:none">o</sup>c <i class="fa-solid fa-temperature-low"></i>`;
     hour_temp_5.innerHTML=`${data1.list[4].main.temp}<sup style="background:none">o</sup>c <i class="fa-solid fa-temperature-low"></i>`;
     hour_weat_1.innerHTML=`${data1.list[0].weather[0].main}<i class="fa-solid fa-cloud"></i>`;
     hour_weat_2.innerHTML=`${data1.list[1].weather[0].main}<i class="fa-solid fa-cloud"></i>`;
     hour_weat_3.innerHTML=`${data1.list[2].weather[0].main}<i class="fa-solid fa-cloud"></i>`;
     hour_weat_4.innerHTML=`${data1.list[3].weather[0].main}<i class="fa-solid fa-cloud"></i>`;
     hour_weat_5.innerHTML=`${data1.list[4].weather[0].main}<i class="fa-solid fa-cloud"></i>`;
     windy_1.innerHTML=`${data1.list[0].wind.speed}<sup style="background:none">o</sup>c <i class="fa-solid fa-wind"></i>`;
     windy_2.innerHTML=`${data1.list[1].wind.speed}<sup style="background:none">o</sup>c <i class="fa-solid fa-wind"></i>`;
     windy_3.innerHTML=`${data1.list[2].wind.speed}<sup style="background:none">o</sup>c <i class="fa-solid fa-wind"></i>`;
     windy_4.innerHTML=`${data1.list[3].wind.speed}<sup style="background:none">o</sup>c <i class="fa-solid fa-wind"></i>`;
     windy_5.innerHTML=`${data1.list[4].wind.speed}<sup style="background:none">o</sup>c <i class="fa-solid fa-wind"></i>`;
    }
   catch{
    contains.style.display='none';
    infos.style.display='block';
    error_pera.innerText="please! enter correct city name"
   }
   }
}
btn.addEventListener('click', getInfo);