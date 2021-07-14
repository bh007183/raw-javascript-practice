class GetImages{
    constructor(url, method, searchString){
        this.url = url;
        this.method = method,
        this.searchString = searchString
    }
    
    async fetchRequest(){
        let data;
        await fetch(this.url,{
            method: this.method,

        }).then(function(response){
            console.log(response)

        } )
    }
}