const periodicRefreshPeriod = 10;
let categories = [];
let selectedCategory = "";
let currentETag = "";
let hold_Periodic_Refresh = false;
let pageManager;
let itemLayout;

let waiting = null;
let waitingGifTrigger = 2000;
function addWaitingGif() {
    clearTimeout(waiting);
    waiting = setTimeout(() => {
        $("#itemsPanel").append($("<div id='waitingGif' class='waitingGifcontainer'><img class='waitingGif' src='Loading_icon.gif' /></div>'"));
    }, waitingGifTrigger)
}
function removeWaitingGif() {
    clearTimeout(waiting);
    $("#waitingGif").remove();
}

Init_UI();

async function Init_UI() {
    itemLayout = {
        width: $("#sample").outerWidth(),
        height: $("#sample").outerHeight()
    };
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
    pageManager = new PageManager('scrollPanel', 'itemsPanel', itemLayout, renderPosts);
    compileCategories();
    $('#createPost').on("click", async function () {
        renderCreatePostForm();
    });
    $('#abort').on("click", async function () {
        showPosts()
=======
    pageManager = new PageManager('scrollPanel', 'itemsPanel', itemLayout, renderNews);
    compileCategories();
    $('#createNews').on("click", async function () {
        renderCreateNewsForm();
    });
    $('#abort').on("click", async function () {
        showNews()
>>>>>>> Luciano:wwwroot/News/js/appUI.js
    });
    $('#aboutCmd').on("click", function () {
        renderAbout();
    });
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
    showPosts();
    start_Periodic_Refresh();
}
function showPosts() {
    $("#actionTitle").text("Liste des nouvelles");
    $("#scrollPanel").show();
    $('#abort').hide();
    $('#postForm').hide();
    $('#aboutContainer').hide();
    $("#createPost").show();
    hold_Periodic_Refresh = false;
}
function hidePosts() {
    $("#scrollPanel").hide();
    $("#createPost").hide();
=======
    showNews();
    start_Periodic_Refresh();
}
function showNews() {
    $("#actionTitle").text("Liste de nouvelles");
    $("#scrollPanel").show();
    $('#abort').hide();
    $('#NewsForm').hide();
    $('#aboutContainer').hide();
    $("#createNews").show();
    hold_Periodic_Refresh = false;
}
function hideNews() {
    $("#scrollPanel").hide();
    $("#createNews").hide();
>>>>>>> Luciano:wwwroot/News/js/appUI.js
    $("#abort").show();
    hold_Periodic_Refresh = true;
}
function start_Periodic_Refresh() {
    setInterval(async () => {
        if (!hold_Periodic_Refresh) {
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
            let etag = await Posts_API.HEAD();
=======
            let etag = await News_API.HEAD();
>>>>>>> Luciano:wwwroot/News/js/appUI.js
            if (currentETag != etag) {
                currentETag = etag;
                await pageManager.update(false);
                compileCategories();
            }
        }
    },
        periodicRefreshPeriod * 1000);
}
function renderAbout() {
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
    hidePosts();
=======
    hideNews();
>>>>>>> Luciano:wwwroot/News/js/appUI.js
    $("#actionTitle").text("À propos...");
    $("#aboutContainer").show();
}
function updateDropDownMenu() {
    let DDMenu = $("#DDMenu");
    let selectClass = selectedCategory === "" ? "fa-check" : "fa-fw";
    DDMenu.empty();
    DDMenu.append($(`
        <div class="dropdown-item menuItemLayout" id="allCatCmd">
            <i class="menuIcon fa ${selectClass} mx-2"></i> Toutes les catégories
        </div>
        `));
    DDMenu.append($(`<div class="dropdown-divider"></div>`));
    categories.forEach(category => {
        selectClass = selectedCategory === category ? "fa-check" : "fa-fw";
        DDMenu.append($(`
            <div class="dropdown-item menuItemLayout category" id="allCatCmd">
                <i class="menuIcon fa ${selectClass} mx-2"></i> ${category}
            </div>
        `));
    })
    DDMenu.append($(`<div class="dropdown-divider"></div> `));
    DDMenu.append($(`
        <div class="dropdown-item menuItemLayout" id="aboutCmd">
            <i class="menuIcon fa fa-info-circle mx-2"></i> À propos...
        </div>
        `));
    $('#aboutCmd').on("click", function () {
        renderAbout();
    });
    $('#allCatCmd').on("click", function () {
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
        showPosts();
=======
        showNews();
>>>>>>> Luciano:wwwroot/News/js/appUI.js
        selectedCategory = "";
        updateDropDownMenu();
        pageManager.reset();
    });
    $('.category').on("click", function () {
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
        showPosts();
=======
        showNews();
>>>>>>> Luciano:wwwroot/News/js/appUI.js
        selectedCategory = $(this).text().trim();
        updateDropDownMenu();
        pageManager.reset();
    });
}
async function compileCategories() {
    categories = [];
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
    let response = await Posts_API.GetQuery("?fields=category&sort=category");
    if (!Posts_API.error) {
=======
    let response = await News_API.GetQuery("?fields=category&sort=category");
    if (!News_API.error) {
>>>>>>> Luciano:wwwroot/News/js/appUI.js
        let items = response.data;
        if (items != null) {
            items.forEach(item => {
                if (!categories.includes(item.Category))
                    categories.push(item.Category);
            })
            updateDropDownMenu(categories);
        }
    }
}
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
async function renderPosts(queryString) {
=======
async function renderNews(queryString) {
>>>>>>> Luciano:wwwroot/News/js/appUI.js
    let endOfData = false;
    queryString += "&sort=category";
    if (selectedCategory != "") queryString += "&category=" + selectedCategory;
    addWaitingGif();
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
    let response = await Posts_API.Get(queryString);
    if (!Posts_API.error) {
        currentETag = response.ETag;
        let Posts = response.data;
        if (Posts.length > 0) {
            Posts.forEach(Post => {
                $("#itemsPanel").append(renderPost(Post));
            });
            $(".editCmd").off();
            $(".editCmd").on("click", function () {
                renderEditPostForm($(this).attr("editPostId"));
            });
            $(".deleteCmd").off();
            $(".deleteCmd").on("click", function () {
                renderDeletePostForm($(this).attr("deletePostId"));
=======
    let response = await News_API.Get(queryString);
    if (!News_API.error) {
        currentETag = response.ETag;
        let News = response.data;
        if (News.length > 0) {
            News.forEach(News => {
                $("#itemsPanel").append(renderNews(News));
            });
            $(".editCmd").off();
            $(".editCmd").on("click", function () {
                renderEditNewsForm($(this).attr("editNewsId"));
            });
            $(".deleteCmd").off();
            $(".deleteCmd").on("click", function () {
                renderDeleteNewsForm($(this).attr("deleteNewsId"));
>>>>>>> Luciano:wwwroot/News/js/appUI.js
            });
        } else
            endOfData = true;
    } else {
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
        renderError(Posts_API.currentHttpError);
=======
        renderError(News_API.currentHttpError);
>>>>>>> Luciano:wwwroot/News/js/appUI.js
    }
    removeWaitingGif();
    return endOfData;
}

function renderError(message) {
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
    hidePosts();
=======
    hideNews();
>>>>>>> Luciano:wwwroot/News/js/appUI.js
    $("#actionTitle").text("Erreur du serveur...");
    $("#errorContainer").show();
    $("#errorContainer").append($(`<div>${message}</div>`));
}
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
function renderCreatePostForm() {
    renderPostForm();
}
async function renderEditPostForm(id) {
    addWaitingGif();
    let response = await Posts_API.Get(id)
    if (!Posts_API.error) {
        let Post = response.data;
        if (Post !== null)
            renderPostForm(Post);
        else
            renderError("Post introuvable!");
    } else {
        renderError(Posts_API.currentHttpError);
    }
    removeWaitingGif();
}
async function renderDeletePostForm(id) {
    hidePosts();
    $("#actionTitle").text("Retrait");
    $('#postForm').show();
    $('#postForm').empty();
    let response = await Posts_API.Get(id)
    if (!Posts_API.error) {
        let Post = response.data;
        if (Post !== null) {
            $("#postForm").append(`
        <div class="PostdeleteForm">
            <h4>Effacer la publication suivante?</h4>
            <br>
            <div class="PostRow" id=${Post.Id}">
                <div class="PostContainer noselect">
                    <div class="PostLayout">
                        <div class="Post">
                            <a href="" target="_blank"> ${Post.Category} </a>
                            <span class="PostTitle">${Post.Title}</span>
                        </div>
                        <span class="PostCategory">${Post.Category}</span>
                    </div>
                    <div class="PostCommandPanel">
                        <span class="editCmd cmdIcon fa fa-pencil" editPostId="${Post.Id}" title="Modifier ${Post.Title}"></span>
                        <span class="deleteCmd cmdIcon fa fa-trash" deletePostId="${Post.Id}" title="Effacer ${Post.Title}"></span>
=======
function renderCreateNewsForm() {
    renderNewsForm();
}
async function renderEditNewsForm(id) {
    addWaitingGif();
    let response = await News_API.Get(id)
    if (!News_API.error) {
        let News = response.data;
        if (News !== null)
            renderNewsForm(News);
        else
            renderError("Nouvelle introuvable!");
    } else {
        renderError(News_API.currentHttpError);
    }
    removeWaitingGif();
}
async function renderDeleteNewsForm(id) {
    hideNews();
    $("#actionTitle").text("Retrait");
    $('#newsForm').show();
    $('#newsForm').empty();
    let response = await News_API.Get(id)
    if (!News_API.error) {
        let News = response.data;
        let favicon = makeFavicon(News.Url);
        if (News !== null) {
            $("#newsForm").append(`
        <div class="NewsdeleteForm">
            <h4>Effacer la nouvelle suivante?</h4>
            <br>
            <div class="NewsRow" id=${News.Id}">
                <div class="NewsContainer noselect">
                    <div class="NewsLayout">
                        <div class="News">
                            <a href="${News.Url}" target="_blank"> ${favicon} </a>
                            <span class="NewsTitle">${News.Title}</span>
                        </div>
                        <span class="NewsCategory">${News.Category}</span>
                    </div>
                    <div class="NewsCommandPanel">
                        <span class="editCmd cmdIcon fa fa-pencil" editNewsId="${News.Id}" title="Modifier ${News.Title}"></span>
                        <span class="deleteCmd cmdIcon fa fa-trash" deleteNewsId="${News.Id}" title="Effacer ${News.Title}"></span>
>>>>>>> Luciano:wwwroot/News/js/appUI.js
                    </div>
                </div>
            </div>   
            <br>
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
            <input type="button" value="Effacer" id="deletePost" class="btn btn-primary">
            <input type="button" value="Annuler" id="cancel" class="btn btn-secondary">
        </div>    
        `);
            $('#deletePost').on("click", async function () {
                await Posts_API.Delete(Post.Id);
                if (!Posts_API.error) {
                    showPosts();
=======
            <input type="button" value="Effacer" id="deleteNews" class="btn btn-primary">
            <input type="button" value="Annuler" id="cancel" class="btn btn-secondary">
        </div>    
        `);
            $('#deleteNews').on("click", async function () {
                await News_API.Delete(News.Id);
                if (!News_API.error) {
                    showNews();
>>>>>>> Luciano:wwwroot/News/js/appUI.js
                    await pageManager.update(false);
                    compileCategories();
                }
                else {
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
                    console.log(Posts_API.currentHttpError)
=======
                    console.log(News_API.currentHttpError)
>>>>>>> Luciano:wwwroot/News/js/appUI.js
                    renderError("Une erreur est survenue!");
                }
            });
            $('#cancel').on("click", function () {
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
                showPosts();
            });

        } else {
            renderError("Post introuvable!");
        }
    } else
        renderError(Posts_API.currentHttpError);
=======
                showNews();
            });

        } else {
            renderError("Nouvelle introuvable!");
        }
    } else
        renderError(News_API.currentHttpError);
>>>>>>> Luciano:wwwroot/News/js/appUI.js
}
function getFormData($form) {
    const removeTag = new RegExp("(<[a-zA-Z0-9]+>)|(</[a-zA-Z0-9]+>)", "g");
    var jsonObject = {};
    $.each($form.serializeArray(), (index, control) => {
        jsonObject[control.name] = control.value.replace(removeTag, "");
    });
    return jsonObject;
}
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
function newPost() {
    Post = {};
    Post.Id = 0;
    Post.Title = "";
    Post.Text = "";
    Post.Category = "";
    Post.Creation = "";
    return Post;
}
function renderPostForm(Post = null) {
    hidePosts();
    let create = Post == null;
    if (create){
        Post = newPost();
        //ici pas sure que creation devrai etre cela.
        Post.Creation = Date.now();
        Post.Image = "images/no-image.png"
    }
    else
    $("#actionTitle").text(create ? "Création" : "Modification");
    $("#postForm").show();
    $("#postForm").empty();
    $("#postForm").append(`
        <form class="form" id="PostForm">
            <a href="" target="_blank" id="faviconLink" class="big-favicon" > ${Post.Category} </a>
            <br>
            <input type="hidden" name="Id" value="${Post.Id}"/>
=======
function newNews() {
    News = {};
    News.Id = 0;
    News.Title = "";
    News.Texte = "";
    News.Category = "";
    News.Image = "";
    News.Creation = Date.now();
    return News;
}
function renderNewsForm(News = null) {
    hideNews();
    let create = News == null;
    let favicon = `<div class="big-favicon"></div>`;
    if (create)
        News = newNews();
    else
        favicon = makeFavicon(News.Url, true);
    $("#actionTitle").text(create ? "Création" : "Modification");
    $("#newsForm").show();
    $("#newsForm").empty();
    $("#newsForm").append(`
        <form class="form" id="NewsForm">
            <input type="hidden" name="Id" value="${News.Id}"/>
>>>>>>> Luciano:wwwroot/News/js/appUI.js

            <label for="Title" class="form-label">Titre </label>
            <input 
                class="form-control Alpha"
                name="Title" 
                id="Title" 
                placeholder="Titre"
                required
                RequireMessage="Veuillez entrer un titre"
                InvalidMessage="Le titre comporte un caractère illégal"
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
                value="${Post.Title}"
            />
            <label for="Category" class="form-label">Category </label>
            <input
=======
                value="${News.Title}"
            />
            <label for="Text" class="form-label">Texte </label>
            <input 
                class="form-control"
                name="Text"
                id="Text"
                placeholder="Text"
                required
                value="${News.Texte}"
            />
            <label for="Category" class="form-label">Catégorie </label>
            <input 
>>>>>>> Luciano:wwwroot/News/js/appUI.js
                class="form-control"
                name="Category"
                id="Category"
                placeholder="Category"
                required
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
                value="${Post.Category}" 
=======
                value="${News.Category}"
            />
            <label for="Image" class="form-label">Image </label>
            <input 
                class="form-control"
                name="Image"
                id="Image"
                placeholder="Image"
                required
                value="${News.Image}"
>>>>>>> Luciano:wwwroot/News/js/appUI.js
            />
            <label for="Text" class="form-label">Text </label>
            <input 
                class="form-control"
                name="Text"
                id="Text"
                placeholder="Text"
                required
                value="${Post.Text}"
            />
    
           <label class="form-label">Image </label>
            <div   class='imageUploader' 
                   newImage='${create}' 
                   controlId='Image' 
                   imageSrc='${Post.Image}' 
                   waitingImage="Loading_icon.gif">
            </div>
            <br>
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
            <input type="submit" value="Enregistrer" id="savePost" class="btn btn-primary">
=======
            <input type="submit" value="Enregistrer" id="saveNews" class="btn btn-primary">
>>>>>>> Luciano:wwwroot/News/js/appUI.js
            <input type="button" value="Annuler" id="cancel" class="btn btn-secondary">
        </form>
    `);
    initFormValidation();
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
    $('#PostForm').on("submit", async function (event) {
        event.preventDefault();
        let Post = getFormData($("#PostForm"));
        Post = await Posts_API.Save(Post, create);
        if (!Posts_API.error) {
            showPosts();
            await pageManager.update(false);
            compileCategories();
            pageManager.scrollToElem(Post.Id);
=======
    $('#NewsForm').on("submit", async function (event) {
        event.preventDefault();
        let News = getFormData($("#NewsForm"));
        News = await News_API.Save(News, create);
        if (!News_API.error) {
            showNews();
            await pageManager.update(false);
            compileCategories();
            pageManager.scrollToElem(News.Id);
>>>>>>> Luciano:wwwroot/News/js/appUI.js
        }
        else
            renderError("Une erreur est survenue!");
    });
    $('#cancel').on("click", function () {
<<<<<<< HEAD:wwwroot/Posts/js/appUI.js
        showPosts();
    });
}
function renderPost(Post) {
    return $(`
     <div class="PostRow" id='${Post.Id}'>
        <div class="PostContainer noselect">
            <div class="PostLayout">
                <div class="Post">
                    <a href="" target="_blank"> ${Post.Category} </a>
                    <span class="PostTitle">${Post.Title}</span>
                    <span class"">${convertToFrenchDate(Post.Creation)}</span>
                </div>
                <span class="PostCategory">${Post.Category}</span>
            </div>
            <div class="PostCommandPanel">
                <span class="editCmd cmdIcon fa fa-pencil" editPostId="${Post.Id}" title="Modifier ${Post.Title}"></span>
                <span class="deleteCmd cmdIcon fa fa-trash" deletePostId="${Post.Id}" title="Effacer ${Post.Title}"></span>
=======
        showNews();
    });
}

//pas utile pour le tp
function makeFavicon(url, big = false) {
    // Utiliser l'API de google pour extraire le favicon du site pointé par url
    // retourne un élément div comportant le favicon en tant qu'image de fond
    ///////////////////////////////////////////////////////////////////////////
    if (url.slice(-1) != "/") url += "/";
    let faviconClass = "favicon";
    if (big) faviconClass = "big-favicon";
    url = "http://www.google.com/s2/favicons?sz=64&domain=" + url;
    return `<div class="${faviconClass}" style="background-image: url('${url}');"></div>`;
}
function renderNews(News) {
    let favicon = makeFavicon(News.Url);
    return $(`
     <div class="NewsRow" id='${News.Id}'>
        <div class="NewsContainer noselect">
            <div class="NewsLayout">
                <div class="News">
                    <a href="${News.Url}" target="_blank"> ${favicon} </a>
                    <span class="NewsTitle">${News.Title}</span>
                </div>
                <span class="NewsCategory">${News.Category}</span>
            </div>
            <div class="NewsCommandPanel">
                <span class="editCmd cmdIcon fa fa-pencil" editNewsId="${News.Id}" title="Modifier ${News.Title}"></span>
                <span class="deleteCmd cmdIcon fa fa-trash" deleteNewsId="${News.Id}" title="Effacer ${News.Title}"></span>
>>>>>>> Luciano:wwwroot/News/js/appUI.js
            </div>
        </div>
    </div>           
    `);
}

function convertToFrenchDate(numeric_date) {
    date = new Date(numeric_date);
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var opt_weekday = { weekday: 'long' };
    var weekday = toTitleCase(date.toLocaleDateString("fr-FR", opt_weekday));

    function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
    return weekday + " le " + date.toLocaleDateString("fr-FR", options) + " @ " + date.toLocaleTimeString("fr-FR");
}
