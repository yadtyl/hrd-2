
const elements = document.querySelectorAll('div');

const options = {
  root: null,
  threshold: 0,
  rootMargin: "1px"
};


const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.remove('slideIn');
    }
    entry.target.classList.toggle('slideIn');
  })
}, options);

  elements.forEach(div => {
    observer.observe(div);

})
