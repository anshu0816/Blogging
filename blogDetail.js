const selectedBlog = JSON.parse(localStorage.getItem('selectedBlog'));

if (selectedBlog) {
  
  const blogContentSection = document.getElementById('blogContent');

  
  const blogContentHTML = `
    <h2>${selectedBlog.title}</h2>
    <p class="meta">${selectedBlog.date} | ${selectedBlog.category}</p>
    <p>${selectedBlog.description}</p>
    <img src="${selectedBlog.image}" alt="${selectedBlog.title}" style="max-width: 100%; height: auto; margin-bottom: 20px;">
  `;

  blogContentSection.innerHTML = blogContentHTML;
} else {
  window.location.href = 'index.html'; 
}
