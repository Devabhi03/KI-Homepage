 
        document.addEventListener('DOMContentLoaded', function() {
            const heroGrid = document.getElementById('heroGrid');
            const animationPhases = [
                `
                <div class="grid-row">
                    <div class="grid-square" style="background-color: #7646D7;">Transform</div>
                    <div class="grid-square award-cell"><img src="Images/Clutch.webp" alt="CrowdReviews Logo" width="80" height="22"><span class="award-title">#1 ASP.NET</span><span class="award-description">Development Company</span></div>
                    <div class="grid-square" style="background-color: #CFA9FF;">Convert</div>
                    <div class="grid-square award-cell"><img src="Images/Clutch.webp" alt="CrowdReviews Logo" width="80" height="22"><span class="award-title">Top 10</span><span class="award-description">Web Development Company</span></div>
                </div>
                <div class="grid-row">
                    <div class="grid-square" style="background-color: #CFA9FF;">Attract</div>
                    <div class="grid-square award-cell"><img src="Images/Microsoft Solution Partner.webp" alt="Microsoft Logo" width="80" height="22"><span class="award-title">Top 3</span><span class="award-description">E-Commerce Development Company</span></div>
                    <div class="grid-square" style="background-color: #CFA9FF;">Growth</div>
                </div>
                <div class="grid-row">
                    <div class="grid-square" style="background-color: #CFA9FF;">Strategy</div>
                    <div class="grid-square award-cell"><img src="Images/Clutch.webp" alt="Clutch Logo" width="80" height="22"><span class="award-title">Top 1000</span><span class="award-description">B2B Companies 2018</span></div>
                </div>
                `,
                `
                <div class="grid-row">
                    <div class="grid-square" style="background-color: #CFA9FF;">Transform</div>
                    <div class="grid-square award-cell"><img src="Images/Clutch.webp" alt="Clutch Logo" width="80" height="22"><span class="award-title">Top B2B</span><span class="award-description">Providers in the Indian Emerging Tech Market for<br>2021</span></div>
                    <div class="grid-square" style="background-color: #CFA9FF;">Convert</div>
                    <div class="grid-square award-cell"><img src="Images/GoodFirms.webp" alt="GoodFirms Logo" width="80" height="22"><span class="award-title">Top Shopify</span><span class="award-description">Development Companies in<br>2019</span></div>
                </div>
                <div class="grid-row">
                    <div class="grid-square" style="background-color: #CFA9FF;">Attract</div>
                    <div class="grid-square award-cell cell-microsoft"><img src="Images/Microsoft Solution Partner.webp" alt="Microsoft Logo" width="80" height="22"><span class="award-title">Solutions Partner</span><span class="award-description">Microsoft Cloud</span></div>
                    <div class="grid-square" style="background-color: #CFA9FF;">Growth</div>
                </div>
                <div class="grid-row">
                    <div class="grid-square" style="background-color: #CFA9FF;">Strategy</div>
                    <div class="grid-square award-cell"><img src="Images/Clutch.webp" alt="Clutch Logo" width="80" height="22"><span class="award-title">Top 12</span><span class="award-description">out of 400 top Mobile App Developers in India, 2020</span></div>
                </div>
                `,
                `
                <div class="grid-row">
                    <div class="grid-square award-cell"><img src="Images/Clutch.webp" alt="CrowdReviews Logo" width="80" height="22"><span class="award-title">#1 ASP.NET</span><span class="award-description">Development Company</span></div>
                    <div class="grid-square" style="background-color: #CFA9FF;">Transform</div>
                    <div class="grid-square award-cell cell-microsoft"><img src="Images/Microsoft Solution Partner.webp" alt="Microsoft Logo" width="80" height="22"><span class="award-title">Top 3</span><span class="award-description">E-Commerce Development Company</span></div>
                    <div class="grid-square" style="background-color: #CFA9FF;">Strategy</div>
                </div>
                <div class="grid-row">
                    <div class="grid-square award-cell"><img src="Images/Clutch.webp" alt="CrowdReviews Logo" width="80" height="22"><span class="award-title">Top 10</span><span class="award-description">Web Development Company</span></div>
                    <div class="grid-square" style="background-color: #CFA9FF;">Attract</div>
                    <div class="grid-square award-cell"><img src="Images/Clutch.webp" alt="Clutch Logo" width="80" height="22"><span class="award-title">Top 1000</span><span class="award-description">B2B Companies 2018</span></div>
                </div>
                <div class="grid-row">
                    <div class="grid-square" style="background-color: #CFA9FF;">Convert</div>
                    <div class="grid-square" style="background-color: #CFA9FF;">Growth</div>
                </div>
                `,
                `
                <div class="grid-row">
                    <div class="grid-square award-cell"><img src="Images/Clutch.webp" alt="Clutch Logo" width="80" height="22"><span class="award-title">Top B2B</span><span class="award-description">Providers in the Indian Emerging Tech Market for<br>2021</span></div>
                    <div class="grid-square" style="background-color: #CFA9FF;">Attract</div>
                    <div class="grid-square award-cell"><img src="Images/GoodFirms.webp" alt="GoodFirms Logo" width="80" height="22"><span class="award-title">Top Shopify</span><span class="award-description">Development Companies in<br>2019</span></div>
                    <div class="grid-square" style="background-color: #CFA9FF;">Growth</div>
                </div>
                <div class="grid-row">
                    <div class="grid-square" style="background-color: #CFA9FF;">Transform</div>
                    <div class="grid-square" style="background-color: #CFA9FF;">Convert</div>
                    <div class="grid-square award-cell"><img src="Images/Clutch.webp" alt="Clutch Logo" width="80" height="22"><span class="award-title">Top 12</span><span class="award-description">out of 400 top Mobile App Developers in India, 2020</span></div>
                </div>
                <div class="grid-row">
                    <div class="grid-square award-cell cell-microsoft"><img src="Images/Microsoft Solution Partner.webp" alt="Microsoft Logo" width="80" height="22"><span class="award-title">Solutions Partner</span><span class="award-description">Microsoft Cloud</span></div>
                    <div class="grid-square" style="background-color: #CFA9FF;">Strategy</div>
                </div>
                `
            ];
            let currentPhaseIndex = 0;
            function updateHeroGrid() {
                if (!heroGrid) return;
                heroGrid.style.opacity = '0';
                setTimeout(() => {
                    heroGrid.innerHTML = animationPhases[currentPhaseIndex];
                    heroGrid.style.opacity = '1';
                    currentPhaseIndex = (currentPhaseIndex + 1) % animationPhases.length;
                }, 400);
            }
            if (heroGrid) {
                updateHeroGrid();
                setInterval(updateHeroGrid, 2500); 
            }
            const toggler = document.querySelector('.navbar-toggler');
            const menu = document.getElementById('mobileMenu');
            if (toggler && menu) {
                toggler.addEventListener('click', () => {
                    menu.classList.toggle('active');
                    toggler.classList.toggle('active');
                    const isExpanded = toggler.getAttribute('aria-expanded') === 'true';
                    toggler.setAttribute('aria-expanded', !isExpanded);
                });
            }

            const tabs = document.querySelectorAll('.sc-tabs-ele');
            const panels = document.querySelectorAll('.services-sc');
            
            tabs.forEach((tab, index) => {
                if (window.innerWidth <= 767) {
                    tab.after(panels[index]);
                }

                tab.addEventListener('click', () => {
                    if (window.innerWidth <= 767) {
                        const isActive = tab.classList.contains('active');
                        tabs.forEach(t => t.classList.remove('active'));
                        panels.forEach(p => p.classList.remove('active'));
                        if (!isActive) {
                            tab.classList.add('active');
                            panels[index].classList.add('active');
                        }
                    } 
                    else {
                        tabs.forEach(t => t.classList.remove('active'));
                        panels.forEach(p => p.classList.remove('active'));
                        tab.classList.add('active');
                        panels[index].classList.add('active');
                    }
                });
            });
            
            const expertiseBtns = document.querySelectorAll('.expertise-btn');
            const logosContainer = document.getElementById('expertise-logos-container');
            const expertiseData = {
                'Backend': [{ src: 'Images/Wide Range of Expertise/logos/codeigniter.webp', alt: 'CodeIgniter' }, { src: 'Images/Wide Range of Expertise/logos/laravel.webp', alt: 'Laravel' }, { src: 'Images/Wide Range of Expertise/logos/php.webp', alt: 'PHP' }, { src: 'Images/Wide Range of Expertise/logos/wordpress.webp', alt: 'WordPress' }, { src: 'Images/Wide Range of Expertise/logos/wix.webp', alt: 'Wix' }],
                'Frontend': [{ src: 'Images/Wide Range of Expertise/logos/react.webp', alt: 'React' }, { src: 'Images/Wide Range of Expertise/logos/angular.webp', alt: 'Angular' }, { src: 'Images/Wide Range of Expertise/logos/vue.webp', alt: 'Vue.js' }, { src: 'Images/Wide Range of Expertise/logos/html5.webp', alt: 'HTML5' }, { src: 'Images/Wide Range of Expertise/logos/css3.webp', alt: 'CSS3' }, { src: 'Images/Wide Range of Expertise/logos/javascript.webp', alt: 'JavaScript' }],
                'Data and Databases': [{ src: 'Images/Wide Range of Expertise/logos/mysql.webp', alt: 'MySQL' }, { src: 'Images/Wide Range of Expertise/logos/mongodb.webp', alt: 'MongoDB' }, { src: 'Images/Wide Range of Expertise/logos/postgresql.webp', alt: 'PostgreSQL' }, { src: 'Images/Wide Range of Expertise/logos/sql-server.webp', alt: 'SQL Server' }, { src: 'Images/Wide Range of Expertise/logos/oracle.webp', alt: 'Oracle' }],
                'Quality Engineering': [{ src: 'Images/Wide Range of Expertise/logos/selenium.webp', alt: 'Selenium' }, { src: 'Images/Wide Range of Expertise/logos/jmeter.webp', alt: 'JMeter' }, { src: 'Images/Wide Range of Expertise/logos/postman.webp', alt: 'Postman' }],
                'Mobile Apps & PWA': [{ src: 'Images/Wide Range of Expertise/logos/android.webp', alt: 'Android' }, { src: 'Images/Wide Range of Expertise/logos/ios.webp', alt: 'iOS' }, { src: 'Images/Wide Range of Expertise/logos/flutter.webp', alt: 'Flutter' }, { src: 'Images/Wide Range of Expertise/logos/react-native.webp', alt: 'React Native' }],
                'Cloud & DevOps': [{ src: 'Images/Wide Range of Expertise/logos/aws.webp', alt: 'AWS' }, { src: 'Images/Wide Range of Expertise/logos/azure.webp', alt: 'Azure' }, { src: 'Images/Wide Range of Expertise/logos/docker.webp', alt: 'Docker' }, { src: 'Images/Wide Range of Expertise/logos/kubernetes.webp', alt: 'Kubernetes' }],
                'Digital Experience Platforms': [{ src: 'Images/Wide Range of Expertise/logos/sitecore.webp', alt: 'Sitecore' }, { src: 'Images/Wide Range of Expertise/logos/adobe-experience-manager.webp', alt: 'Adobe Experience Manager' }],
                'Shop/E-Commerce Platforms': [{ src: 'Images/Wide Range of Expertise/logos/shopify.webp', alt: 'Shopify' }, { src: 'Images/Wide Range of Expertise/logos/magento.webp', alt: 'Magento' }, { src: 'Images/Wide Range of Expertise/logos/woocommerce.webp', alt: 'WooCommerce' }],
                'Project Management': [{ src: 'Images/Wide Range of Expertise/logos/jira.webp', alt: 'Jira' }, { src: 'Images/Wide Range of Expertise/logos/trello.webp', alt: 'Trello' }, { src: 'Images/Wide Range of Expertise/logos/asana.webp', alt: 'Asana' }]
            };
            function displayLogos(category) {
                if (!logosContainer) return;
                logosContainer.innerHTML = '';
                const logos = expertiseData[category];
                if (logos && logos.length > 0) {
                    logos.forEach(logo => {
                        const img = document.createElement('img');
                        img.src = logo.src;
                        img.alt = logo.alt;
                        logosContainer.appendChild(img);
                    });
                }
            }
            expertiseBtns.forEach(btn => {
                btn.addEventListener('click', (event) => {
                    event.preventDefault();
                    expertiseBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const category = btn.textContent.trim();
                    displayLogos(category);
                });
            });
            if (expertiseBtns.length > 0) {
                expertiseBtns[0].classList.add('active');
                displayLogos(expertiseBtns[0].textContent.trim());
            }

            const showMoreBtn = document.querySelector('.show-more-btn');
            const industryWrapper = document.querySelector('.sc-box-wrapper');

            if (showMoreBtn && industryWrapper) {
                showMoreBtn.addEventListener('click', () => {
                    industryWrapper.classList.add('show-all');
                });
            }
        });