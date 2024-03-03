
//Variables 

const temp_Id = document.getElementById('temp');
const date_Id = document.getElementById('date');
const content_Id = document.getElementById('content');
const zip_Code_Id = document.getElementById('zip');
const feeling_Id = document.getElementById('feelings');


// Create a new date instance dynamically with JS

let d = new Date();
let new_Date = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', PerformAction);

function PerformAction(e) {
    e.preventDefault();

    // Callback of fetchData function

    fetchData().then

        // End callback of fetchData function

        //Post data 

        (async (temp) => {
            const postData = await fetch('/add', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    temp: temp.main.temp,
                    date: new_Date,
                    content: feeling_Id.value
                })
            })
            const response = await postData.json();
            return response;

        }).then

        //End Post data 

        //Update the UI

        (async () => {
            const Data = await fetch('/all');
            const response = await Data.json();
            date_Id.innerHTML = response.date;
            temp_Id.innerHTML = response.temp;
            content_Id.innerHTML = response.content;
        })

    //End update the UI
}

// Fetch data from api

const fetchData = async () => {
    const fetch_Url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${zip_Code_Id.value}&appid=bc6428dd6ed5646df2437adf6dad63e3&units=imperial`);

    const response = await fetch_Url.json();
    return response;
}

// End fetch data from api
