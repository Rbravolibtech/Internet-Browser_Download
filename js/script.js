///////* VARIABLES*//////////

////* Using query selector all will select all the classes that are called tab
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const btn = document.getElementById('-btn'); 
const menu = document.getElementById('menu');
const logo = document.getElementById('logo'); 

///////* TABS MENU EVENT LISTENER (simple bookmarking, speedy searching, easy sharing)//////////
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

////////* HAMBURGER BUTTON LISTENER /////////////
btn.addEventListener('click', navToggle); 

function onTabClick(e) {
  ////// DEACTIVATES ALL TABS////////
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    );
  });

  /////// HIDE ALL PANELS ////////
  panels.forEach((panel) => panel.classList.add('hidden'));

  /////ACTIVATE A NEW TAB AND PANEL BASED ON THE TARGET
  e.target.classList.add('border-softRed', 'border-b-4');
  const classString = e.target.getAttribute('data-target');
  document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden');
}

function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg');
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg');
  }
}
