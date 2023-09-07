const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

function dragstart (event) {
  let card = event.target;
  card.classList.add('hold');
  setTimeout(()=> {
    card.classList.add('hide')
  }, 0)
}

function dragend (event) {
  let card = event.target;
  card.classList.remove('hold', 'hide');
}

function dragover (event) {
  event.preventDefault();
}

function dragenter (event) {
  event.target.classList.add('hovered');
}

function dragleave (event) {
  event.target.classList.remove('hovered');
}

function dragdrop (event) {
  event.target.append(item);
  event.target.classList.remove('hovered');
}

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
}