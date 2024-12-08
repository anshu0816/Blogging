const blogs = [
  {
    title: "10 Proven Tips for a Healthier Heart and Longevity",
    category: "health",
    date: "2024-02-20",
    description: "Proven and effective ways to maintain your heart's health and promote long-term wellness.",
    image: "heart_health.jpeg"
  },
  {
    title: "Mastering Online Learning: Tips for Success",
    category: "education",
    date: "2024-01-15",
    description: "Practical strategies to help you succeed in virtual classrooms and enhance your learning experience.",
    image: "online_learning.jpeg"
  },
  {
    title: "The Future of Social Media in 2024",
    category: "social media",
    date: "2024-03-10",
    description: "Key trends and innovations that are reshaping the social media landscape in 2024.",
    image: "social_trends.png"
  },
  {
    title: "Cloud Computing: Revolutionizing Tech & Business.",
    category: "tech",
    date: "2024-11-05",
    description: "How cloud computing is transforming everything from data storage to business operations.",
    image: "cloud_computing.jpg"
  },
  {
    title: "How to Create a Minimalist Wardrobe",
    category: "lifestyle",
    date: "2024-02-01",
    description: "Declutter your closet with easy tips and simplify your style with minimalist wardrobe choices.",
    image: "minimalist.jpg"
  },
  {
    title: "Top 10 Travel Destinations for 2024",
    category: "travel",
    date: "2024-04-15",
    description: "Explore the top must-visit places around the globe for unforgettable travel experiences in 2024.",
    image: "travel_destinations.jpeg"
  },
  {
    title: "Nutrient-Rich Foods to Boost Immunity Naturally.",
    category: "health",
    date: "2024-01-22",
    description: "Discover the best nutrient-rich foods that can strengthen your immune system and protect.",
    image: "immunity.jpeg"
  },
  {
    title: "Best Study Techniques for Exam Success",
    category: "education",
    date: "2024-03-18",
    description: "Proven methods to enhance your study skills and ace your exams with ease.",
    image: "exam.jpg"
  },
  {
    title: "How Social Media Affects Mental Health",
    category: "social media",
    date: "2024-02-28",
    description: "A deeper look into how social media platforms impact mental well-being and strategies to manage it.",
    image: "mental_social.jpg"
  },
  {
    title: "AI Tools Transforming Everyday Life",
    category: "tech",
    date: "2024-06-01",
    description: "How artificial intelligence is revolutionizing daily tasks, making life easier and more efficient.",
    image: "ai.jpg"
  },
  {
    title: "Morning Routines for a Productive Day",
    category: "lifestyle",
    date: "2024-03-12",
    description: "Start your day with these simple yet powerful morning routines for increased productivity.",
    image: "morning_routine.png"
  },
  {
    title: "Budget-Friendly Travel Tips: Enjoy More for Less",
    category: "travel",
    date: "2024-05-22",
    description: "Explore effective tips on how to travel affordably while still enjoying an exciting vacation.",
    image: "travel2.jpg"
  },
  {
    title: "The Benefits of Yoga for Mental Health",
    category: "health",
    date: "2024-04-08",
    description: "Why practicing yoga is essential for relieving stress and boosting mental clarity.",
    image: "mindful.jpg"
  },
  {
    title: "AI in Education: Shaping the Future of Learning",
    category: "education",
    date: "2024-05-30",
    description: "How AI is transforming education and reshaping how we learn in modern times.",
    image: "ai_education.png"
  },
  {
    title: "Best Foods for Mental Clarity and Productivity",
    category: "health",
    date: "2024-01-10",
    description: "Boost your focus and cognitive abilities with these brain-boosting superfoods.",
    image: "food.jpg"
  },
  {
    title: "Learn Top 10 Social Media Marketing Strategies",
    category: "social media",
    date: "2024-06-10",
    description: "Learn the most effective social media marketing strategies to grow your brand & engagement.",
    image: "marketing_strategies.jpg"
  },
  {
    title: "Wearable Tech in 2024: What’s New and What to Expect",
    category: "tech",
    date: "2024-07-05",
    description: "Discover the latest advancements in wearable technology and what trends to expect in 2024.",
    image: "wearables.png"
  },
  {
    title: "Effective Self-Care Practices to Combat Burnout",
    category: "lifestyle",
    date: "2024-04-20",
    description: "Simple and effective self-care practices to reduce burnout and improve your overall well-being.",
    image: "self_care.png"
  },
  {
    title: "Hidden Gems to Visit in South America",
    category: "travel",
    date: "2024-07-12",
    description: "Explore lesser-known yet breathtaking destinations in South America that are worth the visit.",
    image: "south_america.jpg"
  },
  {
    title: "5 Tech Trends Shaping the Future of Innovation",
    category: "tech",
    date: "2024-03-15",
    description: "Explore the key technological innovations that will impact the future of innovation and society.",
    image: "tech.jpg"
  },
  {
    title: "Hidden Gems in Europe: Unique Travel Spots",
    category: "travel",
    date: "2024-10-20",
    description: "Uncover Europe's lesser-known destinations that offer unique experiences & hidden treasures.",
    image: "europe_gems.jpg"
  },
  {
    title: "Travel Hacks: Affordable Adventure Tips",
    category: "travel",
    date: "2024-01-20",
    description: "Master the art of budget-friendly travel with practical hacks that help you travel smarter and save money.",
    image: "travel.jpg"
  },
  {
    title: "The Future of Remote Work: Hybrid Models",
    category: "tech",
    date: "2024-04-10",
    description: "How companies are successfully adapting to remote work and hybrid workforce models for the future.",
    image: "tech2.jpg"
  },
  {
    title: "Building Healthy Habits for a Better You",
    category: "lifestyle",
    date: "2024-09-18",
    description: "Start small with easy habits that lead to lasting improvements in your physical and mental health.",
    image: "healthy.jpg"
  },
  {
    title: "Eco-Friendly Tips for a Greener Lifestyle",
    category: "lifestyle",
    date: "2024-04-22",
    description: "Easy, everyday changes to reduce your environmental impact and live sustainably.",
    image: "eco.jpg"
  },
  {
    title: "5G Networks: Redefining Connectivity",
    category: "tech",
    date: "2024-08-03",
    description: "How 5G networks are transforming communication, connectivity, and the way we experience technology.",
    image: "5g.jpg"
  }
];


const blogsPerPage = 8;
let currentPage = 1;

function renderBlogs(blogs, page = 1) {
  const resultsGrid = document.getElementById('resultsGrid');
  const startIndex = (page - 1) * blogsPerPage;
  const endIndex = page * blogsPerPage;
  const blogsToShow = blogs.slice(startIndex, endIndex);

  resultsGrid.innerHTML = '';

  blogsToShow.forEach(blog => {
    const blogCard = document.createElement('div');
    blogCard.classList.add('results-card');

    blogCard.innerHTML = `
      <img src="${blog.image}" alt="${blog.title}">
      <h3>${blog.title}</h3>
      <p class="meta">${blog.date} | ${blog.category}</p>
      <p class="description">${blog.description}</p>
      <a href="#" class="cta-button">Read More</a>
    `;

    resultsGrid.appendChild(blogCard);

    blogCard.querySelector('.cta-button').addEventListener('click', () => {
      showBlogDetails(blog);
    });
  });

  const loadMoreButton = document.getElementById('loadMoreButton');
  if (endIndex < blogs.length) {
    loadMoreButton.style.display = 'block';
  } else {
    loadMoreButton.style.display = 'none';
  }

  resultsGrid.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('loadMoreButton').addEventListener('click', () => {
  currentPage++;
  renderBlogs(blogs, currentPage);
});

function showBlogDetails(blog) {
  document.getElementById('modalTitle').innerText = blog.title;
  document.getElementById('modalDescription').innerText = blog.description;
  document.getElementById('modalDate').innerText = blog.date;
  document.getElementById('blogModal').style.display = 'block';

  localStorage.setItem('selectedBlog', JSON.stringify(blog));

  window.location.href = 'blogDetail.html'; 
}

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('blogModal').style.display = 'none';
});

document.getElementById('searchInput').addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm) ||
    blog.description.toLowerCase().includes(searchTerm)
  );
  renderBlogs(filteredBlogs, currentPage);
});

document.getElementById('categoryFilter').addEventListener('change', (e) => {
  const selectedCategory = e.target.value;
  const filteredBlogs = selectedCategory === 'all'
    ? blogs
    : blogs.filter(blog => blog.category === selectedCategory);
  renderBlogs(filteredBlogs, currentPage);
});

document.getElementById('dateFilter').addEventListener('change', (e) => {
  const selectedDate = e.target.value;
  const filteredBlogs = selectedDate
    ? blogs.filter(blog => new Date(blog.date).toISOString().slice(0, 10) === selectedDate)
    : blogs;
  renderBlogs(filteredBlogs, currentPage);
});

document.getElementById('sortByDate').addEventListener('change', (e) => {
  const sortOrder = e.target.value;
  const sortedBlogs = [...blogs].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });
  renderBlogs(sortedBlogs, currentPage);
});

renderBlogs(blogs, currentPage);

function showBlogDetails(blog) {
  localStorage.setItem('selectedBlog', JSON.stringify(blog));

  window.location.href = 'blogDetail.html';
}
