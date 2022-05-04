

function activate_class(param) {
    let el = document.getElementById(param);
    const menutypes = document.querySelectorAll('.menu-type');

    menutypes.forEach(type => {
        type.classList.remove('active');
    });
    el.classList.add('active');
}