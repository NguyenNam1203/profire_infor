// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
    this.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer để xử lý animation khi scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Xử lý animation cho skill bars
            if (entry.target.classList.contains('skill-progress')) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
            }
        }
    });
}, {
    threshold: 0.1
});

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Observe skill bars
document.querySelectorAll('.skill-progress').forEach(skill => {
    const width = skill.style.width;
    skill.style.width = '0';
    skill.setAttribute('data-width', width);
    observer.observe(skill);
});

// Observe contact form
observer.observe(document.querySelector('.contact-form'));

// Animation cho các section khi scroll
document.querySelectorAll('section').forEach(section => {
    section.classList.add('animate');
    if (section.id === 'about' || section.id === 'skills') {
        section.classList.add('slide-in-left');
    } else if (section.id === 'projects' || section.id === 'contact') {
        section.classList.add('slide-in-right');
    } else {
        section.classList.add('fade-in-up');
    }
    observer.observe(section);
});

// Smooth reveal cho navbar khi scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
});

// Animation cho loading trang
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// 3D Mouse Movement Effect
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.project-card');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    cards.forEach(card => {
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
});

// Thêm delay cho tech tags
document.querySelectorAll('.tech-tags span').forEach((tag, index) => {
    tag.style.setProperty('--i', index);
});

// Parallax Scrolling Effect
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        section.style.transform = `translateZ(${rate}px)`;
    });
});

// 3D Tilt Effect cho Profile Image
const profileImage = document.querySelector('.profile-image');
profileImage.addEventListener('mousemove', (e) => {
    const xAxis = (e.offsetX - profileImage.offsetWidth/2) / 25;
    const yAxis = (e.offsetY - profileImage.offsetHeight/2) / 25;
    profileImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

profileImage.addEventListener('mouseleave', () => {
    profileImage.style.transform = 'rotateY(0) rotateX(0)';
}); 
