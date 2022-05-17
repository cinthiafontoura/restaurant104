const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const mobile_links = document.querySelectorAll('.mobile-link')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
  nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', insisible)

mobile_links.forEach(link_el => link_el.addEventListener('click', insisible))

function insisible() {
  nav.forEach(nav_el => nav_el.classList.remove('visible'))
}