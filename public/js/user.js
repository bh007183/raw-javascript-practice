fetch("/userdata",{
    headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
    }
}).then(res => console.log(res))