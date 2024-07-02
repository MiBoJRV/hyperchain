//start menu
console.log('sub-menu')
// Отримуємо всі елементи підменю
const subMenus = document.querySelectorAll('.sub-menu');
console.log(subMenus)

// Перебираємо кожен пункт меню і додаємо обробник подій для відображення підменю
subMenus.forEach(subMenu => {
    const menuItem = subMenu.closest('li');
    let isOpen = false;
    const hasSubmenu = subMenu.closest('.has-submenu');

    menuItem.addEventListener('click', () => {
        if (isOpen) {
            subMenu.style.display = 'none';
            subMenu.classList.toggle('open');
            hasSubmenu.classList.toggle('open');
            // Зміна зображення на плюс
            menuItem.querySelector('.chevron-down-icon').src = 'images/plus-nav.svg';
        } else {
            subMenu.classList.toggle('open');
            subMenu.style.display = 'flex';
            hasSubmenu.classList.toggle('open');
            // Зміна зображення на мінус
            menuItem.querySelector('.chevron-down-icon').src = 'images/minus-nav.svg';
        }
        isOpen = !isOpen;
    });


    menuItem.addEventListener('mouseenter', () => {
        if (!isOpen) {
            subMenu.style.display = 'flex';
        }
    });

    menuItem.addEventListener('mouseleave', () => {
        if (!isOpen) {
            subMenu.style.display = 'none';
        }
    });
});


// Створюємо елемент <img> для зображення chevron-down-menu.svg
const chevronIcon = document.createElement('img');
chevronIcon.src = 'images/chevron-down-menu.svg';
chevronIcon.alt = 'Chevron Down Icon';
chevronIcon.classList.add('chevron-down-icon');

const chevronIconMobile = document.createElement('img');
chevronIconMobile.src = 'images/plus-nav.svg';
chevronIconMobile.alt = 'Chevron Down Icon';
chevronIconMobile.classList.add('chevron-down-icon');

// Знаходимо всі елементи меню, які мають підменю
const menuItemsWithSubmenu = document.querySelectorAll('.menu-items .has-submenu.desktop');
const menuItemsWithSubmenuMobile = document.querySelectorAll('.menu-items .has-submenu.mobile');

// Додаємо зображення chevron до кожного елемента меню з підменю
menuItemsWithSubmenu.forEach(menuItem => {
    menuItem.appendChild(chevronIcon.cloneNode(true)); // Додаємо клонований елемент для кожного елемента меню
});
menuItemsWithSubmenuMobile.forEach(menuItem => {
    menuItem.appendChild(chevronIconMobile.cloneNode(true)); // Додаємо клонований елемент для кожного елемента меню
});
//end menu

//mobile menu
const buttonMobileMenu = document.querySelector('.button-mobile-menu');
const mobileContent = document.querySelector('.mobile-content');
const mobileMenuLinks = document.querySelectorAll('.mobile-content a');

let isMobileMenuOpen = false;

// Функція для відкриття/закриття мобільного меню
function toggleMobileMenu() {
    mobileContent.classList.toggle('open');
    document.body.style.overflow = mobileContent.classList.contains('open') ? 'hidden' : '';
}

// Обробник кліку на кнопку мобільного меню
buttonMobileMenu.addEventListener('click', function () {
    toggleMobileMenu();
    buttonMobileMenu.classList.toggle('open');

});

// Обробник кліку на посилання в мобільному меню
mobileMenuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        toggleMobileMenu();
        buttonMobileMenu.classList.remove('open');
        document.body.style.overflow = ''; // Забираємо overflow: hidden
    });
});

// Отримання шляху поточної сторінки без розширення ".html"
const currentPagePath = window.location.pathname;
let currentPage = currentPagePath.split('/').pop(); // Отримання останнього шматка шляху
if (currentPage.endsWith('.html')) {
    currentPage = currentPage.slice(0, -5); // Видалення ".html" зі строки
}
console.log(currentPage)

document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll('.menu-items li');
    let hasSubmenu = false; // Флаг, щоб відстежувати наявність хоча б одного елемента з класом "has-submenu"

    menuItems.forEach(item => {
        const link = item.querySelector('a').getAttribute('href').split('/').pop(); // Отримання останнього шматка шляху посилання
        if (link === currentPage && item.closest('.has-submenu') && item.closest('.sub-menu')) {
            item.closest('.has-submenu').classList.add('current-page');
            hasSubmenu = true; // Встановлення флагу в true, якщо знайдено елемент з класом "has-submenu"
        }
    });

    // Додавання класу "current-page" до елемента <li> в меню, якщо поточна сторінка не має елементів з класом "has-submenu"
    if (!hasSubmenu && currentPage) {
        menuItems.forEach(item => {
            const link = item.querySelector('a').getAttribute('href').split('/').pop(); // Отримання останнього шматка шляху посилання
            if (link === currentPage) {
                item.classList.add('current-page');
            }
        });
    }
});


// Додавання класу до відповідного елемента <li> у меню
// document.addEventListener("DOMContentLoaded", () => {
//     const menuItems = document.querySelectorAll('.menu-items li');
//     menuItems.forEach(item => {
//         const link = item.querySelector('a').getAttribute('href').split('/').pop(); // Отримання останнього шматка шляху посилання
//         if (link === currentPage) {
//             item.classList.add('current-page');
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const menuItems = document.querySelectorAll('.menu-items li');
//     menuItems.forEach(item => {
//         const link = item.querySelector('a').getAttribute('href').split('/').pop(); // Отримання останнього шматка шляху посилання
//         if (link === currentPage && item.closest('.has-submenu') && item.closest('.sub-menu')) {
//             item.closest('.has-submenu').classList.add('current-page');
//         }
//     });
// });





