let size = 10;
let orderElement = 1;

const init = () => {


   const btn = document.createElement('button');
   btn.textContent = 'Dodaj 10 elementów do listy';
   const ul = document.createElement('ul');
   document.body.appendChild(btn);
   document.body.appendChild(ul);
   btn.addEventListener('click', createLiElements)
}

const createLiElements = () => {

   for (i = 0; i < 10; i++) {
      const li = document.createElement('li');
      li.textContent = `element nr ${orderElement++}`;
      li.style.fontSize = `${size++}px`;
      document.querySelector('ul').appendChild(li);
   }


}

init()