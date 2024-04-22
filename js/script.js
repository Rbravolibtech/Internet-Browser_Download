///////*VARIABLES*//////////

////*using query selector all will select all the classes that are called tab
const tabs = document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

///////* TABS MENU EVENT LISTENER (simple bookmarking, speedy searching, easy sharing)//////////
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e) {
  ////// DEACTIVATES ALL TABS////////
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    )
  })

  /////// HIDE ALL PANELS ////////
  panels.forEach((panel) => panel.classList.add('hidden'))

  /////ACTIVATE A NEW TAB AND PANEL BASED ON THE TARGET
  e.target.classList.add('border-softRed', 'border-b-4')
  const classString = e.target.getAttribute('data-target')
  document.getElementById('panels')
  .getElementsByClassName(classString)[0]
  .classList.remove('hidden')
}


