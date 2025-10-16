$(document).ready(function() {
    lucide.createIcons();

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
        $('.tab-content:visible').fadeOut(250, function() {
            $(targetContentId).fadeIn(250, function() {
                if(targetContentId === '#skills-content') {
                    $('.skill-progress-fill').each(function() {
                        $(this).css('width', $(this).data('progress'));
                    });
                }
            });
        });
    });
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const $activeLink = $('.nav-link.active');
            if($activeLink.length) {
                $('#tab-indicator').addClass('!transition-none');
                moveIndicator($activeLink);
                $('#tab-indicator')[0].offsetHeight;
                $('#tab-indicator').removeClass('!transition-none');
            }
        }, 250);
    });
    $('.journey-filter-btn').on('click', function() {
        const $this = $(this);
        if($this.hasClass('active')) {
            return;
        }
        const filterValue = $this.data('journey-filter');
        $('.journey-filter-btn').removeClass('active');
        $this.addClass('active');
        $('.journey-card:visible').fadeOut(200).promise().done(function() {
            $(`.journey-card[data-journey-content="${filterValue}"]`).fadeIn(200);
        });
    });

    /* --- START: DYNAMIC PROJECT SECTION CODE --- */
    
    const myProjects = [
        {
            title: 'Luke’s Consultancy',
            category: 'Web Development',
            image: "assets/img/luke.png",
            description: 'A professional consultancy website built from the ground up.',
            liveLink: 'https://stlukesconsultancy.com/'
        },
        {
            title: 'Velofy',
            category: 'React.js',
            image: "assets/img/velofy.png",
            description: 'A modern, single-page application built with React for a seamless user experience.',
            liveLink: 'https://velofy-five.vercel.app/'
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
            title: 'Solid',
            category: 'React.js',
            image: 'assets/img/Nova2.png',
            description: 'An interactive web application demonstrating modern UI/UX principles with React.',
            liveLink: 'https://solidwebsite.vercel.app/'
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
        
        $('#projects-content .grid').fadeOut(200, function() {
            renderProjects(filterValue);
            $(this).fadeIn(200);
        });
    });

    createFilterButtons();
    renderProjects('all');

    /* --- END: DYNAMIC PROJECT SECTION CODE --- */

    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#333366" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.4, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#666699", "opacity": 0.3, "width": 1 },
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
});