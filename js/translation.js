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
                'footer-copyright': 'APERTECH Solutions. All Rights Reserved. © 2024',
                
                // About Page
                'about-company-title': 'About Company',
                'about-description-1': 'APERTECH is the partner of choice for many of the leading enterprises. We help businesses elevate their value through custom software development, product design, QA and consultancy services.',
                'about-description-2': 'We are a friendly business solutions consulting company providing all sizes of organization with leading-edge technology solutions. We were formed with the aim of assisting organizations in using modern technology with a close relationship and continual personal interaction between our staff and the client.',
                'about-description-3': 'Our standard support contract gives the customer a guaranteed time period to receive a response for his/her support request. The standard on-site response is offered within four hours, although for critical devices, this can be much faster. Through the use of remote access, most responses and resolutions occur within a matter of minutes. By using remote access and online monitoring, we are immediately informed when any problem occurs.',
                'about-description-4': 'We also provide a pay-as-you-go support option that means you don\'t have to worry about binding long-term contracts.',
                'about-experience': 'Experience',
                'about-experience-desc': 'Our great team of more than 20 software experts.',
                'about-quick-support': 'Quick Support',
                'about-quick-support-desc-1': 'We\'ll help you test bold new ideas while sharing your.',
                'about-quick-support-desc-2': 'Deep and broad product,industry and technical expertise.',
                'about-projects-done': 'Projects Done',
                'about-number-services': 'Number of Services',
                'about-number-employees': 'Number of Employees',
                'about-glorious-years': 'Glorious Years',
                'about-transform-title': 'Transform Your Business With The Leading ERP Solution provider.',
                'about-transform-desc': 'We listen. We advise. We design, together. Happy customers and ongoing relationships are what we strive for. Success is measured by results, the most important being how our clients feel about their experience with us.',
                'about-production': 'Production',
                'about-construction': 'Construction',
                'about-oil-gas': 'Oil and Gas',
                'about-financial': 'Financial',
                'about-government-procurement': 'Government Sectors Procurement',
                'about-hospitality-finance': 'Hospitality Finance & Management',
                'about-monitoring-title-1': 'Real Time Monitoring Your Infrastructure',
                'about-monitoring-title-2': 'Branded Digital Solutions',
                'about-monitoring-subtitle': 'Transform your business with cutting-edge technology solutions',
                'about-data-analytics': 'Data Analytics',
                'about-data-analytics-desc': 'Transform raw data into actionable insights',
                'about-web-development': 'Web Development',
                'about-web-development-desc': 'Build powerful and scalable web applications',
                'about-ui-ux-design': 'UI/UX Design',
                'about-ui-ux-design-desc': 'Create intuitive and engaging user experiences',
                'about-qa-testing': 'QA & Testing',
                'about-qa-testing-desc': 'Ensure quality and reliability of your software',
                'about-dedicated-team': 'Dedicated Team',
                'about-dedicated-team-desc': 'Expert professionals committed to your success',
                'about-experience-execution': 'EXPERIENCE. EXECUTION. EXCELLENCE.',
                'about-what-we-do': 'What We Actually Do',
                'about-csharp-title': 'C# Development Services',
                'about-csharp-desc': 'C# is a general-purpose programming language with a diverse range of features from strong typing to lexical scoping. It\'s widely used for developing web applications, web services, and desktop applications. C# is multi-paradigm, declarative, functional, generic, component-oriented.',
                'about-react-title': 'React JS Development Services',
                'about-react-desc': 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
                'about-erp-title': 'ERP Software',
                'about-erp-desc': 'Enterprise resource planning (ERP) refers to a type of software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations.',
                'about-net-title': '.NET Development Services',
                'about-net-desc': 'The .NET Framework provides extensive tools and class libraries that make it one of the most productive platforms for programmers. It offers multi-language support, common APIs and other services that allow developers to build high-quality applications in less time.',
                'about-js-title': 'JavaScript Development Services',
                'about-js-desc': 'JavaScript is a lightweight programming language that web developers commonly use to create more dynamic interactions when developing web pages, applications, servers, and or even games.',
                'about-java-title': 'Java Development Services',
                'about-java-desc': 'Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved from humble beginnings to power a large share of today\'s digital world, by providing the reliable platform upon which many services and applications are built.',
                'about-ts-title': 'TypeScript Website Development Services',
                'about-ts-desc': 'TypeScript is a strongly typed, object-oriented, compiled programming language that builds on JavaScript. It is a superset of the JavaScript language, designed to give you better tooling at any scale.',
                
                // Services Page
                'services-offer-title': 'We offer the following services:',
                'services-erp-consultancy-desc': 'We offers advisory support to help companies implement an efficient ERP solution or maximize the value of existing ERP software.',
                'services-erp-implementation-desc': 'This process includes the integration of various business functions, such as finance, operations and human resources (HR), into a single system.',
                'services-soft-implementation-desc': 'We work closely with you to understand your specific requirements and recommend the best software solutions that fit your business model.',
                'services-business-analytics-desc': 'With access to real-time and wholistic data, you can reduce your organization\'s financial statement revision rate.',
                'services-web-development-desc': 'We carry more than just good coding skills. Our experience makes us stand out from other web development.',
                'services-support-desc': 'Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.',
                
                // Solutions Page
                'solutions-offer-title': 'We offer following solutions for mid and big companies:',
                'solutions-sunsystems-title': 'Infor SunSystems',
                'solutions-sunsystems-desc': 'More than 18,000 organizations in 180 countries around the world use Infor FMS SunSystems to manage their financial and economic activity. It has 27 language versions, local support, unique flexibility and ability to respond quickly to changes in the business environment and legislative regulation, Infor FMS SunSystems is an ideal choice for enterprises that want to connect the hard financial control with flexible commercial processes.',
                'solutions-syteline-title': 'Infor Syteline',
                'solutions-syteline-desc': 'Discrete and process manufacturers around the world use Infor® SyteLine on-premises and in the cloud to simplify and automate their complex manufacturing processes. Offering a range of capabilities from advanced planning and material management to financials, SyteLine® delivers everything manufacturers need in a standard package.',
                'solutions-query-analysis-title': 'Infor Query & Analysis',
                'solutions-query-analysis-desc': 'Infor Query and Analysis for SunSystems is a powerful, ad-hoc querying and analysis tool that gives employees at all levels of your organization immediate access to the information that\'s relevant to their roles and tasks to make informed recommendations and strategic decisions.',
                'solutions-genesis-title': 'Genesis Soft',
                'solutions-genesis-desc-1': 'Genesis Soft is a business management software similar to ERP systems. It helps companies streamline daily operations by integrating key functions.',
                'solutions-genesis-desc-2': 'Its purpose is to unify business processes in one system, reduce manual work, and provide better control over company performance.',
                'solutions-sola-erp-title': 'Sola ERP',
                'solutions-sola-erp-desc-1': 'Sola ERP is a type of software that helps organizations manage and integrate their core business processes in a single system.',
                'solutions-sola-erp-desc-2': 'The main goal of ERP is to improve efficiency, transparency, and collaboration across all departments by centralizing data and workflows.',
                'solutions-sola-hr-title': 'Sola HR',
                'solutions-sola-hr-desc': 'HRB is a highly flexible HR & Payroll system with its own algorithm language. This gives availability to customize calculations of any difficulty.',
                
                // Contact Page
                'contact-address': 'Address',
                'contact-phone': 'Phone',
                'contact-email': 'E-Mail',
                'contact-hesitate-title': 'Do Not Hesitate To Contact Us',
                'contact-write-title': 'Write Now............',
                'contact-form-name': 'Name *',
                'contact-form-email': 'Email *',
                'contact-form-phone': 'Phone Number *',
                'contact-form-company': 'Company Name *',
                'contact-form-website': 'Website',
                'contact-form-country': 'Country *',
                'contact-form-business-line': 'Business Line *',
                'contact-form-message': 'Message *',
                'contact-form-send': 'Send',
                'contact-form-success': 'Your message sent successfully !'
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
                'footer-copyright': 'APERTECH Həlləri. Bütün hüquqlar qorunur. © 2024',
                
                // About Page
                'about-company-title': 'Şirkət Haqqında',
                'about-description-1': 'APERTECH aparıcı müəssisələrin çoxu üçün seçilmiş tərəfdaşdır. Bizneslərin dəyərini fərdi proqram təminatı inkişafı, məhsul dizaynı, QA və məsləhətçilik xidmətləri vasitəsilə artırmağa kömək edirik.',
                'about-description-2': 'Biz bütün ölçülü təşkilatlara ən müasir texnoloji həllər təqdim edən dostluq biznes həlləri məsləhətçilik şirkətiyik. Müasir texnologiyadan istifadə etməkdə təşkilatlara kömək etmək məqsədi ilə yaradılmışıq, işçilərimiz və müştəri arasında yaxın əlaqə və davamlı şəxsi qarşılıqlı əlaqə ilə.',
                'about-description-3': 'Standart dəstək müqaviləmiz müştəriyə dəstək sorğusu üçün cavab almaq üçün zəmanətli vaxt müddəti verir. Standart sahədə cavab dörd saat ərzində təklif olunur, baxmayaraq ki, kritik cihazlar üçün bu daha sürətli ola bilər. Uzaqdan giriş istifadə etməklə, əksər cavablar və həllər bir neçə dəqiqə ərzində baş verir. Uzaqdan giriş və onlayn monitorinq istifadə etməklə, hər hansı problem yarananda dərhal məlumatlandırılırıq.',
                'about-description-4': 'Həmçinin ödəyəcəyiniz qədər dəstək seçimi təklif edirik ki, bu da uzunmüddətli müqavilələrlə bağlı narahat olmamağınız deməkdir.',
                'about-experience': 'Təcrübə',
                'about-experience-desc': '20-dən çox proqram ekspertindən ibarət böyük komandamız.',
                'about-quick-support': 'Sürətli Dəstək',
                'about-quick-support-desc-1': 'Sizin cəsarətli yeni ideyalarınızı sınaqdan keçirməyə kömək edəcəyik.',
                'about-quick-support-desc-2': 'Dərin və geniş məhsul, sənaye və texniki ekspertizası.',
                'about-projects-done': 'Tamamlanmış Layihələr',
                'about-number-services': 'Xidmətlərin Sayı',
                'about-number-employees': 'İşçilərin Sayı',
                'about-glorious-years': 'Şərəfli İllər',
                'about-transform-title': 'Aparıcı ERP Həlləri təminatçısı ilə Biznesinizi Transformasiya Edin.',
                'about-transform-desc': 'Dinləyirik. Məsləhət veririk. Birlikdə dizayn edirik. Məmnun müştərilər və davamlı əlaqələr axtardığımızdır. Uğur nəticələrlə ölçülür, ən vacibi müştərilərimizin bizimlə təcrübələri haqqında necə hiss etmələridir.',
                'about-production': 'İstehsalat',
                'about-construction': 'Tikinti',
                'about-oil-gas': 'Neft və Qaz',
                'about-financial': 'Maliyyə',
                'about-government-procurement': 'Dövlət Sektorları Satınalma',
                'about-hospitality-finance': 'Qonaqpərvərlik Maliyyəsi və İdarəetməsi',
                'about-monitoring-title-1': 'İnfrastrukturunuzu Real Vaxtda Monitorinq',
                'about-monitoring-title-2': 'Brendli Rəqəmsal Həllər',
                'about-monitoring-subtitle': 'Biznesinizi ən müasir texnoloji həllərlə transformasiya edin',
                'about-data-analytics': 'Məlumat Analitikası',
                'about-data-analytics-desc': 'Xam məlumatları hərəkətə keçirilə bilən məlumatlara çevirin',
                'about-web-development': 'Veb İnkişaf',
                'about-web-development-desc': 'Güclü və miqyaslanabilən veb tətbiqləri qurun',
                'about-ui-ux-design': 'UI/UX Dizayn',
                'about-ui-ux-design-desc': 'İntuitiv və cəlbedici istifadəçi təcrübələri yaradın',
                'about-qa-testing': 'QA və Test',
                'about-qa-testing-desc': 'Proqram təminatınızın keyfiyyətini və etibarlılığını təmin edin',
                'about-dedicated-team': 'Həsr Olunmuş Komanda',
                'about-dedicated-team-desc': 'Uğurunuza həsr olunmuş ekspert peşəkarlar',
                'about-experience-execution': 'TƏCRÜBƏ. İCRA. MÜKƏMMƏLLİK.',
                'about-what-we-do': 'Əslində Nə Edirik',
                'about-csharp-title': 'C# İnkişaf Xidmətləri',
                'about-csharp-desc': 'C# güclü tipləşdirmədən leksikal əhatə dairəsinə qədər müxtəlif xüsusiyyətlərə malik ümumi məqsədli proqramlaşdırma dilidir. Veb tətbiqləri, veb xidmətləri və masaüstü tətbiqləri inkişaf etdirmək üçün geniş istifadə olunur. C# çox paradigma, deklarativ, funksional, ümumi, komponent yönümlüdür.',
                'about-react-title': 'React JS İnkişaf Xidmətləri',
                'about-react-desc': 'React interaktiv UI-lar yaratmağı ağrısız edir. Tətbiqinizdəki hər vəziyyət üçün sadə görünüşlər dizayn edin və React məlumatlarınız dəyişəndə düzgün komponentləri səmərəli şəkildə yeniləyəcək və render edəcək.',
                'about-erp-title': 'ERP Proqram Təminatı',
                'about-erp-desc': 'Müəssisə resurs planlaşdırması (ERP) təşkilatların mühasibat, satınalma, layihə idarəetməsi, risk idarəetməsi və uyğunluq və təchizat zənciri əməliyyatları kimi gündəlik biznes fəaliyyətlərini idarə etmək üçün istifadə etdiyi proqram təminatı növünə aiddir.',
                'about-net-title': '.NET İnkişaf Xidmətləri',
                'about-net-desc': '.NET Framework geniş alətlər və sinif kitabxanaları təqdim edir ki, bu da onu proqramçılar üçün ən məhsuldar platformalardan birinə çevirir. Çoxdilli dəstək, ümumi API-lər və digər xidmətlər təklif edir ki, bu da inkişafçıların daha az vaxtda yüksək keyfiyyətli tətbiqlər qurmasına imkan verir.',
                'about-js-title': 'JavaScript İnkişaf Xidmətləri',
                'about-js-desc': 'JavaScript veb inkişafçıların veb səhifələr, tətbiqlər, serverlər və hətta oyunlar inkişaf etdirərkən daha dinamik qarşılıqlı əlaqələr yaratmaq üçün ümumiyyətlə istifadə etdiyi yüngül proqramlaşdırma dilidir.',
                'about-java-title': 'Java İnkişaf Xidmətləri',
                'about-java-desc': 'Java 1995-ci ildə Sun Microsystems tərəfindən ilk dəfə buraxılan proqramlaşdırma dili və hesablama platformasıdır. Təvazökar başlanğıclardan inkişaf edərək, bir çox xidmət və tətbiqlərin qurulduğu etibarlı platforma təmin etməklə bugünkü rəqəmsal dünyanın böyük hissəsini gücləndirir.',
                'about-ts-title': 'TypeScript Veb Sayt İnkişaf Xidmətləri',
                'about-ts-desc': 'TypeScript JavaScript üzərində qurulan güclü tipləşdirilmiş, obyekt yönümlü, tərtib edilmiş proqramlaşdırma dilidir. Bu JavaScript dilinin supersetidir və istənilən miqyasda daha yaxşı alətlər vermək üçün nəzərdə tutulub.',
                
                // Services Page
                'services-offer-title': 'Aşağıdakı xidmətləri təklif edirik:',
                'services-erp-consultancy-desc': 'Şirkətlərə səmərəli ERP həlli tətbiq etməkdə və ya mövcud ERP proqram təminatının dəyərini maksimuma çatdırmaqda kömək etmək üçün məsləhətçilik dəstəyi təklif edirik.',
                'services-erp-implementation-desc': 'Bu proses mühasibat, əməliyyat və insan resursları (HR) kimi müxtəlif biznes funksiyalarının tək sistemə inteqrasiyasını əhatə edir.',
                'services-soft-implementation-desc': 'Sizin xüsusi tələblərinizi başa düşmək və biznes modelinizə uyğun ən yaxşı proqram həllərini tövsiyə etmək üçün sizinlə sıx əməkdaşlıq edirik.',
                'services-business-analytics-desc': 'Real vaxt və bütövlükdə məlumatlara girişlə təşkilatınızın maliyyə hesabatı düzəliş dərəcəsini azalda bilərsiniz.',
                'services-web-development-desc': 'Biz yalnız yaxşı kodlaşdırma bacarıqlarından daha çoxunu daşıyırıq. Təcrübəmiz bizi digər veb inkişafdan fərqləndirir.',
                'services-support-desc': 'Proqram təminatınızın hərtərəfli, çoxmərhələli test və auditini həyata keçirmək üçün ekspertlərimizə müraciət edin.',
                
                // Solutions Page
                'solutions-offer-title': 'Orta və böyük şirkətlər üçün aşağıdakı həlləri təklif edirik:',
                'solutions-sunsystems-title': 'Infor SunSystems',
                'solutions-sunsystems-desc': 'Dünyada 180 ölkədə 18,000-dən çox təşkilat maliyyə və iqtisadi fəaliyyətlərini idarə etmək üçün Infor FMS SunSystems istifadə edir. 27 dil versiyası, yerli dəstək, unikal çeviklik və biznes mühitində və qanunvericilik tənzimləməsində dəyişikliklərə tez cavab vermək qabiliyyəti ilə Infor FMS SunSystems sərt maliyyə nəzarətini çevik kommersiya prosesləri ilə birləşdirmək istəyən müəssisələr üçün ideal seçimdir.',
                'solutions-syteline-title': 'Infor Syteline',
                'solutions-syteline-desc': 'Dünyada diskret və proses istehsalçıları mürəkkəb istehsal proseslərini sadələşdirmək və avtomatlaşdırmaq üçün Infor® SyteLine-i yerli və bulud mühitində istifadə edirlər. Qabaqcıl planlaşdırma və material idarəetməsindən maliyyəyə qədər geniş imkanlar təklif edən SyteLine® istehsalçıların ehtiyac duyduğu hər şeyi standart paketdə təqdim edir.',
                'solutions-query-analysis-title': 'Infor Query & Analysis',
                'solutions-query-analysis-desc': 'SunSystems üçün Infor Query və Analysis təşkilatınızın bütün səviyyələrindəki işçilərə rolları və vəzifələri ilə əlaqəli məlumatlara dərhal giriş təmin edən güclü, ad-hoc sorğu və analiz alətidir ki, bu da məlumatlı tövsiyələr və strategiyə qərarlar qəbul etməyə imkan verir.',
                'solutions-genesis-title': 'Genesis Soft',
                'solutions-genesis-desc-1': 'Genesis Soft ERP sistemlərinə bənzər biznes idarəetmə proqram təminatıdır. Şirkətlərin əsas funksiyaları inteqrasiya etməklə gündəlik əməliyyatları optimallaşdırmağına kömək edir.',
                'solutions-genesis-desc-2': 'Məqsədi biznes proseslərini tək sistemdə birləşdirmək, əl işini azaltmaq və şirkət performansı üzərində daha yaxşı nəzarət təmin etməkdir.',
                'solutions-sola-erp-title': 'Sola ERP',
                'solutions-sola-erp-desc-1': 'Sola ERP təşkilatların əsas biznes proseslərini tək sistemdə idarə etməkdə və inteqrasiya etməkdə kömək edən proqram təminatı növüdür.',
                'solutions-sola-erp-desc-2': 'ERP-in əsas məqsədi məlumatları və iş axınlarını mərkəzləşdirməklə bütün şöbələr arasında səmərəlilik, şəffaflıq və əməkdaşlığı təkmilləşdirməkdir.',
                'solutions-sola-hr-title': 'Sola HR',
                'solutions-sola-hr-desc': 'HRB öz alqoritm dilinə malik yüksək çevik HR və Əməkhaqqı sistemidir. Bu, hər hansı çətinlik hesablamalarını fərdiləşdirmək imkanı verir.',
                
                // Contact Page
                'contact-address': 'Ünvan',
                'contact-phone': 'Telefon',
                'contact-email': 'E-Poçt',
                'contact-hesitate-title': 'Bizimlə Əlaqə Saxlamaqdan Çəkinməyin',
                'contact-write-title': 'İndi Yazın............',
                'contact-form-name': 'Ad *',
                'contact-form-email': 'E-Poçt *',
                'contact-form-phone': 'Telefon Nömrəsi *',
                'contact-form-company': 'Şirkət Adı *',
                'contact-form-website': 'Veb Sayt',
                'contact-form-country': 'Ölkə *',
                'contact-form-business-line': 'Biznes Sahəsi *',
                'contact-form-message': 'Mesaj *',
                'contact-form-send': 'Göndər',
                'contact-form-success': 'Mesajınız uğurla göndərildi !'
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
