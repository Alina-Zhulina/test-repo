// import axios from 'axios';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// const form = document.querySelector('.search-form');
// const input = document.querySelector('input[name="query"]');
// const news = document.querySelector('.news');
// let query = '';
// let page = 1;
// let articles = [];

// axios.defaults.baseURL = 'https://newsapi.org';

// form.addEventListener('submit', async(e) => {
//     e.preventDefault();
//     query = e.target.elements.query.value.trim();

//     if (query === '') {
//         showNotification("Please enter a search query.");
//         return;
//     }
//     clearArticles();
//     const result = await getNews(query);
//     articles = result.articles;
//     try {
//         if (articles.length === 0) {
//             showNotification("Sorry, there are no articles matching your search query. Please try again!");
//         } else {
//             renderArticles (articles);
//         }
//         input.value = '';
//     } catch (error) {
//         showNotification(error.message);
//     }
// }
// );

// async function getNews (query) {
//     const API_KEY = '345785a066764794828ce40eac434841';
//     const END_POINT = '/v2/everything';
//     const params = new URLSearchParams ({
//         apiKey: API_KEY,
//         q: query,
//         pageSize: 20,
//         page: page,
// });
// try {
//     const response = await axios.get(END_POINT, {params});
//     const data = response.data;
//     const filteredArticles = data.articles.filter(article => article.title !== "[Removed]" && article.urlToImage !== null);
//     return {articles: filteredArticles, totalResults: data.totalResults}   
// }
// catch(error) {
//     console.error('Error fetching the images:', error);
// }
// }


// function renderArticles (articles) {
// const listContainer = document.createElement('ul');
// listContainer.classList.add('news-list');
// const markup = articles.map(({author, description, publishedAt, title, url, urlToImage}) => {
// return ` 
//       <li class="articles">
//       <div class="articles-content">
//       <h1>${title}</h1>
//       <p>${description}</p>
//       <span><b>Author:</b> ${author}</span><br>
//       <span><b>Published At:</b> ${publishedAt}</span><br>
//       <a href="${url}"><em>Read more</em></a>
// </div>
// <img src="${urlToImage}" alt="${title}" class="article-image">
//       </li>
//     </ul>`;
// }).join('');
// listContainer.innerHTML = markup;
// news.innerHTML = '';
// news.appendChild(listContainer);
// }

// function showNotification(message) {
//     iziToast.error({
//         title: 'Error',
//         message: message,
//         backgroundColor: '#ef4040',
//         theme: 'dark',
//     });
// }

// function clearArticles() {
//     news.innerHTML = '';
// }
import axios from 'axios';
import Swiper from 'swiper';

const reviewsContainer = document.querySelector('.reviews-container');


async function getReviews() {
    const BASE_URL = 'https://portfolio-js.b.goit.study/api';
    const END_POINT = '/reviews'; 
    const url = `${BASE_URL}${END_POINT}`;
    try {
        const response = await axios.get(url);
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
}

 async function renderReviews () {
    try{
        const reviewsData = await getReviews(); 
        if (!reviewsData || reviewsData.length === 0) {
            reviewsContainer.innerHTML = '<p>Not found</p>';
            return;
        }
        const listContainer = document.createElement('ul');
        listContainer.classList.add('reviews-list'); 
        const markup = reviewsData.map(({author, avatar_url, review}) => {
            return `
            <li class="reviews-item">
  <div class="review-photo">
    <img src="${avatar_url}" alt='${author}' class="avatar">
</div>
<div class="review-content">
    <h3 class="author">${author}</h3>
    <p class="text">${review}</p>
</div>
</li>`;
}).join('');
listContainer.innerHTML = markup;
reviewsContainer.appendChild(listContainer);
    }
    catch (error) {
        alert('Error rendering reviews');
        console.error('Error rendering reviews:', error);
    }
}
renderReviews();