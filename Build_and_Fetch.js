async function getData(url){
    const response = await fetch(url, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
        mode: "cors",
        //body: JSON.stringify(data)
    });
    return response.json()    
}
function get(){
    getData("https://gorest.co.in/public/v1/users").then(data => {
    console.log(data);
});
}
async function postData(url, data){
    const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        mode: "cors",
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit 
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data)
});
    return response.json()
}
function post(){
    postData("https://reqres.in/api/users", {
            "name": "morpheus",
            "job": "leader"
      }).then(data => {
    console.log(data);
    });
}
async function putData(url, data){
    const response = await fetch(url, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        mode: "cors",
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit 
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data)
    });
    return response.json()
}
function put(){
    putData("https://reqres.in/api/users/2",{
        "name": "morpheus",
        "job": "zion resident"
    }).then(data => {
        console.log(data);
    });
}
    async function deleteData(url){
        const response = await fetch(url,{
         method: "DELETE",
         headers: {"Content-Type": "application/json"},
         mode: "cors",
        });
     return response
    };

function delete_html(){
    deleteData("https://reqres.in/api/users/2").then(data => {
        console.log(data);
    });
}     