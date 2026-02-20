// ================================
// KOMŞU HAC UMRE TURİZM
// Main JavaScript File
// ================================

// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
}

// ================================
// FAQ Accordion
// ================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
        question.addEventListener('click', () => {
            const wasActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    }
});

// ================================
// Gallery Lightbox
// ================================
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');

function openLightbox(index) {
    const item = galleryItems[index];
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-caption');
    
    if (lightbox && lightboxImg && img) {
        lightboxImg.src = img.src;
        if (caption && lightboxCaption) {
            lightboxCaption.textContent = caption.textContent;
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// ================================
// Package Detail Panel (Hac Paketleri)
// ================================
const packageData = {
    1: {
        title: '2026 Hac Dönemi - VIP',
        details: `
            <h3>VIP Hac Paketi Detayları</h3>
            <div style="margin-top: 2rem;">
                <h4>Konaklama:</h4>
                <ul style="margin-left: 2rem; line-height: 2;">
                    <li>Mekke: 5 Yıldızlı - Harem'e 200m</li>
                    <li>Medine: 5 Yıldızlı - Ravza Manzaralı</li>
                    <li>VIP odalar, Harem manzaralı</li>
                </ul>
                
                <h4 style="margin-top: 1.5rem;">Ulaşım:</h4>
                <ul style="margin-left: 2rem; line-height: 2;">
                    <li>Türk Hava Yolları Business Class</li>
                    <li>VIP transfer araçları</li>
                    <li>Tüm ziyaretler dahil</li>
                </ul>
                
                <h4 style="margin-top: 1.5rem;">Yemek:</h4>
                <ul style="margin-left: 2rem; line-height: 2;">
                    <li>Açık büfe - 3 öğün</li>
                    <li>Türk mutfağı</li>
                    <li>Özel menüler</li>
                </ul>
                
                <h4 style="margin-top: 1.5rem;">Rehberlik:</h4>
                <ul style="margin-left: 2rem; line-height: 2;">
                    <li>Deneyimli din görevlisi</li>
                    <li>24 saat destek</li>
                    <li>Özel rehberlik hizmeti</li>
                </ul>
                
                <p style="margin-top: 2rem; padding: 1.5rem; background: #FAFAF7; border-radius: 8px;">
                    <strong>Fiyat:</strong> Detaylı bilgi için lütfen bizimle iletişime geçin.<br>
                    <strong>Telefon:</strong> 0312 123 45 67
                </p>
            </div>
        `
    },
    2: {
        title: 'Standart Hac Paketi',
        details: `
            <h3>Standart Hac Paketi Detayları</h3>
            <div style="margin-top: 2rem;">
                <h4>Konaklama:</h4>
                <ul style="margin-left: 2rem; line-height: 2;">
                    <li>4 Yıldızlı oteller</li>
                    <li>Harem'e 400m mesafe</li>
                    <li>Konforlu odalar</li>
                </ul>
                
                <h4 style="margin-top: 1.5rem;">Ulaşım:</h4>
                <ul style="margin-left: 2rem; line-height: 2;">
                    <li>Türk Hava Yolları Economy</li>
                    <li>Klimalı transfer araçları</li>
                </ul>
                
                <h4 style="margin-top: 1.5rem;">Yemek:</h4>
                <ul style="margin-left: 2rem; line-height: 2;">
                    <li>3 öğün yemek dahil</li>
                    <li>Açık büfe</li>
                </ul>
                
                <p style="margin-top: 2rem; padding: 1.5rem; background: #FAFAF7; border-radius: 8px;">
                    <strong>İletişim:</strong> 0312 123 45 67
                </p>
            </div>
        `
    },
    3: {
        title: 'Ekonomi Hac Paketi',
        details: `
            <h3>Ekonomi Hac Paketi Detayları</h3>
            <div style="margin-top: 2rem;">
                <h4>Konaklama:</h4>
                <ul style="margin-left: 2rem; line-height: 2;">
                    <li>3 Yıldızlı oteller</li>
                    <li>Temiz ve konforlu</li>
                </ul>
                
                <h4 style="margin-top: 1.5rem;">Ulaşım:</h4>
                <ul style="margin-left: 2rem; line-height: 2;">
                    <li>Charter uçuş</li>
                    <li>Otobüs transferleri</li>
                </ul>
                
                <p style="margin-top: 2rem; padding: 1.5rem; background: #FAFAF7; border-radius: 8px;">
                    <strong>Bütçe Dostu Seçenek</strong><br>
                    Detaylar için: 0312 123 45 67
                </p>
            </div>
        `
    },
    4: {
        title: 'Konforlu Hac Paketi',
        details: '<h3>Konforlu Hac Paketi</h3><p>5 Yıldızlı otellerde konaklama. Detaylar için 0312 123 45 67</p>'
    },
    5: {
        title: 'Aile Hac Paketi',
        details: '<h3>Aile Hac Paketi</h3><p>Aile odaları ve özel hizmetler. Detaylar için 0312 123 45 67</p>'
    },
    6: {
        title: 'Genç Hac Paketi',
        details: '<h3>Genç Hac Paketi</h3><p>Gençlere özel ekonomik paket. Detaylar için 0312 123 45 67</p>'
    }
};

function showPackageDetail(packageId) {
    const detailPanel = document.getElementById('packageDetail');
    const detailContent = document.getElementById('detailContent');
    
    if (detailPanel && detailContent && packageData[packageId]) {
        detailContent.innerHTML = packageData[packageId].details;
        detailPanel.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closePackageDetail() {
    const detailPanel = document.getElementById('packageDetail');
    if (detailPanel) {
        detailPanel.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Close detail panel with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePackageDetail();
    }
});

// ================================
// Umre Package Filter
// ================================
function filterPackages() {
    const durationFilter = document.getElementById('durationFilter');
    const hotelFilter = document.getElementById('hotelFilter');
    const packagesGrid = document.getElementById('umrePackagesGrid');
    
    if (!durationFilter || !hotelFilter || !packagesGrid) return;
    
    const durationValue = durationFilter.value;
    const hotelValue = hotelFilter.value;
    
    const packages = packagesGrid.querySelectorAll('.package-card');
    
    packages.forEach(pkg => {
        const pkgDuration = pkg.getAttribute('data-duration');
        const pkgHotel = pkg.getAttribute('data-hotel');
        
        let showPackage = true;
        
        if (durationValue !== 'all' && pkgDuration !== durationValue) {
            showPackage = false;
        }
        
        if (hotelValue !== 'all' && pkgHotel !== hotelValue) {
            showPackage = false;
        }
        
        if (showPackage) {
            pkg.style.display = 'block';
            setTimeout(() => {
                pkg.style.opacity = '1';
                pkg.style.transform = 'translateY(0)';
            }, 10);
        } else {
            pkg.style.opacity = '0';
            pkg.style.transform = 'translateY(20px)';
            setTimeout(() => {
                pkg.style.display = 'none';
            }, 300);
        }
    });
}

// ================================
// Contact Form
// ================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !phone || !message) {
            alert('Lütfen tüm zorunlu alanları doldurun.');
            return;
        }
        
        // Success message
        alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.\n\nTeşekkür ederiz.');
        
        // Reset form
        contactForm.reset();
    });
}

// ================================
// Smooth Scroll for Anchor Links
// ================================
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

// ================================
// Intersection Observer for Animations
// ================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
const animatedElements = document.querySelectorAll('.feature-card, .tour-card, .testimonial-card, .package-card, .hotel-card, .service-card, .guide-card');

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ================================
// Console Welcome Message
// ================================
console.log('%c🕋 Komşu Hac Umre Turizm', 'font-size: 20px; font-weight: bold; color: #0F3D2E;');
console.log('%cŞanlıurfa Merkezli - 25 Yıllık Tecrübe', 'font-size: 14px; color: #C9A646;');
console.log('%cWebsite by Modern Web Technologies', 'font-size: 12px; color: #5A5A5A;');
