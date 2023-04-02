async function fetchweatherData(){
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=46e109505dea412a8aa65819232603&q=Pokhara");
    const data = await response.json();
    const cname = document.getElementById("cname")
    cname.innerHTML = data.location.name
    const condition = document.getElementById("condition");
    condition.innerHTML = data.current.condition.text
    const temp = document.getElementById("temp");
    temp.innerHTML = data.current.temp_c
    console.log(data)

}
fetchweatherData()


const myform = document.getElementById("form");
myform.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchfield = document.getElementById("search").value;
    console.log(searchfield)
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=46e109505dea412a8aa65819232603&q=${searchfield}`);
    const data = await response.json();
    const cname = document.getElementById("cname")
    cname.innerHTML = data.location.name
    const condition = document.getElementById("condition");
    condition.innerHTML = data.current.condition.text
    const temp = document.getElementById("temp");
    temp.innerHTML = data.current.temp_c
    console.log(data)


})


