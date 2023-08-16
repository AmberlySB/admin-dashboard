const sideBar = document.getElementById('sidebar');
const miniBar = document.getElementById('minibar');
const collapse = document.getElementById('collapse');
const expand = document.getElementById('expand');

collapse.addEventListener('click', toggleSideBar);
expand.addEventListener('click', toggleSideBar);

function toggleSideBar() {
  console.log('hello world');
  sideBar.classList.toggle('hidden');
  miniBar.classList.toggle('hidden');
}
