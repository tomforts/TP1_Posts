
<<<<<<<< HEAD:wwwroot/News/js/Posts_API.js
class Posts_API {
    //ici mettre le lien du serveur glitch.
    static API_URL() { return "http://localhost:5000/api/posts" };
========
class News_API {
    static API_URL() { return "http://localhost:5000/api/news" };
>>>>>>>> Luciano:wwwroot/News/js/News_API.js
    static initHttpState() {
        this.currentHttpError = "";
        this.currentStatus = 0;
        this.error = false;
    }
    static setHttpErrorState(xhr) {
        if (xhr.responseJSON)
            this.currentHttpError = xhr.responseJSON.error_description;
        else
            this.currentHttpError = xhr.statusText == 'error' ? "Service introuvable" : xhr.statusText;
        this.currentStatus = xhr.status;
        this.error = true;
    }
    static async HEAD() {
<<<<<<<< HEAD:wwwroot/News/js/Posts_API.js
        Posts_API.initHttpState();
========
        News_API.initHttpState();
>>>>>>>> Luciano:wwwroot/News/js/News_API.js
        return new Promise(resolve => {
            $.ajax({
                url: this.API_URL(),
                type: 'HEAD',
                contentType: 'text/plain',
                complete: data => { resolve(data.getResponseHeader('ETag')); },
<<<<<<<< HEAD:wwwroot/News/js/Posts_API.js
                error: (xhr) => { Posts_API.setHttpErrorState(xhr); resolve(null); }
========
                error: (xhr) => { News_API.setHttpErrorState(xhr); resolve(null); }
>>>>>>>> Luciano:wwwroot/News/js/News_API.js
            });
        });
    }
    static async Get(id = null) {
<<<<<<<< HEAD:wwwroot/News/js/Posts_API.js
        Posts_API.initHttpState();
        return new Promise(resolve => {
            $.ajax({
                url: this.API_URL() + (id != null ? "/" + id : ""),
                complete: data => { resolve({ ETag: data.getResponseHeader('ETag'), data: data.responseJSON }); },
                error: (xhr) => { Posts_API.setHttpErrorState(xhr); resolve(null); }
========
        News_API.initHttpState();
        return new Promise(resolve => {
            $.ajax({
                url: this.API_URL() + (id != null ? "/" + id : ""),
                complete: data => {  resolve({ETag:data.getResponseHeader('ETag'), data:data.responseJSON }); },
                error: (xhr) => { News_API.setHttpErrorState(xhr); resolve(null); }
>>>>>>>> Luciano:wwwroot/News/js/News_API.js
            });
        });
    }

    static async GetQuery(queryString = "") {
<<<<<<<< HEAD:wwwroot/News/js/Posts_API.js
        Posts_API.initHttpState();
========
        News_API.initHttpState();
>>>>>>>> Luciano:wwwroot/News/js/News_API.js
        return new Promise(resolve => {
            $.ajax({
                url: this.API_URL() + queryString,
                complete: data => {
                    resolve({ ETag: data.getResponseHeader('ETag'), data: data.responseJSON });
                },
                error: (xhr) => {
<<<<<<<< HEAD:wwwroot/News/js/Posts_API.js
                    Posts_API.setHttpErrorState(xhr); resolve(null);
========
                    News_API.setHttpErrorState(xhr); resolve(null);
>>>>>>>> Luciano:wwwroot/News/js/News_API.js
                }
            });
        });
    }

    static async Save(data, create = true) {
<<<<<<<< HEAD:wwwroot/News/js/Posts_API.js
        Posts_API.initHttpState();
========
        News_API.initHttpState();
>>>>>>>> Luciano:wwwroot/News/js/News_API.js
        return new Promise(resolve => {
            $.ajax({
                url: create ? this.API_URL() :  this.API_URL() + "/" + data.Id,
                type: create ? "POST" : "PUT",
                contentType: 'application/json',
                data: JSON.stringify(data),
<<<<<<<< HEAD:wwwroot/News/js/Posts_API.js
                success: (data) => { resolve(data); },
                error: (xhr) => { Posts_API.setHttpErrorState(xhr); resolve(null); }
========
                success: (/*data*/) => { resolve(true); },
                error: (xhr) => { News_API.setHttpErrorState(xhr); resolve(null); }
>>>>>>>> Luciano:wwwroot/News/js/News_API.js
            });
        });
    }
    // static async Delete(id) {
    //     News_API.initHttpState();
    //     return new Promise(resolve => {
    //         $.ajax({
    //             url: this.API_URL() + "/" + id,
    //             type: "DELETE",
    //             success: () => { resolve(true); },
    //             error: (xhr) => { News_API.setHttpErrorState(xhr); resolve(null); }
    //         });
    //     });
    // }

    static async Delete(id) {
        return new Promise(resolve => {
            $.ajax({
                url: this.API_URL() + "/" + id,
                type: "DELETE",
                complete: () => {
<<<<<<<< HEAD:wwwroot/News/js/Posts_API.js
                    Posts_API.initHttpState();
                    resolve(true);
                },
                error: (xhr) => {
                    Posts_API.setHttpErrorState(xhr); resolve(null);
========
                    News_API.initHttpState();
                    resolve(true);
                },
                error: (xhr) => {
                    News_API.setHttpErrorState(xhr); resolve(null);
>>>>>>>> Luciano:wwwroot/News/js/News_API.js
                }
            });
        });
    }
}