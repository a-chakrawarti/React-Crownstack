import React from 'react';

// look into how to fetch data and populate the DOM with data from it. using state on class component or hooks on functional to re-render the component
// promise is fullfilled. Use map array method to go through the list and take the value as well as index to update the list in the DOM.

// Note: make the main function Asynchronous and try AGAIN!
function RenderList() {
    var data;
    function fetchData() {
        async function getData() {
            const url = 'https://api.github.com/users';
            let response = await fetch(url);
            data = await response.json();
            return data;
        }
        getData();
        return setTimeout(()=>console.log(data), 1500);
    }

    fetchData();
    console.log(data);

    return (
        <div>
        <h3>Rendering List fetched from https://api.github.com/users</h3>
        <ul></ul>
        </div>
    )
}

export default RenderList;