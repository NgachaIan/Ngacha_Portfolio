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

const speakers = [
  {
    name: 'Alice Johnson',
    image: 'Images/1.jpg',
    techStack: ['JavaScript', 'Node.js', 'React'],
    credentials: 'Senior Software Engineer at TechCo, Speaker at API World Conference.',
  },
  {
    name: 'Bob Thompson',
    image: 'Images/2.jpg',
    techStack: ['Python', 'Django', 'PostgreSQL'],
    credentials: 'Data Scientist at Data Analytics Inc., Contributor to Open Source Projects',
  },
  {
    name: 'Charlie Lee',
    image: 'Images/3.jpg',
    techStack: ['Java', 'Spring', 'MySQL'],
    credentials: "Software Architect at GlobalTech, Author of 'Building Scalable APIs'",
  },
  {
    name: 'Diana Patel',
    image: 'Images/4.jpg',
    techStack: ['Ruby', 'Ruby on Rails', 'MongoDB'],
    credentials: 'Founder of CodeCraft Academy, Mentor at Rails Girls',
  },
  {
    name: 'Ethan Ramirez',
    image: 'Images/5.jpg',
    techStack: ['C#', '.NET', 'Azure'],
    credentials: 'Principal Engineer at Cloud Solutions Ltd., Microsoft MVP',
  },
];

const speakerContainer = document.getElementById('speakerContainer');
const hiddenSpeakers = [];
const numVisibleSpeakers = 2;

const showHiddenSpeakers = () => {
  hiddenSpeakers.forEach((speaker) => {
    speaker.classList.remove('hidden-speaker');
  });
  document.getElementById('seeMoreButton').style.display = 'none';
};

speakers.forEach((speaker, index) => {
  const speakerCard = document.createElement('div');
  speakerCard.classList.add('col-md-6');
  if (index >= numVisibleSpeakers) {
    speakerCard.classList.add('hidden-speaker');
    hiddenSpeakers.push(speakerCard);
  }
  speakerCard.innerHTML = `
      <div class="speaker-card">
        <img src="${speaker.image}" alt="${speaker.name}" class="speaker-image">
        <div class="speaker-info">
          <h3>${speaker.name}</h3>
          <p>${speaker.techStack}</p>
          <p>${speaker.credentials}</p>
        </div>
      </div>
    `;
  speakerContainer.appendChild(speakerCard);
});

if (hiddenSpeakers.length > 0) {
  document.getElementById('seeMoreButton').style.display = 'block';
}

function animateLogos() {
  const partnerLogos = document.querySelectorAll('.partner-logo');
  const numLogos = partnerLogos.length;
  const animationDelay = 1000;
  const logoTransitionDuration = 2000;
  const logoMargin = 20;
  let totalWidth = 0;

  partnerLogos.forEach((logo) => {
    totalWidth += logo.width + logoMargin;
  });

  for (let j = 0; j < numLogos; j += 1) {
    const logo = partnerLogos[j];
    logo.style.transitionDuration = `${logoTransitionDuration}ms`;
    logo.style.transform = `translateX(-${totalWidth - (logo.width + logoMargin) * (j + 1)}px)`;
  }

  setTimeout(() => {
    partnerLogos.forEach((logo) => {
      logo.style.transform = 'translateX(0)';
    });
  }, animationDelay + logoTransitionDuration);
}

animateLogos();
