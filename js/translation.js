// Translation system for APERTECH website
class TranslationSystem {
    constructor() {
        this.currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
        this.translations = {
            en: {
                // Navigation
                'nav-home': 'Home',
                'nav-about': 'About Us',
                'nav-services': 'Services',
                'nav-solutions': 'Solutions',
                'nav-partners': 'Partners & Clients',
                'nav-contact': 'Contact Us',
                
                // Services dropdown
                'nav-erp-consultancy': 'ERP Counsultancy',
                'nav-web-development': 'Web Development',
                'nav-erp-implementation': 'ERP Implementation',
                'nav-soft-implementation': 'Soft Implementation',
                'nav-business-analytics': 'Business Analytics',
                'nav-support': 'Support',
                
                // Banner section
                'banner-title': 'Best ERP Solutions. We are 100+ professional software engineers with more than 10 years of experience in delivering superior products.',
                'banner-learn-more': 'Learn More',
                
                // Industries section
                'industries-title': 'Our Products are used in industries such as:',
                'industry-construction': 'Construction',
                'industry-construction-desc': 'The construction industry is a dynamic and multifaceted sector that plays a crucial role in shaping the built environment.',
                'industry-production': 'Production',
                'industry-production-desc': 'The production industry encompasses a vast range of activities focused on manufacturing goods and delivering value through efficient processes.',
                'industry-oil-gas': 'Oil And Gas',
                'industry-oil-gas-desc': 'The oil and gas industry is a critical sector that powers economies worldwide by providing the energy resources essential for transportation, electricity generation, and industrial processes.',
                'industry-financial': 'Financial',
                'industry-financial-desc': 'The finance industry is a cornerstone of the global economy, encompassing a broad spectrum of services related to the management, investment, and allocation of capital.',
                'industry-government': 'Government sectors',
                'industry-government-desc': 'Government sectors encompass a broad range of public services, from law enforcement and defense to education, healthcare, infrastructure, and social services.',
                'industry-hospitality': 'Hospitality',
                'industry-hospitality-desc': 'The hospitality industry is a diverse and dynamic sector that includes businesses focused on providing services for travel, leisure, and accommodation.',
                
                // Services section
                'services-title-1': 'We deal with the aspects of professional',
                'services-title-2': 'ERP Services',
                'service-web-dev': 'Web Application Development',
                'service-web-dev-desc': 'We carry more than just good coding skills. Our experience makes us stand out from other web development.',
                'service-erp-impl': 'ERP implementation',
                'service-erp-impl-desc': 'We offer comprehensive ERP implementation services to help you streamline your business processes and unlock new levels of efficiency.',
                'service-soft-impl': 'Soft Implementation',
                'service-soft-impl-desc': 'We are here to assist you in navigating the process of implementing new software or upgrading your existing systems.',
                'service-analytics': 'Business Analytics',
                'service-analytics-desc': 'We offer comprehensive ERP business analytics services to help you harness the power of your data and drive informed decision-making for your organization.',
                'service-support': 'Support',
                'service-support-desc': 'Support of ERP systems is a key element of successful use of the platform for business management.',
                'service-consultancy': 'ERP Consultancy',
                'service-consultancy-desc': 'With ERP consulting services, we strive to empower your business with efficient processes, improved decision-making, and enhanced productivity.',
                'service-more-info': 'More info',
                
                // Clients section
                'clients-title': 'Our Clients and Projects',
                'clients-see-all': 'See All',
                'partners-title': 'Our Partners',
                
                // Call to action
                'cta-title-1': 'Preparing For Your Business',
                'cta-title-2': 'Success With ERP Solutions',
                'cta-meet-us': 'Meet With Us',
                
                // Footer
                'footer-description': 'We are a friendly business solutions consulting company providing all sizes of organization with leading-edge technology solutions.',
                'footer-pages': 'Pages',
                'footer-services': 'Services',
                'footer-contact': 'Contact Us',
                'footer-copyright': 'APERTECH Solutions. All Rights Reserved. © 2024'
            },
            az: {
                // Navigation
                'nav-home': 'Ana Səhifə',
                'nav-about': 'Haqqımızda',
                'nav-services': 'Xidmətlər',
                'nav-solutions': 'Həllər',
                'nav-partners': 'Tərəfdaşlar və Müştərilər',
                'nav-contact': 'Əlaqə',
                
                // Services dropdown
                'nav-erp-consultancy': 'ERP Məsləhətçiliyi',
                'nav-web-development': 'Veb İnkişaf',
                'nav-erp-implementation': 'ERP Tətbiqi',
                'nav-soft-implementation': 'Proqram Tətbiqi',
                'nav-business-analytics': 'Biznes Analitikası',
                'nav-support': 'Dəstək',
                
                // Banner section
                'banner-title': 'Ən Yaxşı ERP Həlləri. Biz 10 ildən çox təcrübəyə malik 100+ peşəkar proqram mühəndisiyik və üstün məhsullar təqdim edirik.',
                'banner-learn-more': 'Ətraflı',
                
                // Industries section
                'industries-title': 'Məhsullarımız aşağıdakı sahələrdə istifadə olunur:',
                'industry-construction': 'Tikinti',
                'industry-construction-desc': 'Tikinti sənayesi tikilmiş mühiti formalaşdırmada mühüm rol oynayan dinamik və çoxölçülü sektordur.',
                'industry-production': 'İstehsalat',
                'industry-production-desc': 'İstehsalat sənayesi səmərəli proseslər vasitəsilə mallar istehsal etməyə və dəyər yaratmağa yönəlmiş geniş fəaliyyət spektrini əhatə edir.',
                'industry-oil-gas': 'Neft və Qaz',
                'industry-oil-gas-desc': 'Neft və qaz sənayesi nəqliyyat, elektrik istehsalı və sənaye prosesləri üçün vacib olan enerji resurslarını təmin edərək dünya iqtisadiyyatlarını gücləndirən kritik sektordur.',
                'industry-financial': 'Maliyyə',
                'industry-financial-desc': 'Maliyyə sənayesi kapitalın idarə edilməsi, investisiya və bölgüsü ilə bağlı geniş xidmət spektrini əhatə edən qlobal iqtisadiyyatın əsas sütunudur.',
                'industry-government': 'Dövlət sektorları',
                'industry-government-desc': 'Dövlət sektorları hüquq mühafizəsi və müdafiədən təhsil, səhiyyə, infrastruktur və sosial xidmətlərə qədər geniş ictimai xidmət spektrini əhatə edir.',
                'industry-hospitality': 'Qonaqpərvərlik',
                'industry-hospitality-desc': 'Qonaqpərvərlik sənayesi səyahət, asudə vaxt və yaşayış xidmətləri təmin etməyə yönəlmiş müəssisələri əhatə edən müxtəlif və dinamik sektordur.',
                
                // Services section
                'services-title-1': 'Biz peşəkar',
                'services-title-2': 'ERP Xidmətlərinin aspektləri ilə məşğul oluruq',
                'service-web-dev': 'Veb Tətbiq İnkişafı',
                'service-web-dev-desc': 'Biz yalnız yaxşı kodlaşdırma bacarıqlarından daha çoxunu daşıyırıq. Təcrübəmiz bizi digər veb inkişafdan fərqləndirir.',
                'service-erp-impl': 'ERP tətbiqi',
                'service-erp-impl-desc': 'Biznes proseslərinizi optimallaşdırmaq və yeni səmərəlilik səviyyələrinə çatmaq üçün hərtərəfli ERP tətbiq xidmətləri təklif edirik.',
                'service-soft-impl': 'Proqram Tətbiqi',
                'service-soft-impl-desc': 'Yeni proqram tətbiq etmək və ya mövcud sistemlərinizi yeniləmək prosesində sizə kömək etmək üçün buradayıq.',
                'service-analytics': 'Biznes Analitikası',
                'service-analytics-desc': 'Məlumatlarınızın gücündən istifadə etmək və təşkilatınız üçün məlumatlı qərarlar qəbul etmək üçün hərtərəfli ERP biznes analitikası xidmətləri təklif edirik.',
                'service-support': 'Dəstək',
                'service-support-desc': 'ERP sistemlərinin dəstəyi biznes idarəetməsi platformasının uğurlu istifadəsinin əsas elementidir.',
                'service-consultancy': 'ERP Məsləhətçiliyi',
                'service-consultancy-desc': 'ERP məsləhətçilik xidmətləri ilə biznesinizi səmərəli proseslər, təkmilləşdirilmiş qərarvermə və artırılmış məhsuldarlıqla gücləndirməyə çalışırıq.',
                'service-more-info': 'Ətraflı məlumat',
                
                // Clients section
                'clients-title': 'Müştərilərimiz və Layihələrimiz',
                'clients-see-all': 'Hamısını Gör',
                'partners-title': 'Tərəfdaşlarımız',
                
                // Call to action
                'cta-title-1': 'Biznesiniz üçün hazırlaşırıq',
                'cta-title-2': 'ERP Həlləri ilə Uğur',
                'cta-meet-us': 'Bizimlə Əlaqə Saxla',
                
                // Footer
                'footer-description': 'Biz bütün ölçülü təşkilatlara ən müasir texnoloji həllər təqdim edən dostluq biznes həlləri məsləhətçilik şirkətiyik.',
                'footer-pages': 'Səhifələr',
                'footer-services': 'Xidmətlər',
                'footer-contact': 'Əlaqə',
                'footer-copyright': 'APERTECH Həlləri. Bütün hüquqlar qorunur. © 2024'
            }
        };
        
        this.init();
    }
    
    init() {
        this.applyTranslations();
        this.setupLanguageSwitcher();
    }
    
    applyTranslations() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translations[this.currentLanguage][key];
            if (translation) {
                element.textContent = translation;
            }
        });
    }
    
    switchLanguage(language) {
        this.currentLanguage = language;
        localStorage.setItem('selectedLanguage', language);
        this.applyTranslations();
        this.updateLanguageSwitcher();
    }
    
    setupLanguageSwitcher() {
        // Create language switcher if it doesn't exist
        if (!document.getElementById('language-switcher')) {
            this.createLanguageSwitcher();
        }
        this.updateLanguageSwitcher();
    }
    
    createLanguageSwitcher() {
        const switcher = document.createElement('div');
        switcher.id = 'language-switcher';
        switcher.className = 'language-switcher';
        switcher.innerHTML = `
            <div class="language-dropdown">
                <button class="language-btn" id="current-lang-btn">
                    <span class="lang-text">${this.currentLanguage === 'en' ? 'EN' : 'AZ'}</span>
                    <i class="fa fa-chevron-down"></i>
                </button>
                <div class="language-options" id="language-options">
                    <div class="language-option" data-lang="en">
                        <span class="lang-text">English</span>
                    </div>
                    <div class="language-option" data-lang="az">
                        <span class="lang-text">Azərbaycan</span>
                    </div>
                </div>
            </div>
        `;
        
        // Insert after header
        const header = document.getElementById('header');
        if (header) {
            header.appendChild(switcher);
        }
        
        // Add event listeners
        const btn = document.getElementById('current-lang-btn');
        const options = document.getElementById('language-options');
        const optionElements = document.querySelectorAll('.language-option');
        
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            options.classList.toggle('show');
        });
        
        optionElements.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.getAttribute('data-lang');
                this.switchLanguage(lang);
                options.classList.remove('show');
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            options.classList.remove('show');
        });
    }
    
    updateLanguageSwitcher() {
        const btn = document.getElementById('current-lang-btn');
        const langText = btn.querySelector('.lang-text');
        
        if (this.currentLanguage === 'en') {
            langText.textContent = 'EN';
        } else {
            langText.textContent = 'AZ';
        }
    }
}

// Initialize translation system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.translationSystem = new TranslationSystem();
});
