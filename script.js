// Bitiruv sanasi: 2010-yil 25-may (UTC+5 Toshkent vaqti bilan)
const graduationDate = new Date('2010-05-25T10:00:00+05:00');

// Countup timer funksiyasi
function updateCountupTimer() {
    const now = new Date();
    const diff = now - graduationDate;
    
    // Umumiy kunlarni hisoblash
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // Yil, oy, kun, soat, daqiqa, soniyani hisoblash
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // HTML elementlariga yozish
    const yearsEl = document.getElementById('years');
    const monthsEl = document.getElementById('months');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const totalDaysEl = document.getElementById('total-days');
    
    if (yearsEl) yearsEl.textContent = years;
    if (monthsEl) monthsEl.textContent = months;
    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    if (totalDaysEl) totalDaysEl.textContent = totalDays.toLocaleString('uz-UZ');
}

// Har soniyada yangilash
setInterval(updateCountupTimer, 1000);

// Sahifa yuklanganda darhol boshlash
updateCountupTimer();

// O'quvchilar ma'lumotlari (Bu yerga o'z ma'lumotlaringizni kiriting)
const students = [
    {
        id: 1,
        name: "Maxkamov Xurshiddin",
        image: "images/students/maxkamov_xurshiddin.jpg", // Rasmingizni shu papkaga joylashtiring
        bio: "1994-yil 25-noyabrda Toshkent shahrida tavallud topgan. Oilali ikki nafar farzandi bor.",
        phone: "+998996547474",
        telegram: "https://t.me/KhurshiddinMakhkamov",
        instagram: "https://instagram.com/xurshiddin_maxkamov",
        location: "https://yandex.uz/maps/-/CPQ3eC1A"
    },
    {
        id: 2,
        name: "Tursunxo'jayev Sarvarxo'ja",
        image: "images/students/tursunxojayev_sarvar.jpg",
        bio: "1994-yil 4-sentyabrda Toshkent shahrida tavallud topgan. 2020-yil 3-noyabr kuni avtohalokat natijasida vafot etgan. Shunga qaramay u do'stlari va yaqinlari hayotida o'chmas iz qoldira olgan inson edi. Biz seni yaxshi ko'ramiz va unutmaymiz!",
        phone: "+998990009946",
        telegram: "https://t.me/tusunxo'jayev_sarvarxo'ja",
        instagram: "https://instagram.com/sarvar_tursunoff",
        location: "https://yandex.uz/maps/-/CPQ3iBMX"
    },
    {
        id: 3,
        name: "Muxiddinov Komoliddin",
        image: "images/students/muxiddinov_kamoliddin.jpg", // Rasmingizni shu papkaga joylashtiring
        bio: "1994-yil 26-sentyabrda Toshkent shahrida tavallud topgan. Oilali ikki nafar farzandi bor.",
        phone: "+998773251994",
        telegram: "https://t.me/998773251994",
        instagram: "https://instagram.com/komol7667",
        location: "https://yandex.uz/maps/-/CPQ3iS4Q"
    },
    {
        id: 4,
        name: "Komilov Abdulloh",
        image: "images/students/komilov_abdulloh.jpg", // Rasmingizni shu papkaga joylashtiring
        bio: "1994-yil 12-iyulda Toshkent shahrida tavallud topgan. Oilali bir nafar farzandi bor.",
        phone: "+998990009272",
        telegram: "https://t.me/@komilov_9272",
        instagram: "https://instagram.com/komilov_yunsabod",
        location: "https://yandex.uz/maps/-/CPQ3mIPK"
    },
    {
        id: 5,
        name: "Axmedov Ayubxon",
        image: "images/students/axmedov_ayubxon.jpg", // Rasmingizni shu papkaga joylashtiring
        bio: "1994-yil 15-iyulda Toshkent shahrida tavallud topgan. Oilali uch nafar farzandi bor. Chopar pizza undan ilhomlanib o'ziga nom tanlab olgan.",
        phone: "+998935161793",
        telegram: "https://t.me/998935161793",
        instagram: "https://instagram.com/ahmedovabdulboriy188",
        location: "https://yandex.uz/maps/-/CPQ3mG10"
    },
    {
        id: 6,
        name: "Mahmudov Anvar",
        image: "images/students/mahmudov_anvar.jpg", // Rasmingizni shu papkaga joylashtiring
        bio: "1994-yil 12-yanvarda Toshkent shahrida tavallud topgan. Oilali uch nafar farzandi bor.",
        phone: "+998903515747",
        telegram: "https://t.me/998903515747",
        instagram: "https://instagram.com/maxmudov9198",
        location: "https://yandex.uz/maps/-/CPQ3uGOW"
    }
    // Qolgan 28 ta o'quvchini shu formatda qo'shing...
];

// O'qituvchilar ma'lumotlari
const teachers = [
    {
        id: 1,
        name: "Abdugapparova Munojatxon",
        role: "Matematika va Iqtisod fanlari o'qituvchisi",
        image: "images/teachers/abdugapparova_munojatxon.png",
        bio: "O'qituvchi Matematika va Iqtisod fanlaridan uzoq yillardan buyon Toshkent shahridagi 119-umumiy o'rta ta'lim maktabida dars berib keladilar.",
        phone: "+998901234569"
    },
    {
        id: 2,
        name: "Fors tili O'qituvchisi",
        role: "Fors tili o'qituvchisi",
        image: "images/teachers/abdugapparova_munojatxon.png",
        bio: "Ikkinchi o'qituvchi haqida ma'lumot...",
        phone: "+998901234570"
    }
    // Qolgan 8 ta o'qituvchini qo'shing...
];

// Videolar ma'lumotlari
const videos = [
    {
        id: 1,
        title: "2010 yil bitiruv marosimi",
        youtubeId: "1ayYZNYM2ckEQ4j4" // YouTube video ID (URL'dan keyingi qism)
    },
    {
        id: 2,
        title: "Sinf xotiralari",
        youtubeId: "5avuo7WekzV-0Mtw"
    }
    // Qolgan videolarni qo'shing...
];

// O'quvchilarni sahifaga yuklash
function loadStudents() {
    const grid = document.getElementById('students-grid');
    
    students.forEach(student => {
        const card = document.createElement('div');
        card.className = 'card fade-in';
        card.onclick = () => openModal(student, 'student');
        
        card.innerHTML = `
            <img src="${student.image}" alt="${student.name}" class="card-image" 
                 onerror="this.src='https://via.placeholder.com/280x280/E5E5E5/0A66C2?text=${encodeURIComponent(student.name)}'">
            <div class="card-content">
                <h3 class="card-name">${student.name}</h3>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// O'qituvchilarni sahifaga yuklash
function loadTeachers() {
    const grid = document.getElementById('teachers-grid');
    
    teachers.forEach(teacher => {
        const card = document.createElement('div');
        card.className = 'card fade-in';
        card.onclick = () => openModal(teacher, 'teacher');
        
        card.innerHTML = `
            <img src="${teacher.image}" alt="${teacher.name}" class="card-image"
                 onerror="this.src='https://via.placeholder.com/280x280/E5E5E5/0A66C2?text=${encodeURIComponent(teacher.name)}'">
            <div class="card-content">
                <h3 class="card-name">${teacher.name}</h3>
                <p class="card-role">${teacher.role}</p>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Videolarni yuklash
function loadVideos() {
    const grid = document.getElementById('videos-grid');
    
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card fade-in';
        
        videoCard.innerHTML = `
            <div class="video-wrapper">
                <iframe 
                    src="https://www.youtube.com/embed/${video.youtubeId}" 
                    title="${video.title}"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div class="video-title">${video.title}</div>
        `;
        
        grid.appendChild(videoCard);
    });
}

// Modal oyna ochish
function openModal(person, type) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    
    let contactsHTML = '';
    if (type === 'student') {
        contactsHTML = `
            <div class="contact-section">
                <h3 class="contact-title">Bog'lanish</h3>
                <div class="contact-links">
                    ${person.phone ? `<a href="tel:${person.phone}" class="contact-link">📱 ${person.phone}</a>` : ''}
                    ${person.telegram ? `<a href="${person.telegram}" target="_blank" class="contact-link">✈️ Telegram</a>` : ''}
                    ${person.instagram ? `<a href="${person.instagram}" target="_blank" class="contact-link">📷 Instagram</a>` : ''}
                    ${person.location ? `<a href="${person.location}" target="_blank" class="contact-link">📍 Manzil</a>` : ''}
                </div>
            </div>
        `;
    } else if (person.phone) {
        contactsHTML = `
            <div class="contact-section">
                <h3 class="contact-title">Bog'lanish</h3>
                <div class="contact-links">
                    <a href="tel:${person.phone}" class="contact-link">📱 ${person.phone}</a>
                </div>
            </div>
        `;
    }
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal(this)">&times;</button>
            <div class="modal-header">
                <img src="${person.image}" alt="${person.name}" class="modal-image"
                     onerror="this.src='https://via.placeholder.com/700x350/E5E5E5/0A66C2?text=${encodeURIComponent(person.name)}'">
            </div>
            <div class="modal-body">
                <h2 class="modal-name">${person.name}</h2>
                ${person.role ? `<p class="modal-role">${person.role}</p>` : ''}
                <p class="modal-bio">${person.bio}</p>
                ${contactsHTML}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Modal tashqarisiga bosilganda yopish
    modal.onclick = (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    };
}

// Modal yopish
function closeModal(element) {
    const modal = element.closest('.modal');
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
}

// Scroll animatsiyalari
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => observer.observe(el));
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sahifa yuklanganda
window.addEventListener('DOMContentLoaded', () => {
    loadStudents();
    loadTeachers();
    loadVideos();
    handleScrollAnimations();
});

// ESC tugmasini bosish orqali modal yopish
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.querySelector('.modal.active');
        if (modal) {
            closeModal(modal);
        }
    }
});
// ========================================
// DARK MODE FUNCTIONALITY
// ========================================

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply saved preference on page load
if (isDarkMode) {
    body.classList.add('dark-mode');
    if (darkModeToggle) darkModeToggle.textContent = '☀️';
}

// Toggle dark mode
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        
        // Update icon
        darkModeToggle.textContent = isDark ? '☀️' : '🌙';
        
        // Save preference
        localStorage.setItem('darkMode', isDark);
    });
}
