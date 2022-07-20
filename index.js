console.log("news project");
//  37683c7834934417be4aef765e316e6b
//https://newsapi.org/v2/top-headlines?country=in&apiKey=37683c7834934417be4aef765e316e6b

//initialise the news api parameters
let country = "in";
let apiKey = "37683c7834934417be4aef765e316e6b";

// Grab the news container
let newsAccordian = document.getElementById("newsAccordian");

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    // console.log(articles);
    let newsHtml = " ";
    articles.forEach(function (element, index) {
      // console.log(articles[news]);

      let news = `<div class="accordion" id="newsAccordian">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}"
                        aria-expanded="true"
                        aria-controls="collapse${index}"
                    >
                     <b>Breaking News :${index + 1} </b> &nbsp;
                     ${element["title"]} 
                    </button>
                    </h2>
                    <div
                    id="collapse${index}"
                    class="collapse"
                    aria-labelledby="heading${index}"
                    data-bs-parent="#newsAccordion">
                    <div class="accordion-body ">
                        ${element["description"]}.<a href="${
        element["url"]
      }" target="_blank">Read More</a>
                    </div>
                    </div>
                </div>
                </div> <br> `;
      newsHtml += news;
    });
    newsAccordian.innerHTML = newsHtml;
  } else {
    console.log("EROOR DETECTED");
  }
};

xhr.send();
//
