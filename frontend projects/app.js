
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const navList = document.querySelector('.navlist');

  menuIcon.addEventListener('click', function () {
    if (navList.classList.contains('open')) {
      navList.classList.remove('open');
  } else {
      navList.classList.add('open');
  }

  });
});


const sr=ScrollReveal ({
  distance: '65px',
  duration:2000,
  delay: 200,
  reset:true

})
sr.reveal('.hero-text',{delay:200,origin:'top'});
sr.reveal('.hero-img',{delay:150,origin:'right'});
sr.reveal('.icons',{delay:400,origin:'left'});
sr.reveal('.scroll-down',{delay:200,origin:'left'});
sr.reveal('.hero2 h2',{delay:100,origin:'left'});
sr.reveal('.hero2 h4',{delay:100,origin:'right'});
sr.reveal('.gif img',{delay:150,origin:'right'});
// sr.reveal('.category',{delay:300,origin:'right'});
sr.reveal('#category1',{delay:150,origin:'left'});
sr.reveal('#category2',{delay:150,origin:'left'});
sr.reveal('#category3',{delay:150,origin:'left'});
sr.reveal('#category4',{delay:150,origin:'left'});
sr.reveal('#category5',{delay:150,origin:'right'});
sr.reveal('#category6',{delay:150,origin:'right'});
sr.reveal('#category7',{delay:150,origin:'right'});
sr.reveal('#category8',{delay:150,origin:'right'});

