// 

console.log("inside index.js");

let apiKey=`7ccf3946f9c943bc95a769d0aa38c56e`;




let newsAccordion=document.getElementById('newsAccordion');

const xhr=new XMLHttpRequest();

xhr.open('GET',`http://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,true);

xhr.onload=function(){
    if(this.status===200){
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        let newsHtml="";
        articles.forEach(function(element,index) {
            
        let news =`<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapse${index}"><b>Breaking News- ${index+1}</b>
                                       ${element["title"]}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">
                                        <div class="card-body">
                                        ${element["content"]}.<a href="${element['url']}" target="_blank">Read More here</a>
                                        </div>
                            </div>
                    </div>`
                    newsHtml+=news;
                });
        newsAccordion.innerHTML=newsHtml;
    }
    else{
        console.log("Sorry some error occured");
    }
}

xhr.send();

