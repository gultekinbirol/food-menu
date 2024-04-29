import data from '../data.js';
import dom from '../dom.js';

const loadHandler = () => {
    data.buttons.forEach((btn) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.id = btn.id;
        button.classList.add('filter-btn');
        button.innerText = btn.text;
        button.addEventListener('click', () => {
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach((item) => {
                const { id } = button;
                if (id === 'all') {
                    item.classList.remove('hide');
                } else if (item.classList.contains(id)) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
        dom.buttonsContainer.append(button);
    });

    data.menu.forEach((item) => {
        // create a article element
        const article = document.createElement('article');
        article.classList.add('menu-item', item.category);

        // img
        const img = document.createElement('img');
        img.classList.add('photo');
        img.src = item.src;
        img.alt = item.title;

        // item info
        const itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info');

        article.append(img, itemInfo);

        // header
        const header = document.createElement('header');

        // title
        const title = document.createElement('h4');
        title.innerText = item.title;

        // price
        const price = document.createElement('h4');
        price.classList.add('price');
        price.innerText = `€${item.price}`;

        header.append(title, price);

        // description
        const description = document.createElement('p');
        description.classList.add('item-text');
        description.innerText = item.desc;

        itemInfo.append(header, description);

        dom.itemsContainer.append(article);
    });
};

export default loadHandler;
