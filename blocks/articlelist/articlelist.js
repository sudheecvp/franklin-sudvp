export default async function decorate(block) {
  const response = await fetch('/article-index.json');
  if (!response.ok) {
    return;
  }
  const rows = await response.json();
  let htmlContent = '<div class="article-list">';

  rows.data.forEach((article) => {
    htmlContent += `
    <div class="article-item">
          <a href="${article.path}">
            <img src="${article.image}" alt="${article.title}" class="article-image">
          </a>
          <h2 class="article-title">${article.title}</h2>
          <p class="article-description">${article.description}</p>
          <p class="article-last-modified">Last Modified: ${new Date(parseInt(article.lastModified) * 1000).toLocaleString()}</p>
    </div>
    `;
    });
    htmlContent += '</div>';

  block.innerHTML = htmlContent;
}