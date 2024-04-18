import { items } from './content.js'

const container = document.createElement('ul')
container.classList.add('items');

const template = document.querySelector('#item-template').content.querySelector('.item');


const fill = (node, item, index) => {
    const itemViewControl = node.querySelector('.item__view-control');
    const itemTitle = node.querySelector('.item__title');
    const itemDescription = node.querySelector('.item__description');

    itemTitle.textContent = `${index}. ${item.title}`;
    itemDescription.textContent = item.description;

    itemViewControl.addEventListener('click', () => {
        itemDescription.classList.toggle('visible');
        itemViewControl.classList.toggle('opened');
    });
}


const create = (items, container) => {

    items.forEach((item, index) => {
        const node = template.cloneNode(true);
        fill(node, item, ++index);
        container.appendChild(node);
    });

}

create(items, container);
document.body.appendChild(container);





/*
const itemViewControl = document.querySelector('.item__view-control');
const itemDescription = document.querySelector('.item__description');

if(itemViewControl) {
   itemViewControl.addEventListener('click', () => {
    itemDescription.classList.toggle('visible');
    itemViewControl.classList.toggle('opened');
   });
}
*/

