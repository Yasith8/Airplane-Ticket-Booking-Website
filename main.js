const navbar = document.querySelector('nav');
const about = document.querySelector('#about')

//review button
const backBtn = document.querySelector('.back');
const upBtn = document.querySelector('.up');
const commentTopic = document.querySelector('.cmt-topic');
const commentName = document.querySelector('.cmt-name');
const commentPar = document.querySelector('.cmt-p');
const commentImg = document.querySelector('.cmt-img');
let currentIndex = 0;


const firstSection = document.querySelector('section:first-of-type').offsetTop;


window.addEventListener('scroll', () => {

    if (window.pageYOffset >= firstSection) {
        navbar.classList.add('blue');
    } else {
        navbar.classList.remove('blue');
    }
});

//Review Button
const review = {
    images: ['img/image-1.jpg', 'img/image-2.jpg', 'img/image-3.jpg', 'img/image-4.jpg'],
    name: ['John S. Gomes', 'Martin Hesel', 'kasun Rajitha', 'Julia Annie'],
    topic: ['"This Website Help me lot...🌍"', '"Life saving website to all Travellers✈️"', '"you can go without waste your time⏳"', '"Best of the Best💖"'],
    cmt: ['Traveling opens up a world of new experiences and perspectives, allowing you to immerse yourself in different cultures and ways of life.', 'Exploring new destinations can be a great way to break out of your routine, challenge yourself, and gain a sense of adventure.', 'From the thrill of adventure sports to the tranquility of natural landscapes, traveling offers a diverse range of activities to suit all interests.', 'Whether its a solo backpacking trip or a family vacation, traveling creates lasting memories and builds bonds with those you share the experience with']
}

function displayCurrentTopic() {
    commentName.textContent = review.name[currentIndex];
    commentTopic.textContent = review.topic[currentIndex];
    commentPar.textContent = review.cmt[currentIndex];
    commentImg.src = review.images[currentIndex];

}
displayCurrentTopic();

upBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % review.topic.length;
    displayCurrentTopic();
})
backBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + review.topic.length) % review.topic.length;
    displayCurrentTopic();
})