
        document.addEventListener('DOMContentLoaded', function() {
             // --- Hero Animation Logic ---
            const awardCells = {
                cell1: document.getElementById('award-cell-1'), // Row 1, Pos 2
                cell2: document.getElementById('award-cell-2'), // Row 1, Pos 4
                cell3: document.getElementById('award-cell-3'), // Row 2, Pos 2
                cell4: document.getElementById('award-cell-4')  // Row 3, Pos 2
            };

            const awardSets = [
                { // Set 1: Based on "Clutch/Goodfirms" image
                    cell1: `<img src="Images/Clutch.webp" alt="Clutch Logo" width="80" height="22"><span class="award-title">Top B2B</span><span class="award-description">Providers in the Indian Emerging Tech Market for 2021</span>`,
                    cell2: `<img src="Images/GoodFirms.webp" alt="GoodFirms Logo" width="80" height="22"><span class="award-title">Top Shopify</span><span class="award-description">Development Companies in 2019</span>`,
                    cell3: `<img src="Images/Microsoft Solution Partner.webp" alt="Microsoft Logo" width="80" height="22"><span class="award-title">Solutions Partner</span><span class="award-description">Microsoft Cloud</span>`,
                    cell4: `<img src="Images/Clutch.webp" alt="Clutch Logo" width="80" height="22"><span class="award-title">Top 12</span><span class="award-description">out of 400 top Mobile App Developers in India, 2020</span>`
                },
                { // Set 2: Based on "CrowdReviews" image
                    cell1: `<img src="Images/Clutch.webp" alt="CrowdReviews Logo" width="80" height="22"><span class="award-title">#1 ASP.NET</span><span class="award-description">Development Company</span>`,
                    cell2: `<img src="Images/Clutch.webp" alt="CrowdReviews Logo" width="80" height="22"><span class="award-title">Top 10</span><span class="award-description">Web Development Company</span>`,
                    cell3: `<img src="Images/Microsoft Solution Partner.webp" alt="CrowdReviews Logo" width="80" height="22"><span class="award-title">Top 3</span><span class="award-description">E-Commerce Development Company</span>`,
                    cell4: `<img src="Images/Clutch.webp" alt="Clutch Logo" width="80" height="22"><span class="award-title">Top 1000</span><span class="award-description">B2B Companies 2018</span>`
                }
            ];
            
            let currentAwardSetIndex = 0;

            function updateAwards() {
                const cells = Object.values(awardCells);
                if (!cells.every(cell => cell)) return; 

                // Fade out
                cells.forEach(cell => cell.style.opacity = '0');

                // Wait for fade out, then update content and fade in
                setTimeout(() => {
                    const currentSet = awardSets[currentAwardSetIndex];
                    awardCells.cell1.innerHTML = currentSet.cell1;
                    awardCells.cell2.innerHTML = currentSet.cell2;
                    awardCells.cell3.innerHTML = currentSet.cell3;
                    awardCells.cell4.innerHTML = currentSet.cell4;
                    
                    cells.forEach(cell => cell.style.opacity = '1');
                    
                    currentAwardSetIndex = (currentAwardSetIndex + 1) % awardSets.length;
                }, 400); 
            }

            if (Object.values(awardCells).every(cell => cell)) {
                updateAwards(); 
                setInterval(updateAwards, 5000); 
            }

            // --- Mobile Menu Toggle ---
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

            // --- Services Tab Script ---
            const tabs = document.querySelectorAll('.sc-tabs-ele');
            const panels = document.querySelectorAll('.services-sc');
            
            tabs.forEach((tab, index) => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active'));
                    panels.forEach(p => p.classList.remove('active'));
                    tab.classList.add('active');
                    panels[index].classList.add('active');
                });
            });

            // --- Wide Range of Expertise Logic ---
            const expertiseBtns = document.querySelectorAll('.expertise-btn');
            const logosContainer = document.getElementById('expertise-logos-container');

            const expertiseData = {
                'Backend': [
                    { src: 'Images/Wide Range of Expertise/logos/codeigniter.webp', alt: 'CodeIgniter' },
                    { src: 'Images/Wide Range of Expertise/logos/laravel.webp', alt: 'Laravel' },
                    { src: 'Images/Wide Range of Expertise/logos/php.webp', alt: 'PHP' },
                    { src: 'Images/Wide Range of Expertise/logos/wordpress.webp', alt: 'WordPress' },
                    { src: 'Images/Wide Range of Expertise/logos/wix.webp', alt: 'Wix' }
                ],
                'Frontend': [
                    { src: 'Images/Wide Range of Expertise/logos/react.webp', alt: 'React' },
                    { src: 'Images/Wide Range of Expertise/logos/angular.webp', alt: 'Angular' },
                    { src: 'Images/Wide Range of Expertise/logos/vue.webp', alt: 'Vue.js' },
                    { src: 'Images/Wide Range of Expertise/logos/html5.webp', alt: 'HTML5' },
                    { src: 'Images/Wide Range of Expertise/logos/css3.webp', alt: 'CSS3' },
                    { src: 'Images/Wide Range of Expertise/logos/javascript.webp', alt: 'JavaScript' }
                ],
                'Data and Databases': [
                    { src: 'Images/Wide Range of Expertise/logos/mysql.webp', alt: 'MySQL' },
                    { src: 'Images/Wide Range of Expertise/logos/mongodb.webp', alt: 'MongoDB' },
                    { src: 'Images/Wide Range of Expertise/logos/postgresql.webp', alt: 'PostgreSQL' },
                    { src: 'Images/Wide Range of Expertise/logos/sql-server.webp', alt: 'SQL Server' },
                    { src: 'Images/Wide Range of Expertise/logos/oracle.webp', alt: 'Oracle' }
                ],
                'Quality Engineering': [
                    { src: 'Images/Wide Range of Expertise/logos/selenium.webp', alt: 'Selenium' },
                    { src: 'Images/Wide Range of Expertise/logos/jmeter.webp', alt: 'JMeter' },
                    { src: 'Images/Wide Range of Expertise/logos/postman.webp', alt: 'Postman' }
                ],
                'Mobile Apps & PWA': [
                    { src: 'Images/Wide Range of Expertise/logos/android.webp', alt: 'Android' },
                    { src: 'Images/Wide Range of Expertise/logos/ios.webp', alt: 'iOS' },
                    { src: 'Images/Wide Range of Expertise/logos/flutter.webp', alt: 'Flutter' },
                    { src: 'Images/Wide Range of Expertise/logos/react-native.webp', alt: 'React Native' }
                ],
                'Cloud & DevOps': [
                    { src: 'Images/Wide Range of Expertise/logos/aws.webp', alt: 'AWS' },
                    { src: 'Images/Wide Range of Expertise/logos/azure.webp', alt: 'Azure' },
                    { src: 'Images/Wide Range of Expertise/logos/docker.webp', alt: 'Docker' },
                    { src: 'Images/Wide Range of Expertise/logos/kubernetes.webp', alt: 'Kubernetes' }
                ],
                'Digital Experience Platforms': [
                    { src: 'Images/Wide Range of Expertise/logos/sitecore.webp', alt: 'Sitecore' },
                    { src: 'Images/Wide Range of Expertise/logos/adobe-experience-manager.webp', alt: 'Adobe Experience Manager' }
                ],
                'Shop/E-Commerce Platforms': [
                    { src: 'Images/Wide Range of Expertise/logos/shopify.webp', alt: 'Shopify' },
                    { src: 'Images/Wide Range of Expertise/logos/magento.webp', alt: 'Magento' },
                    { src: 'Images/Wide Range of Expertise/logos/woocommerce.webp', alt: 'WooCommerce' }
                ],
                'Project Management': [
                    { src: 'Images/Wide Range of Expertise/logos/jira.webp', alt: 'Jira' },
                    { src: 'Images/Wide Range of Expertise/logos/trello.webp', alt: 'Trello' },
                    { src: 'Images/Wide Range of Expertise/logos/asana.webp', alt: 'Asana' }
                ]
            };

            function displayLogos(category) {
                if (!logosContainer) return;
                
                logosContainer.innerHTML = ''; // Clear previous logos
                
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

                    // Update active button state
                    expertiseBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    // Display the logos for the clicked category
                    const category = btn.textContent.trim();
                    displayLogos(category);
                });
            });

            // Set the initial state on page load
            if (expertiseBtns.length > 0) {
                expertiseBtns[0].classList.add('active');
                displayLogos(expertiseBtns[0].textContent.trim());
            }
        });
