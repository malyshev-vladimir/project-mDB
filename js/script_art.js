const btn = document.querySelector('button');

// btn.onclick = function() {
//     alert('Warning!');
// };

btn.addEventListener('click', () => {
    alert('WARNING');
}); 

btn.addEventListener('click', () => {
    alert('WARNING /// WARNING');
}); 

btn.addEventListener('click', (event) => {
    console.log(event.target);
    event.target.remove();
    // console.log('Hover');
});

let i = 0;

const countElement = (e) => {
    console.log(e.target);
    i++;
    console.log(i);
    if (i == 10) {
        btn.removeEventListener('click', countElement);
    }
};

btn.addEventListener('click', countElement);

const link = document.querySelector('a');

link.addEventListener('click', event => {
    event.preventDefault();

    console.log(event.target);
});
