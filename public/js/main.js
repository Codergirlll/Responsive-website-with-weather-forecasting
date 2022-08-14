const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name =document.getElementById('city_name');
const temp = document.getElementById('temp');
const Status = document.getElementById('status');
const dataHide = document.querySelector('.middle-layer')

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal =cityName.value;

    if( cityVal=== ""){
        city_name.innerText = `Plz write the city name before search`;
        dataHide.classList.add('data_hide')
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=04927ec59e888cbb8674de3aba900e9c&units=metric`
            const res = await fetch(url);
            const data = await res.json();
            const arrData = [data];

            city_name.innerText =`${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;

            const temp_Status= arrData[0].weather[0].main;
            //console.log(Status);
            
        if(temp_Status == "Clear"){
            Status.innerHTML = "<i class='fas fa-sun' style='color: rgb(203, 121, 121);'></i>";
        } else if(temp_Status == "Clouds"){
            Status.innerHTML = "<i class='fas fa-cloud' style='color: rgb(203, 121, 121);'></i>";
        }else if(temp_Status == "Rain"){
            Status.innerHTML = "<i class='fas fa-cloud-rain' style='color: rgb(203, 121, 121);'></i>";
        } else{
          
            Status.innerHTML = "<i class='fas fa-cloud' style='color: rgb(203, 121, 121);'></i>";
        }
        dataHide.classList.remove('data_hide')
         }
        
        catch{
            city_name.innerHTML = `Plz enter the correct city name before search`
            dataHide.classList.add('data_hide')
        }
    }
};

submitBtn.addEventListener("click", getInfo)