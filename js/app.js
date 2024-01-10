const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

document.querySelector('.btn').addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the form from submitting if it's in a <form>

  const mailto = 'mailto:jagaa.hn@gmail.com';
  const subject = 'Your Subject Here';
  const emailBody = 'Your email content here';

  const mailtoLink = `${mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

  // Create a temporary <a> element to trigger the email client
  const tempLink = document.createElement('a');
  tempLink.href = mailtoLink;
  tempLink.style.display = 'none';
  document.body.appendChild(tempLink);

  // Trigger the click event on the temporary link
  tempLink.click();

  // Remove the temporary link from the DOM
  document.body.removeChild(tempLink);

  // Clear the form
  document.querySelector('.contact-input[name="message"]').value = '';
  document.querySelector('.contact-input[name="email"]').value = '';
  document.querySelector('.contact-input[name="first-name"]').value = '';
  document.querySelector('.contact-input[name="last-name"]').value = '';
  document.querySelector('.contact-input[name="phone"]').value = '';

  // Display a success message
  alert('I will get back to you as soon as possible.');
});

window.onload = function equalizeCardHeights() {
  var cards = document.querySelectorAll('.card');
  var maxHeight = 0;

  // Find the tallest card
  cards.forEach(function(card) {
    if (card.offsetHeight > maxHeight) {
      maxHeight = card.offsetHeight;
    }
  });

  // Set all cards to the tallest height
  cards.forEach(function(card) {
    card.style.height = maxHeight + 'px';
  });
};

window.addEventListener("scroll", () => {
  skillsEffect();
  countUp();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 100;
      const increment = Math.ceil(maxNum / speed);

      if (currentNum < maxNum) {
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 1);
      } else {
        numb.innerText = maxNum;
      }
    };

    setTimeout(updateCount, 400);
  });
}

var mySwiper = new Swiper(".swiper-container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});
