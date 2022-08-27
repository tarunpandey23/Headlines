console.log("everything is fine");
//95854c9a385442aba78d3202773d7adb     (api)




let news = document.getElementById('news');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=95854c9a385442aba78d3202773d7adb', true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        //console.log(articles);
      
        let newsHtml='';
        articles.forEach(function(element,index){
    let somenews = `
    <div class="news-detail">
        <div class="news-card-heading">
                <h2><span class="breaking-news"> ${
              index + 1
            }:</span> ${element.title} </h2> </div>
                <div class="news-card-image"> 
                     <img src=' ${
                       element.urlToImage
                     }' style="height: 200px; width:300px"> 
                </div>
                <br><br>
                <p>${element.content}</p>
                <br>
                <br>
               
                <button class="card-button"> 
                   <a href="${
                     element.url
                   }" target="_blank">  Read more ... </a> 
                 </button>

               </div>
               <br>`;
newsHtml = newsHtml + somenews;
});
news.innerHTML = newsHtml;
} else {
console.log("some error occured!");
}
}
xhr.send();
