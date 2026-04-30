$(document).ready(function() {
    lucide.createIcons();

    const root = document.documentElement;
    const $themeToggle = $('#theme-toggle');
    const supportsCustomCursor = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (supportsCustomCursor) {
        const body = document.body;
        const dot = document.querySelector('.cursor-dot');
        const ring = document.querySelector('.cursor-ring');
        let dotX = 0;
        let dotY = 0;
        let ringX = 0;
        let ringY = 0;
        let mouseX = 0;
        let mouseY = 0;
        let hasMouseMoved = false;

        const renderCursor = () => {
            if (hasMouseMoved) {
                dotX += (mouseX - dotX) * 0.45;
                dotY += (mouseY - dotY) * 0.45;
                ringX += (mouseX - ringX) * 0.16;
                ringY += (mouseY - ringY) * 0.16;

                dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
                ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
            }

            requestAnimationFrame(renderCursor);
        };

        document.addEventListener('mousemove', (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
            if (!hasMouseMoved) {
                dotX = ringX = mouseX;
                dotY = ringY = mouseY;
                hasMouseMoved = true;
            }
            body.classList.add('cursor-active');
        });

        document.addEventListener('mouseleave', () => {
            body.classList.remove('cursor-active', 'cursor-hover');
        });

        document.querySelectorAll('a, button, .nav-link, .project-link, .project-filter-btn, .journey-filter-btn, .theme-toggle, .social-link').forEach((element) => {
            element.addEventListener('mouseenter', () => body.classList.add('cursor-hover'));
            element.addEventListener('mouseleave', () => body.classList.remove('cursor-hover'));
        });

        renderCursor();
    }

    function initParticles(theme) {
        if (window.pJSDom && window.pJSDom.length) {
            window.pJSDom.forEach(instance => {
                instance.pJS.fn.vendors.destroypJS();
            });
            window.pJSDom = [];
            $('#particles-js').empty();
        }

        const isDark = theme === 'dark';

        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": isDark ? "#8b8bff" : "#333366" },
                "shape": { "type": "circle" },
                "opacity": { "value": isDark ? 0.55 : 0.4, "random": false },
                "size": { "value": isDark ? 3.4 : 3, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": isDark ? "#8b8bff" : "#666699",
                    "opacity": isDark ? 0.22 : 0.3,
                    "width": 1
                },
                "move": { "enable": true, "speed": 3, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "repulse": { "distance": 100, "duration": 0.4 },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }

    function applyTheme(theme, persist = true) {
        const isDark = theme === 'dark';
        root.setAttribute('data-theme', theme);
        $themeToggle.attr('aria-pressed', String(isDark));
        $themeToggle.attr('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
        initParticles(theme);

        if (persist) {
            localStorage.setItem('portfolio-theme', theme);
        }
    }

    applyTheme(root.getAttribute('data-theme') || 'light', false);

    $themeToggle.on('click', function() {
        const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
    });

    function moveIndicator($activeLink) {
        const $indicator = $('#tab-indicator');
        if($activeLink.length === 0) return;
        const newLeft = $activeLink.position().left;
        const newWidth = $activeLink.outerWidth();
        $indicator.css({
            left: newLeft + 'px',
            width: newWidth + 'px'
        });
    }
    const $navLinks = $('.nav-link');
    const $tabContents = $('.tab-content');
    
    // Hide all tab contents except the first one.
    // Also fixes the issue of having two project tabs by hiding them correctly.
    $('#about-content').show();
    $('.tab-content').not('#about-content').hide();

    const $initialActive = $('.nav-link.active');
    if($initialActive.length) {
        moveIndicator($initialActive);
    }
    $navLinks.on('click', function() {
        const $this = $(this);
        if($this.hasClass('active')) {
            return;
        }
        const targetTab = $this.data('tab');
        const targetContentId = '#' + targetTab + '-content';
        $('.nav-link.active').removeClass('active');
        $this.addClass('active');
        moveIndicator($this);
        $('.tab-content:visible').stop(true, true).fadeOut(180, function() {
            $(targetContentId).stop(true, true).fadeIn(220, function() {
                if(targetContentId === '#skills-content') {
                    $('.skill-progress-fill').each(function() {
                        $(this).css('width', $(this).data('progress'));
                    });
                }
            });
        });
    });
    function syncActiveTabIndicator() {
        const $activeLink = $('.nav-link.active');
        const $indicator = $('#tab-indicator');

        if($activeLink.length === 0 || $indicator.length === 0) {
            return;
        }

        $indicator.addClass('!transition-none');
        moveIndicator($activeLink);
        $indicator[0].offsetHeight;
        $indicator.removeClass('!transition-none');
    }

    $(window).on('resize orientationchange', function() {
        requestAnimationFrame(syncActiveTabIndicator);
    });

    requestAnimationFrame(syncActiveTabIndicator);
    $('.journey-filter-btn').on('click', function() {
        const $this = $(this);
        if($this.hasClass('active')) {
            return;
        }
        const filterValue = $this.data('journey-filter');
        $('.journey-filter-btn').removeClass('active');
        $this.addClass('active');
        $('.journey-card:visible').stop(true, true).fadeOut(160).promise().done(function() {
            $(`.journey-card[data-journey-content="${filterValue}"]`).stop(true, true).fadeIn(200);
        });
    });

    /* --- START: DYNAMIC PROJECT SECTION CODE --- */
    
    const myProjects = [
        {
            title: 'Velofy',
            category: 'React.js',
            image: "assets/img/velofy.png",
            description: 'A modern, single-page application built with React for a seamless user experience.',
            liveLink: 'https://velofy-five.vercel.app/'
        },
        {
            title: 'Photo Enhancer Tool',
            category: 'Next.js',
            image: "assets/img/pht.png",
            description: 'An efficient photo enhancement platform powered by Next.js, designed for speed and seamless user experience.',
            liveLink: 'https://photo-enhancer-tool-iota.vercel.app/'
        },
        {
            title: 'Close Protection',
            category: 'Next.js',
            image: "assets/img/cpal.png",
            description: 'A fast and secure website for a security agency, built with Next.js.',
            liveLink: 'https://security-and-transportation.vercel.app/'
        },
        {
            title: 'Trimix',
            category: 'Web Development',
            image: 'assets/img/TRIMIX.png',
            description: 'A responsive and performant website for a business client.',
            liveLink: 'https://trimix.vercel.app/'
        },
        {
            title: 'Nippon International Trading Motors',
            category: 'Web Development',
            image: 'assets/img/nippon.png',
            description: 'A modern, optimized business site crafted for performance and professional appeal.',
            liveLink: 'https://nippon-international-trading-motors.vercel.app/'
        },
        {
            title: 'Allyzent',
            category: 'Web Development',
            image: 'assets/img/allyzent.png',
            description: 'A clean and user-friendly marketing website focused on usability.',
            liveLink: 'https://allyzent.vercel.app/'
        },
        {
            title: 'Synquix',
            category: 'Web Development',
            image: 'assets/img/synquix.png',
            description: 'A corporate website showcasing a portfolio of digital services.',
            liveLink: 'https://synquix.com/'
        },
        {
            title: 'TechNova',
            category: 'Web Development',
            image: 'assets/img/Nova.png',
            description: 'A modern and sleek landing page designed for a technology startup.',
            liveLink: 'https://tech-nova-alpha.vercel.app/'
        },
        {
            title: 'Simple Tire Dashboard',
            category: 'CRM',
            image: 'assets/img/simple-tire-crm.png',
            description: 'A streamlined CRM designed to optimize management and improve business efficiency.',
            liveLink: 'https://simple-tyrr.vercel.app/'
        },
        {
            title: 'Leads Management Dashboard',
            category: 'CRM',
            image: 'assets/img/leads-management-crm.png',
            description: 'An elegant and High Performing CRM built to enhance the client’s Business.',
            liveLink: 'https://master-lead-dashboard.vercel.app/'
        },
        {
            title: 'Sample Management Dashboard',
            category: 'Next.js',
            image: 'assets/img/sample-management-crm.png',
            description: 'A powerful and elegant CRM designed to streamline operations and elevate business performance.',
            liveLink: 'https://sample-dashboard-alpha-eight.vercel.app/'
        },
        {
            title: 'Solid',
            category: 'React.js',
            image: 'assets/img/Nova2.png',
            description: 'An interactive web application demonstrating modern UI/UX principles with React.',
            liveLink: 'https://solidwebsite.vercel.app/'
        },
        {
            title: 'Salary Calculator',
            category: 'React.js',
            image: 'assets/img/salary-calculator.png',
            description: 'An interactive salary calculator built with React, showcasing clean design and smooth user experience.',
            liveLink: 'https://react-salary-calculator.vercel.app/'
        },
        {
            title: 'AutoElegance',
            category: 'Web Development',
            image: 'assets/img/Nova3.png',
            description: 'An elegant and visually appealing website for an automotive business.',
            liveLink: 'https://auto-elegenace.vercel.app/'
        }
    ];

    // --- Function to display projects in the grid ---
    function renderProjects(filter = 'all') {
        const projectGrid = $('#projects-content .grid');
        
        const filteredProjects = (filter === 'all')
            ? myProjects
            : myProjects.filter(p => p.category.toLowerCase().replace('.js', '').replace(/\s/g, '-') === filter);

        projectGrid.empty(); 

        if (filteredProjects.length === 0) {
                projectGrid.html('<p class="text-center text-[var(--text-secondary)] col-span-2">No projects found in this category.</p>');
                return;
        }
        
        filteredProjects.forEach(project => {
            const projectCategorySlug = project.category.toLowerCase().replace('.js', '').replace(/\s/g, '-');
            // === JAVASCRIPT FIX FOR IMAGE ===
            const projectCardHTML = `
                <div class="project-card" data-project-category="${projectCategorySlug}">
                    <div class="project-image-wrapper">
                        <img src="${project.image}" alt="${project.title} Project" class="project-image">
                        <div class="project-overlay">
                            <a href="${project.liveLink}" target="_blank" class="project-link" title="Live Demo">
                                <i data-lucide="arrow-up-right"></i>
                            </a>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-2 mb-3">
                            <span class="project-tag">${project.category}</span>
                        </div>
                        <h4 class="text-xl font-bold text-[var(--text-primary)] mb-2">${project.title}</h4>
                        <p class="text-[var(--text-secondary)]">${project.description}</p>
                    </div>
                </div>
            `;
            projectGrid.append(projectCardHTML);
        });
        lucide.createIcons();
    }

    // --- Function to create the filter buttons dynamically ---
    function createFilterButtons() {
        const filterWrapper = $('.project-filter-wrapper');
        const categories = ['All', ...new Set(myProjects.map(p => p.category))];

        filterWrapper.empty();

        categories.forEach(category => {
            const filterSlug = (category === 'All') ? 'all' : category.toLowerCase().replace('.js', '').replace(/\s/g, '-');
            const button = `
                <button class="project-filter-btn" data-project-filter="${filterSlug}">
                    ${category}
                </button>
            `;
            filterWrapper.append(button);
        });

        filterWrapper.find('.project-filter-btn:first-child').addClass('active');
    }

    // --- Event listener for filter button clicks ---
    $('#projects-content .project-filter-wrapper').on('click', '.project-filter-btn', function() {
        const $this = $(this);
        if ($this.hasClass('active')) return;

        $('#projects-content .project-filter-btn').removeClass('active');
        $this.addClass('active');

        const filterValue = $this.data('project-filter');
        
        $('#projects-content .grid').stop(true, true).fadeOut(160, function() {
            renderProjects(filterValue);
            $(this).stop(true, true).fadeIn(220);
        });
    });

    createFilterButtons();
    renderProjects('all');

    /* --- END: DYNAMIC PROJECT SECTION CODE --- */
});
