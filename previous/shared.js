// LANGUAGE TRANSLATION
const translations = {
    // I. SHARED
    // 1. Navbar/Header (including Hamburger)
    home: { vi: "TRANG CHỦ", en: "HOME" },
    company_information: { vi: "CÔNG TY", en: "COMPANY" },
    products: { vi: "SẢN PHẨM", en: "PRODUCTS" },
    projects: { vi: "DỰ ÁN", en: "PROJECTS"},
    contact: { vi: "LIÊN HỆ", en: "CONTACT US" },
    
    // 2. Header Items 
    // a. Company
    aboutus: {vi: "Về VINA LPG", en: "About VINA LPG"},

    // b. Products
    fillingsys: { vi: "Hệ thống nạp", en: "Filling Systems" },
    fillingcaro: { vi: "Máy nạp xoay tròn", en: "Filling Carousel" },
    standalonefm: { vi: "Standalone FM", en: "Standalone FM" },

    compressors: { vi: "Máy nén", en: "Compressors" },
    pumps: { vi: "Máy bơm", en: "Pumps" },
    valves: { vi: "Van", en: "Valves" },
    tankm: { vi: "Đo lường bể chứa", en: "Tank Measurement" },
    vapor: { vi: "Máy hóa hơi", en: "Vaporisers" },
    meter: { vi: "Hệ thống đo lường", en: "Meter" },
    lah: { vi: "Ống dẫn cần nạp", en: "Loading Arm Hoses" },

    // c. Projects
    customer_partner: { vi: "Khách hàng & đối tác", en: "Our Customers & Partners" },
    coreprojects: { vi: "Dự án cốt lõi", en: "Core Projects" },
    services: { vi: "Dịch vụ", en: "Services" },

    // 3. Search Bar 
    search_placeholder: { vi: "Tìm kiếm...", en: "Search..." },
    search_placeholder_overlay: { vi: "Gõ bất cứ thứ gì ở đây...", en: "Type anything here..." },

    // 4. Footer [Semi-WIP]
    // a. Main
    footer_text: { vi: "Cung cấp các giải pháp LPG và LNG chất lượng hàng đầu từ năm 2000.", en: "Providing top-notch LPG and LNG solutions since 2000." },
    
    // b. Quick Links
    quick_links: { vi: "LIÊN KẾT NHANH", en: "QUICK LINKS" },
    products_footer: { vi: "Sản phẩm", en: "Products" },
    tos: { vi: "Điều khoản dịch vụ", en: "Terms of Service" },


    // c. Contact
    contact_footer: { vi: "LIÊN HỆ", en: "CONTACT" },
    address: { vi: "Tầng 2, 181 Đường Cao Thắng, Phường Hòa Hưng, Quận 10, TP. Hồ Chí Minh", en: "Floor 2, 181 Cao Thang Street, Hoa Hung Ward, District 10, Ho Chi Minh City" },
    hours: { vi: "9:00-17:00 UTC+7", en: "9AM-5PM UTC+7" },
    business_days: {vi: "T2-T6:", en: "Mon-Fri:"},
    holidays: {vi: "T7, CN, Ngày lễ:", en: "Sat, Sun, Holidays:"},
    hours_closed: {vi: "Đóng cửa", en: "Closed"},


    // 5. Hamburger-specific
    follow_us: { vi: "THEO DÕI CHÚNG TÔI", en: "FOLLOW US" },
    

    // II. INDEX.HTML
    // 1. Hero 
    title: { vi: "VINA LPG", en: "VINA LPG" },
    title_other: { vi: "CO.,LTD", en: "CO.,LTD" },
    hero_text: { vi: "Cung cấp mọi công trình khí LPG - NG - CNG - SNG.", en: "Providing total solutions for LPG - NG - CNG - SNG." },
    get_started: { vi: "BẮT ĐẦU", en: "GET STARTED" },
    learn_more: { vi: "TÌM HIỂU THÊM", en: "LEARN MORE" },

    //2. Quote
    quote: { vi: "Chúng tôi cung cấp giải pháp toàn diện cho các yêu cầu về nhà ga và hệ thống khí đốt.", en: "We provide total solution to gas terminal and plant requirement." },
    subquote: { vi: "Với hơn 25 năm kinh nghiệm trong xây dựng nhà máy đóng chai khí hóa lỏng (LPG), bao gồm cả các dự án trọn gói hoặc cung cấp, lắp đặt và vận hành toàn bộ thiết bị nhà máy.", en: "More than 25 years experience in building of LPG bottling plant, including total turnkey project or supply, installation and commission of complete plant equipment." },


    // 3. Partners
    our_partners: { vi: "Đối tác", en: "Our Partners" },

    // 4. Images
    images_title: { vi: "Sản phẩm", en: "What we offer" },
    images_text: { vi: "Chúng tôi tin tưởng phục vụ khách hàng từ một thiết bị đơn lẻ đến toàn bộ thiết bị nhà máy.", en: "We believe in serving our customer from one item to a complete plant equipment." },
    filling: { vi: "Filling", en: "Filling" },
    tank: { vi: "Tank", en: "Tank" },
    ship: { vi: "Ship", en: "Ship" },
    comp: { vi: "Comp", en: "Comp" },
    pumptank: { vi: "Pump Bullet Tank", en: "Pump Bullet Tank" },
    vapor_other: { vi: "Vaporiser", en: "Vaporiser" },
    

    // III. ABOUTUS.HTML



};

function cleanSidebarPrefixes() {
    document.querySelectorAll('.side-menu .submenu-link').forEach(link => {
        link.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.textContent = node.textContent.replace(/^[^\p{L}\p{N}<]+/u, '');
            }
        });
    });
}

function setupBackToTopButton() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    button.innerHTML = '<span class="back-to-top-chevron" aria-hidden="true"></span>';
    document.body.appendChild(button);

    function updateBackToTopProgress() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;

        button.style.setProperty('--scroll-progress', `${progress * 360}deg`);
        button.classList.toggle('visible', scrollTop > 180);
    }

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', updateBackToTopProgress, { passive: true });
    window.addEventListener('resize', updateBackToTopProgress);
    updateBackToTopProgress();
}


// LANGUAGE FUNCTION (L)
let currentLang = 'vi'; // Default to Vietnamese

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[key] && translations[key][lang]) {
            // Handle different element types
            if (element.tagName === 'INPUT' && element.getAttribute('placeholder') !== null) {
                element.placeholder = translations[key][lang];
            } else if (element.tagName === 'IMG') {
                // Skip images - they don't need translation
                return;
            } else {
                element.textContent = translations[key][lang];
            }
        }
    });
    
    // Save preference to localStorage
    localStorage.setItem('vinalpg_language', lang);
}

// Initialize language from localStorage or default
function initLanguage() {
    const savedLang = localStorage.getItem('vinalpg_language');
    let langToUse = 'vi'; // default to Vietnamese
    
    if (savedLang && (savedLang === 'vi' || savedLang === 'en')) {
        langToUse = savedLang;
    }
    
    // Update button flag and text
    const currentFlagImg = document.querySelector('.navbar-right .lang-switch-btn img');
    const langCurrentSpan = document.querySelector('.navbar-right .lang-current');
    
    if (langToUse === 'vi') {
        if (currentFlagImg) {
            currentFlagImg.src = 'https://flagcdn.com/24x18/vn.png';
            currentFlagImg.srcset = 'https://flagcdn.com/48x36/vn.png 2x';
        }
        if (langCurrentSpan) langCurrentSpan.textContent = 'VI';
    } else {
        if (currentFlagImg) {
            currentFlagImg.src = 'https://flagcdn.com/24x18/us.png';
            currentFlagImg.srcset = 'https://flagcdn.com/48x36/us.png 2x';
        }
        if (langCurrentSpan) langCurrentSpan.textContent = 'EN';
    }
    
    // Update mobile button
    const mobileLangFlag = document.getElementById('mobileLangFlag');
    const mobileLangText = document.getElementById('mobileLangText');
    if (mobileLangFlag && mobileLangText) {
    if (langToUse === 'vi') {
        mobileLangFlag.src = 'https://flagcdn.com/24x18/vn.png';
        mobileLangText.textContent = 'VN';
    } else {
        mobileLangFlag.src = 'https://flagcdn.com/24x18/us.png';
        mobileLangText.textContent = 'US';
    }
}
    
    // Apply translations to all elements
    currentLang = langToUse;
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[key] && translations[key][langToUse]) {
            if (element.tagName === 'INPUT' && element.getAttribute('placeholder') !== null) {
                element.placeholder = translations[key][langToUse];
            } else if (element.tagName !== 'IMG') {
                element.textContent = translations[key][langToUse];
            }
        }
    });
}

// Switcher and dropdown
function setupLanguageSwitcher() {
    const langBtn = document.getElementById('langSwitchBtn');
    const dropdownMenu = document.getElementById('langDropdownMenu');
    const langOptions = document.querySelectorAll('.lang-option');
    const langCurrentSpan = document.querySelector('.lang-current');
    const currentFlagImg = document.querySelector('.lang-switch-btn img');
    
    // Toggle dropdown on button click
    if (langBtn) {
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show');
        });
    }
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (langBtn && !langBtn.contains(e.target) && dropdownMenu) {
            dropdownMenu.classList.remove('show');
        }
    });
    
    // Handle language selection
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const newLang = this.getAttribute('data-lang');
            if (newLang && newLang !== currentLang) {
                switchLanguage(newLang);
                
                // Update button flag and text
                if (newLang === 'vi') {
                    currentFlagImg.src = 'https://flagcdn.com/24x18/vn.png';
                    currentFlagImg.srcset = 'https://flagcdn.com/48x36/vn.png 2x';
                    langCurrentSpan.textContent = 'VI';
                } else {
                    currentFlagImg.src = 'https://flagcdn.com/24x18/us.png';
                    currentFlagImg.srcset = 'https://flagcdn.com/48x36/us.png 2x';
                    langCurrentSpan.textContent = 'EN';
                }
            }
            dropdownMenu.classList.remove('show');
        });
    });
}


// HAMBURGER
const hamburger = document.getElementById('hamburgerBtn');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('menuOverlay');

function toggleMenu() {
    hamburger.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    if (sideMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
        document.querySelectorAll('.submenu').forEach(sub => {
            sub.classList.remove('active');
        });
        document.querySelectorAll('.menu-link').forEach(link => {
            link.classList.remove('active');
        });
    }
}

if (hamburger && sideMenu && overlay) {
    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
}

// Dropdown submenus
document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
        const submenuId = this.getAttribute('data-dropdown');
        const submenu = document.getElementById(submenuId);
        if (submenu) {
            submenu.classList.toggle('active');
            this.classList.toggle('active');
        }
    });
});

document.querySelectorAll('.side-menu .submenu-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// Close menu when clicking links
document.querySelectorAll('.menu-link, .submenu-link, .social-link, .footer-social a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (!this.hasAttribute('data-dropdown')) {
            
        }
    });
});

// Mobile view toggle with Ctrl+Alt+M
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.altKey && e.key === 'm') {
        e.preventDefault();
        document.body.classList.toggle('mobile-view');
    }
});

// SEARCH
const searchOverlay = document.getElementById('searchOverlay');
const searchMobileBtn = document.getElementById('searchMobileBtn');
const searchCloseBtn = document.getElementById('searchCloseBtn');
const searchModalInput = document.getElementById('searchModalInput');
const searchResults = document.getElementById('searchResults');
const searchWrapper = document.querySelector('.search-wrapper');

// Define searchable content (bilingual)
const searchableContent = [
    { title_vi: "TRANG CHỦ", title_en: "HOME", url: "index.html", description_vi: "Trang chủ - Giới thiệu VINA LPG", description_en: "Home page - VINA LPG introduction" },
    { title_vi: "Về VINA LPG", title_en: "About VINA LPG", url: "aboutus.html", description_vi: "Thông tin về công ty VINA LPG", description_en: "About VINA LPG company" },
    { title_vi: "Khách hàng", title_en: "Our Customers", url: "#", description_vi: "Thông tin khách hàng của chúng tôi", description_en: "Our customers information" },
    { title_vi: "Hoạt động toàn cầu", title_en: "Global Operations", url: "#", description_vi: "Hoạt động toàn cầu", description_en: "Global operations" },
    { title_vi: "SẢN PHẨM & DỊCH VỤ", title_en: "PRODUCTS & SERVICES", url: "#", description_vi: "Sản phẩm và dịch vụ", description_en: "Products and services" },
    { title_vi: "TIN TỨC", title_en: "NEWS & UPDATES", url: "#", description_vi: "Tin tức và cập nhật", description_en: "News and updates" },
    { title_vi: "LIÊN HỆ", title_en: "CONTACT US", url: "#", description_vi: "Thông tin liên hệ", description_en: "Contact information" },
    { title_vi: "Bình LPG", title_en: "LPG Cylinders", url: "#", description_vi: "Bình LPG chất lượng cao", description_en: "High quality LPG cylinders" },
    { title_vi: "Giải pháp khí", title_en: "Gas solutions", url: "#", description_vi: "Giải pháp khí công nghiệp và thương mại", description_en: "Industrial and commercial gas solutions" },
    { title_vi: "BẮT ĐẦU", title_en: "GET STARTED", url: "#", description_vi: "Bắt đầu với VINA LPG", description_en: "Get started with VINA LPG" },
    { title_vi: "TÌM HIỂU THÊM", title_en: "LEARN MORE", url: "#", description_vi: "Tìm hiểu thêm về chúng tôi", description_en: "Learn more about us" },
    { title_vi: "Thiết bị đo lường", title_en: "Measuring Equipment", url: "#", description_vi: "Thiết bị đo lưu lượng, áp suất, nhiệt độ", description_en: "Flow, pressure, temperature measuring equipment" },
    { title_vi: "Bơm & Máy nén", title_en: "Pump & Compressor", url: "#", description_vi: "Hệ thống bơm và máy nén khí", description_en: "Liquid transfer pump & compression system" },
    { title_vi: "Van an toàn", title_en: "Safety Valves", url: "#", description_vi: "Van an toàn PRV, ESV, EFV", description_en: "Pressure relief valves, emergency shut off valves" }
];

function getSearchableContentForCurrentLang() {
    return searchableContent.map(item => ({
        title: currentLang === 'vi' ? item.title_vi : item.title_en,
        url: item.url,
        description: currentLang === 'vi' ? item.description_vi : item.description_en
    }));
}

function openSearchModal() {
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        searchModalInput.focus();
    }, 100);
}

function closeSearchModal() {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
    searchModalInput.value = '';
    searchResults.innerHTML = '';
}

function performSearch(query) {
    if (!query.trim()) {
        searchResults.innerHTML = '';
        return;
    }
    
    const lowerQuery = query.toLowerCase();
    const content = getSearchableContentForCurrentLang();
    const results = content.filter(item => 
        item.title.toLowerCase().includes(lowerQuery) || 
        item.description.toLowerCase().includes(lowerQuery)
    );
    
    displayResults(results, query);
}

function displayResults(results, query) {
    const noResultsText = currentLang === 'vi' ? 'Không tìm thấy kết quả cho "' : 'No results found for "';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="no-results">' + noResultsText + query + '"</div>';
        return;
    }
    
    searchResults.innerHTML = results.map(result => `
        <div class="search-result-item">
            <a href="${result.url}">
                <div>${highlightText(result.title, query)}</div>
                <div class="result-description">${highlightText(result.description, query)}</div>
            </a>
        </div>
    `).join('');
    
    document.querySelectorAll('.search-result-item a').forEach(link => {
        link.addEventListener('click', closeSearchModal);
    });
}

function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<span style="background: #2277BB; color: white; padding: 2px 4px; border-radius: 0px;">$1</span>');
}

// Open modal when clicking on search box (Desktop)
if (searchWrapper) {
    searchWrapper.addEventListener('click', function(e) {
        e.stopPropagation();
        openSearchModal();
    });
}

// Open modal when clicking on search box (Mobile)
if (searchMobileBtn) {
    searchMobileBtn.addEventListener('click', openSearchModal);
}

// Close modal events
if (searchCloseBtn) {
    searchCloseBtn.addEventListener('click', closeSearchModal);
}

if (searchOverlay) {
    searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
            closeSearchModal();
        }
    });
}

// Live search as user types in modal
if (searchModalInput) {
    searchModalInput.addEventListener('input', function(e) {
        performSearch(e.target.value);
    });
    
    searchModalInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && searchModalInput.value.trim()) {
            const firstResult = document.querySelector('.search-result-item a');
            if (firstResult) {
                window.location.href = firstResult.getAttribute('href');
                closeSearchModal();
            }
        }
    });
}


// Mobile language switcher
document.addEventListener('DOMContentLoaded', function() {
    cleanSidebarPrefixes();
    setupBackToTopButton();

    // Block dragstart on everything
    document.body.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG' || 
            e.target.getAttribute('style')?.includes('background-image') ||
            e.target.classList.contains('carousel-slide')) {
            e.preventDefault();
            return false;
        }
    });
    
    // Block context menu (right-click)
    document.body.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG' || 
            e.target.getAttribute('style')?.includes('background-image')) {
            e.preventDefault();
            return false;
        }
    });
    
    // Mobile language switcher inside hamburger menu
    const mobileLangTrigger = document.getElementById('mobileLangTrigger');
    const mobileLangSubmenu = document.getElementById('mobileLangSubmenu');
    const mobileLangOptions = document.querySelectorAll('.mobile-lang-option');
    const mobileLangFlag = document.getElementById('mobileLangFlag');
    const mobileLangText = document.getElementById('mobileLangText');

    if (mobileLangTrigger) {
        mobileLangTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            mobileLangSubmenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    mobileLangOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const newLang = this.getAttribute('data-lang');
            if (newLang && newLang !== currentLang) {
                switchLanguage(newLang);
                
                if (newLang === 'vi') {
                    mobileLangFlag.src = 'https://flagcdn.com/24x18/vn.png';
                    mobileLangText.textContent = 'VI';
                    
                    const desktopFlag = document.querySelector('.navbar-right .lang-switch-btn img');
                    const desktopText = document.querySelector('.navbar-right .lang-current');
                    if (desktopFlag) desktopFlag.src = 'https://flagcdn.com/24x18/vn.png';
                    if (desktopText) desktopText.textContent = 'VI';
                } else {
                    mobileLangFlag.src = 'https://flagcdn.com/24x18/us.png';
                    mobileLangText.textContent = 'EN';
                    
                    const desktopFlag = document.querySelector('.navbar-right .lang-switch-btn img');
                    const desktopText = document.querySelector('.navbar-right .lang-current');
                    if (desktopFlag) desktopFlag.src = 'https://flagcdn.com/24x18/us.png';
                    if (desktopText) desktopText.textContent = 'EN';
                }
            }
            mobileLangSubmenu.classList.remove('active');
            if (mobileLangTrigger) mobileLangTrigger.classList.remove('active');
        });
    });
    
    // Initialize language switcher
    setupLanguageSwitcher();
    initLanguage();
});
