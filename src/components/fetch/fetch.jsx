const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51186890-e1c8ef6e5ef4b08950db17a2f';
const hor = 'horizontal';

// return fetch(
//  `${BASE_URL}?q=${item}&key=${API_KEY}&image_type=photo&orientation=${hor}&page=${onePage}&per_page=12`
// );

export const getNews = (onePage, item) => {

            const params = new URLSearchParams({
               q: item,
               key: API_KEY,
               image_type: 'photo',
               orientation: hor,
               page: onePage,
               per_page: 12,
            });

   return fetch(`${BASE_URL}?${params}`);
}