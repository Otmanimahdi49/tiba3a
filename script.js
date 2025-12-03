// ✅ Mobile Menu Toggle
document.querySelector(".mobile-menu-btn").onclick = function() {
    document.querySelector(".nav-links").classList.toggle("active");
};

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-btn')) {
        document.querySelector('.nav-links').classList.remove('active');
    }
});

// Design details for modal
const designDetails = {
    design1: {
        title: "خط عربي أنيق",
        description: "تصميم أنيق لكلمة 'أمل' بخط عربي معاصر بألوان متناسقة. هذا التصميم مثالي لمحبي الأناقة والبساطة مع لمسة عربية أصيلة.",
        features: ["طباعة عالية الجودة", "متوفر بجميع الألوان", "مقاسات من S إلى XXL", "مقاوم للغسيل المتكرر"],
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    design2: {
        title: "فينتاج ستريت وير",
        description: "تصميم فينتاج بألوان باهتة وأنماط كلاسيكية تناسب محبي الأناقة. مستوحى من موضة الشارع الكلاسيكية مع لمسات عصرية.",
        features: ["أسلوب فينتاج كلاسيكي", "ألوان باهتة طبيعية", "مقاسات من S إلى XXXL", "قابل للغسيل دون بهتان"],
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    design3: {
        title: "أنمي ملون",
        description: "تصميم أنمي ملون لشخصية كارتونية محبوبة بعناصر فنية رائعة. مثالي لعشاق الأنمي والرسوم المتحركة اليابانية.",
        features: ["ألوان زاهية ومشرقة", "طباعة دقيقة للتفاصيل", "مقاسات للكبار والصغار", "جودة عالية مقاومة للبهتان"],
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
};

// Modal functionality
const modal = document.getElementById('design-modal');
const closeModal = document.querySelector('.close-modal');
const designCards = document.querySelectorAll('.design-card');
const modalContent = document.getElementById('modal-content');

// Open modal when clicking on design card
designCards.forEach(card => {
    card.addEventListener('click', () => {
        const designId = card.getAttribute('data-modal');
        const design = designDetails[designId];
        
        if (design) {
            modalContent.innerHTML = `
                <h2 style="font-size: 2rem; margin-bottom: 20px; color: var(--dark-color);">${design.title}</h2>
                <img src="${design.image}" alt="${design.title}" style="width: 100%; border-radius: var(--radius); margin-bottom: 30px;" loading="lazy">
                <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 30px;">${design.description}</p>
                <h3 style="font-size: 1.5rem; margin-bottom: 15px;">مميزات التصميم:</h3>
                <ul style="list-style: none; margin-bottom: 30px;">
                    ${design.features.map(feature => `<li style="padding: 10px 0; border-bottom: 1px solid var(--gray-light); position: relative; padding-right: 25px;">
                        <i class="fas fa-check" style="color: var(--primary-green); position: absolute; right: 0;"></i>
                        ${feature}
                    </li>`).join('')}
                </ul>
                <a href="https://wa.me/212612345678?text=مرحباً، أريد طلب تصميم ${encodeURIComponent(design.title)}" class="whatsapp-btn-large" target="_blank" style="text-decoration: none; display: inline-block;">
                    <i class="fab fa-whatsapp"></i> اطلب هذا التصميم عبر واتساب
                </a>
            `;
            
            modal.style.display = 'flex';
        }
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ صفحة طباع - طباعة تيشيرتات حسب الطلب جاهزة للعمل!');
});