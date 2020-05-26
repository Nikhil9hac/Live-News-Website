console.log("hello oooooo")

newsAccordion = document.getElementById('newsAccordin');

const xhr = new XMLHttpRequest();
const url=
"Here u shud create ur own news api key if u r not able to use use plugin and add the link here";
xhr.open('GET',url , true);
xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHTML="";
        articles.forEach(function(element,index){
            if(index==10){
                return;
            }
            
            //console.log(element,index);
            let news = `
                    <div class="my-3 mx-3 card" style="width: 22rem;border:3px solid rgb(1, 63, 85);border-radius:11px;box-shadow: 5px 5px 6px 4px #00334d;">
        <img src="${element['urlToImage']}" class="card-img-top" height="300px" alt="...">
        <div class="card-body" style="background:  #cceeff;color:#003d66">
            <h5 class="card-title"><b>${element["title"]}</b></h5>
            <p class="card-text">${element["content"]}</p>
            <a href=${element['url']} target="_blank" class="btn btn-info">Read more</a>
        </div>
        
        </div>`;
            newsHTML+=news;
         });
        newsAccordion.innerHTML=newsHTML;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send();

















































//Create your own api id;