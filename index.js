const toggleBtn = document.querySelector('.bar');
const toggleIcon = document.querySelector('.bar i');
const drop_down = document.querySelector('.drop__down');

toggleBtn.onclick = function(){
    drop_down.classList.toggle('open');
    const isOpen = drop_down.classList.contains('open')

    toggleIcon.classList = isOpen ? 'fa fa-xmark' : 'fa fa-bars'
}