document.addEventListener("DOMContentLoaded", () => {
    const articles = JSON.parse(localStorage.getItem("articles"));
    const selectedArticleIndex = localStorage.getItem("selectedArticleIndex");
    const article = articles[selectedArticleIndex];
  
    if (article) {
      document.getElementById("news-image").src = article.urlToImage || "no.png";
      document.getElementById("news-title").textContent = article.title;
      document.getElementById("news-description").textContent =
        article.description || "No description available.";
  
      const readMoreButton = document.getElementById("read-more-button");
      if (article.url) {
        readMoreButton.href = article.url;
      } else {
        readMoreButton.textContent = "No additional information available.";
        readMoreButton.classList.add("disabled");
      }
    } else {
      document.body.innerHTML =
        "<p>Article not found. Please return to the home page.</p>";
    }
  });
  