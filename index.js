/*let articles;
//let searchNewsHtml = "";
//let searchSomeNews = "";
//console.log("everything is fine"); 
//95854c9a385442aba78d3202773d7adb (api) 
let news = document.getElementById('news');
//let searchInput= document.getElementById('searchInput');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=95854c9a385442aba78d3202773d7adb', true);
xhr.onprogress = function () { document.getElementById('progress-report').innerHTML = 'loading...'; }
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        articles = json.articles;
        
        let newsHtml = '';
        articles.forEach(function (element, index) {
           
            let somenews = `
            <div class="news-detail">
	            <div class="news-card-heading">
		                <h2><span class="breaking-news">Breaking News ${index + 1}:</span> ${element.title} </h2> </div>
	                    <div class="news-card-image"> 
                             <img src=' ${element.urlToImage}' style="height: 200px; width:230px"> 
                        </div>
	                    <p>${element.content}</p>
                        <br>
                        <br>
                       
		                <button class="card-button"> 
                           <a href="${element.url}" target="_blank"> click to Read more </a> 
                         </button>
	
                       </div>
                       <br>`
            newsHtml = newsHtml + somenews;
        });
        news.innerHTML = newsHtml;
    } else {
        //document.getElementById('progress-report').innerHTML='some error occured or check your internet connection'; 
        console.log('some error occured!');
    }
}



    


xhr.send();


 function search(event) {
    
     news.classList.add('hide');
  
   let searchNewsHtml = "";
   let searchSomeNews = "";
   event.preventDefault();
    // articles.map((article, index) => {

     articles.forEach(function (article, index) {
        console.log(article);
        // if (articals.content && articles.content.includes('olympic')) {
            if(article.content&&article.content.includes('')){
                searchSomeNews =`

                     <div class="news-detail">
                         <div class="news-card-heading">
                                 <h2><span class="breaking-news">Breaking News ${index + 1}:</span> ${article.title} </h2> </div>
                                 <div class="news-card-image"> 
                                      <img src=' ${article.urlToImage}' style="height: 200px; width:230px"> 
                                 </div>
                                 <p>${article.content}</p>
                                  <br>
                               <br>

                              <button class="card-button"> 
                                    <a href="${article.url}" target="_blank"> click to Read more </a> 
                                  </button>
                         </div>
                                `
                               

                           searchNewsHtml=  searchNewsHtml+ searchSomeNews ;
                                console.log( searchNewsHtml);
      
   
         }
     });
     searchInput.innerHTML=searchNewsHtml;
    

 }*/

//  function search(event){
//      event.preventDefault();
//      news.classList.add('hide');
     

//      let searchInput= document.getElementById('search');
//      const xhr = new XMLHttpRequest();
//      xhr.open('GET','https://newsapi.org/v2/everything?q=tesla&from=2021-08-23&sortBy=publishedAt&apiKey=95854c9a385442aba78d3202773d7adb',true);
//      xhr.onload=function(){
//          if (this.status === 200) {

//              let json = JSON.parse(this.responseText);
//              articles = json.articles;
//              console.log(articles);
//              let searchNewsHtml = '';
//              articles.forEach(function (element, index) {
//                  let searchSomeNews = `
//                  <div class="news-detail">
//                      <div class="news-card-heading">
//                              <h2><span class="breaking-news">Breaking News ${index + 1}:</span> ${element.title} </h2> </div>
//                              <div class="news-card-image"> 
//                                   <img src=' ${element.urlToImage}' style="height: 200px; width:230px"> 
//                              </div>
//                              <p>${element.content}</p>
//                              <br>
//                              <br>
                           
//                              <button class="card-button"> 
//                                 <a href="${element.url}" target="_blank"> click to Read more </a> 
//                               </button>
        
//                             </div>
//                             <br>`
//                             searchNewsHtml =searchNewsHtml+ searchSomeNews;
//              });
//                         searchInput.innerHTML = searchNewsHtml;
//          }else{
//              console.log("some error occured");

//          }

//      }
//      xhr.send();
//  }



let articles;
let news = document.getElementById("news");
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=95854c9a385442aba78d3202773d7adb",
  true
);
xhr.onprogress = function () {
  document.getElementById("progress-report").innerHTML = "loading...";
};
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    articles = json.articles;
    console.log(articles)

    let newsHtml = "";
    articles.forEach(function (element, index) {
      let somenews = `
            <div class="news-detail">
            <br>
	            <div class="news-card-heading">
		                <h2><span class="breaking-news">${
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
                           }" target="_blank">Read more... </a> 
                         </button>
	
                       </div>
                       <br>`;
      newsHtml = newsHtml + somenews;
    });
    news.innerHTML = newsHtml;
  } else {
    document.getElementById('progress-report').innerHTML='some error occured or check your internet connection'; 
    console.log("some error occured!");
  }
};

xhr.send();

 function search(event) {
   let template = "";
   let updatedNewsHTML = "";
   event.preventDefault();
   const search_txt = event.target.children[0].value;
   articles.map((element, index) => {
     if (
       element.content &&
       element.content.toLowerCase().includes(search_txt.toLowerCase())
     ) {
       template = `
             <div class="news-detail">
             <div class="news-card-heading">
             <h2><span class="breaking-news">Breaking News ${
               index + 1
             }:</span> ${element.title} </h2> </div>
             <div class="news-card-image">
             <img src=' ${
               element.urlToImage
             }' style="height: 200px; width:330px;">
             </div>
             <p>${element.content}</p>
             <br>
             <br>
             <button class="card-button">
             <a href="${element.url}" target="_blank"> click to Read more </a>
             </button>
             </div>
             <br/>`;
       updatedNewsHTML += template;
     }
   });
   console.log(updatedNewsHTML);
   news.innerHTML = updatedNewsHTML;
 }
