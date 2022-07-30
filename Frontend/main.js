window.addEventListener('DOMContentLoaded', (Event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounter001.azurewebsites.net/api/GetResumeCounter?code=s9XRyJxBeLQTBscv-DyqB3paxdQKZ-wWHHFVsMfJtPdpAzFu8baMEw==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(Response => {
        return Response.json()
    }).then(Response =>{
        console.log("Website called funciton API.");
        count = Response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}