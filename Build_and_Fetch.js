async function getData(url){
    const response = await fetch(url, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
        // body: JSON.stringify(data)
    });
    return response.json    
}

// getData(url).then(data => {
//     console.log(data);
// });