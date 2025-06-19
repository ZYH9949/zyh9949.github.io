// 设置导航的函数
function setupNavigation() {
    document.querySelector('nav').addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            const href = e.target.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                navigateToSection(href.substring(1));
            }
        }
    });

    document.querySelectorAll('nav a').forEach(navItem => {
        navItem.addEventListener('mouseover', () => {
            navItem.classList.add('hover');
        });
        navItem.addEventListener('mouseout', () => {
            navItem.classList.remove('hover');
        });
    });

    document.querySelectorAll('.dropdown-content a').forEach(dropdownItem => {
        dropdownItem.addEventListener('mouseover', () => {
            dropdownItem.classList.add('hover');
        });
        dropdownItem.addEventListener('mouseout', () => {
            dropdownItem.classList.remove('hover');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToSection(this.getAttribute('href').substring(1));
        });
    });
}

// 导航到指定部分的函数
function navigateToSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    var target = document.querySelector(`[data-section="${sectionId}"]`);
    if (target) {
        setTimeout(() => {
            target.classList.add('active');
        }, 100); 
    }
}

// 页面加载完成后的初始化函数
window.onload = function() {
    setupNavigation();
    document.querySelector('.section').classList.add('active');
    
    const center = document.querySelector('.center');
    setTimeout(() => {
        center.classList.add('loaded');
    }, 100);

    AOS.init({
        duration: 1500
    });
}