const apiKey = "c879b582b4b64bb5b1f675cf5c4b3663";
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === "ok") {
      const articles = data.articles;
      const newsGrid = document.getElementById("news-grid");

      articles.forEach((article, index) => {
        const newsCard = `
                <div class="col-md-4">
                  <div class="card news-card" onclick="viewDetail(${index})">
                    <img
                      src="${article.urlToImage || "no.png"}"
                      class="card-img-top"
                      alt="${article.title}"
                    />
                    <div class="card-body">
                      <h5 class="card-title">${article.title}</h5>
                      <p class="card-text">${
                        article.description || "No description available."
                      }</p>
                    </div>
                  </div>
                </div>
              `;
        newsGrid.innerHTML += newsCard;
      });

      
      localStorage.setItem("articles", JSON.stringify(articles));
    } else {
      console.error("Error fetching news:", data.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
  const username = currentUser.name; 
  document.getElementById("match").textContent = `Latest News, Just for ${username}`;
} else {

  document.getElementById("match").textContent = `Latest News`;
  
}


function viewDetail(index) {
  localStorage.setItem("selectedArticleIndex", index);
  window.location.href = "../detailPage/newsDetail.html";
}

fetchNews();
