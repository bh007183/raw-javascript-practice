let state = {
    all: [],
    searchResults: [],
}

function setState(field, newData){
    switch (field) {
        case "all":
            state = {...state, all: newData }
            
            break;
        case "searchResults":
            state = {...state, searchResults: newData }
            
            break;
    }
  
}
function fetchCall(searchItem){
    fetch(`https://images-api.nasa.gov/search?q=${searchItem}`)
    .then(res => res.json())
    .then(data => setState("all", data.collection.items))
    .then(function(final){
        console.log(final)
        let foundationTag = document.querySelector("#startImageContain")
        for(let i = 0; i < 30; i++){
            let div = document.createElement('div')
            div.innerHTML =
        `<div class="card" style="width: 25rem; height: 30rem; background-color: black">
            <img src=${state.all[i].links[0].href} class="card-img-top imageStyle" alt="image${i}">
            <div class="card-body">
              <h5 class="card-title">${state.all[i].data[0].title}</h5>
              <p class="card-text">${state.all[i].data[0].description.substring(0,100)}</p>
            </div>
          </div>`
    
          foundationTag.appendChild(div)
        }
    })
    
    }
    fetchCall("moon")

    function onSearch(){
        
        document.querySelector("#startImageContain").innerHTML = ''
        fetchCall(document.querySelector("#searchInput").value)

    }

    function openLogin(){
        
        document.querySelector('#modal').removeAttribute("style")
        
    }

    // <a href="#" class="btn btn-primary">Go somewhere</a>
    

