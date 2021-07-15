window.onload = fetch("/api/test",{
    method: "get",
    headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`
    }
}).then(res => window.location = res.url).catch(err => console.log(err))


console.log("fir")