$(document).ready(() => {
  const navDropdowns = $('nav ul li a:not(:only-child)');
  const html = $('html');
  const navToggle = $('#nav-toggle');

  navDropdowns.click(function (e) {
    const target = $(this).siblings('.nav-dropdown');
    target.toggle();
    e.stopPropagation();
  });

  html.click(() => {
    navDropdowns.hide();
  });

  navToggle.click(() => {
    $('nav ul').slideToggle();
  });

  navToggle.on('click', function () {
    this.classList.toggle('active');
  });

  $('#showProgramButton').click(() => {
    $('.program-card').toggle();
  });
});

// const speakers = [
//   {
//     name: 'Alice Johnson',
//     image: 'Images/1.jpg',
//     techStack: ['JavaScript', 'Node.js', 'React'],
//     credentials: 'Senior Software Engineer at TechCo, Speaker at API World Conference.',
//   },
//   {
//     name: 'Bob Thompson',
//     image: 'Images/2.jpg',
//     techStack: ['Python', 'Django', 'PostgreSQL'],
//     credentials: 'Data Scientist at Data Analytics Inc., Contributor to Open Source Projects',
//   },
//   {
//     name: 'Charlie Lee',
//     image: 'Images/3.jpg',
//     techStack: ['Java', 'Spring', 'MySQL'],
//     credentials: "Software Architect at GlobalTech, Author of 'Building Scalable APIs'",
//   },
//   {
//     name: 'Diana Patel',
//     image: 'Images/4.jpg',
//     techStack: ['Ruby', 'Ruby on Rails', 'MongoDB'],
//     credentials: 'Founder of CodeCraft Academy, Mentor at Rails Girls',
//   },
//   {
//     name: 'Ethan Ramirez',
//     image: 'Images/5.jpg',
//     techStack: ['C#', '.NET', 'Azure'],
//     credentials: 'Principal Engineer at Cloud Solutions Ltd., Microsoft MVP',
//   },
// ];

// const speakerContainer = document.getElementById('featured-guests');
// const hiddenSpeakers = [];
// const numVisibleSpeakers = 2;

// const showHiddenSpeakers = () => {
//   hiddenSpeakers.forEach((speaker) => {
//     speaker.classList.remove('hidden-speaker');
//   });
//   document.getElementById('seeMoreButton').style.display = 'none';
// };

// speakers.forEach((speaker, index) => {
//   const speakerCard = document.createElement('div');
//   speakerCard.classList.add('col-md-6');
//   if (index >= numVisibleSpeakers) {
//     speakerCard.classList.add('hidden-speaker');
//     hiddenSpeakers.push(speakerCard);
//   }
//   speakerCard.innerHTML = `
//       <div class="speaker-card">
//         <img src="${speaker.image}" alt="${speaker.name}" class="speaker-image">
//         <div class="speaker-info">
//           <h3>${speaker.name}</h3>
//           <p>${speaker.techStack}</p>
//           <p>${speaker.credentials}</p>
//         </div>
//       </div>
//     `;
//   speakerContainer.appendChild(speakerCard);
// });

// if (hiddenSpeakers.length > 0) {
//   document.getElementById('seeMoreButton').style.display = 'block';
// }

const speakers = [
  {
    id: '1',
    name: 'Alice Johnson',
    desc: ['JavaScript', 'Node.js', 'React'],
    moreDesc: "Senior Software Engineer at TechCo, Speaker at API World Conference.",
    img: 'Images/1.jpg',
    imgAlt: 'Alice Johnson',
  },
  {
    id: '2',
    name: 'Bob Thompson',
    desc: ['Python', 'Django', 'PostgreSQL'],
    moreDesc: 'Data Scientist at Data Analytics Inc., Contributor to Open Source Projects',
    img: 'Images/2.jpg',
    imgAlt: 'Bob Thompson',
  },
  {
    id: '3',
    name: 'Charlie Lee',
    desc: ['Java', 'Spring', 'MySQL'],
    moreDesc: 'Software Architect at GlobalTech',
    img: 'Images/3.jpg',
    imgAlt: 'Charlie Lee',
  },
  {
    id: '4',
    name: 'Diana Patel',
    desc: ['Ruby', 'Ruby on Rails', 'MongoDB'],
    moreDesc: 'Founder of CodeCraft Academy, Mentor at Rails Girls.',
    img: 'Images/4.jpg',
    imgAlt: 'Maryam Lemu',
  },
  {
    id: '5',
    name: 'Ethan Ramirez',
    desc: ['C#', '.NET', 'Azure'],
    moreDesc: 'Principal Engineer at Cloud Solutions Ltd., Microsoft MVP',
    img: 'Images/5.jpg',
    imgAlt: 'Ethan Ramirez',
  },
];

const speakerContainer = document.querySelector('.speaker-holder');
const showSpeakers = speakers.map((speaker) => `
      <div class="speakers">
        <div class="img-holder">
          <img class="bg" src="Images/chessboard-mobile.jpg" alt="background">
          <img src=${speaker.img} alt=${speaker.imgAlt}>
        </div>
        <div class="text-holder">
          <div class="name">
            <h3>${speaker.name}</h3>
            <i>${speaker.desc}</i>
          </div>
          <hr>
          <div class="description">
            ${speaker.moreDesc}  
          </div>
        </div>
      </div>
      `).join('');

speakerContainer.innerHTML = showSpeakers;

const vip = document.querySelector('.speakers:nth-child(1n+3)');
const vip1 = document.querySelector('.speakers:nth-child(n+4)');
const vip2 = document.querySelector('.speakers:nth-child(n+5)');
const vip3 = document.querySelector('.speakers:nth-child(n+6)');
const more = document.querySelector('.more-info');
const less = document.querySelector('.less-info');
function showMore() {
  vip.style.display = 'flex';
  more.style.display = 'none';
  less.style.display = 'flex';
  vip1.style.display = 'flex';
  vip2.style.display = 'flex';
  vip3.style.display = 'flex';
}
function showLess() {
  vip.style.display = 'none';
  vip1.style.display = 'none';
  vip2.style.display = 'none';
  vip3.style.display = 'none';
  less.style.display = 'none';
  more.style.display = 'flex';
}
more.addEventListener('click', showMore);
less.addEventListener('click', showLess);
