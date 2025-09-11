document.addEventListener('DOMContentLoaded', function() {
    // --- Particles.js Initialization ---
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.2, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#888888", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });

    // --- Typed.js Initialization ---
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['Hardware Development Engineer.', 'Embedded Systems Specialist.', 'Rapid Prototyping Expert.', 'Electronics Innovator.'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 2000,
        });
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black/80', 'backdrop-blur-sm', 'shadow-lg', 'shadow-primary-color/10');
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 191, 255, 0.1)';
        } else {
            navbar.classList.remove('bg-black/80', 'backdrop-blur-sm', 'shadow-lg', 'shadow-primary-color/10');
            navbar.style.backdropFilter = 'none';
            navbar.style.boxShadow = 'none';
        }
    });

    // --- Mobile Menu ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = mobileMenu.querySelectorAll('.nav-link');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    
    // --- Project Modal Logic ---
    const modal = document.getElementById('project-modal');
    if (modal) {
        const modalContentContainer = document.getElementById('modal-content-container');
        const closeModalButton = document.getElementById('close-modal');
        const projectItems = document.querySelectorAll('[data-project]');
        
        const projectDetails = {
            'meta-gloves': {
                title: 'Meta Reality Labs - AR/VR Hardware',
                description: `
                    <p class="text-gray-300 mb-4">Led end-to-end development of multiple proof-of-concept hardware platforms for next-generation AR/VR and wearable technologies, focusing on sensor integration, ultra-low-power design, and rapid prototyping.</p>
                    <h3 class="text-xl font-semibold text-primary-color mt-6 mb-3">Key Contributions:</h3>
                    <ul class="list-disc list-inside text-gray-400 space-y-2">
                        <li>Directed development of 5+ PoC hardware platforms from schematic to validation.</li>
                        <li>Designed high-density rigid/flex PCBs using Altium and Cadence, reducing board spins by 30%.</li>
                        <li>Engineered precision analog front-end circuits for EMG, optical, and capacitive touch sensors.</li>
                        <li>Owned validation and test planning, achieving over 95% first-pass yield.</li>
                    </ul>`
            },
            'dc-dc-converter': {
                title: 'DC-DC Converter for Thermoelectric Cooler',
                description: `
                    <p class="text-gray-300 mb-4">Designed a bespoke DC-DC converter with a temperature-based control loop for Meta Reality Labs. This system combines Boost and Flyback topologies to achieve a high voltage output from a low voltage input, enabling precise thermal control.</p>
                    <h3 class="text-xl font-semibold text-primary-color mt-6 mb-3">Core Specifications:</h3>
                    <ul class="list-disc list-inside text-gray-400 space-y-2">
                        <li>Input Voltage: 3.1V - 5V</li>
                        <li>Output Voltage: 60V</li>
                        <li>Switching Frequency: 520KHz</li>
                    </ul>`
            },
            'pcb-portfolio': {
                title: 'PCB/FPC Design Portfolio',
                description: `
                    <p class="text-gray-300 mb-4">Engineered a variety of PCB/FPC boards (from single layer to 8 layers) using Altium Designer and Cadence Allegro/OrCAD. All designs were optimized for size, power, signal integrity, and manufacturability (DFM).</p>
                    <h3 class="text-xl font-semibold text-primary-color mt-6 mb-3">Highlighted Projects:</h3>
                    <ul class="list-disc list-inside text-gray-400 space-y-2">
                        <li>Custom Strain Gauge FPC with wire-bonding test capabilities.</li>
                        <li>Custom ASIC (TSMC) test board featuring 100V operation, 8 layers, and 96 GPIOs.</li>
                        <li>High-density rigid/flex PCBs for complex wearable applications.</li>
                    </ul>`
            },
            'vacuum-gauge': {
                title: 'Digital Vacuum Gauge',
                description: `<p class="text-gray-300 mb-4">As part of Milwaukee Tool's Advanced Design R&D team, designed and prototyped a digital vacuum gauge with high precision measurement capabilities. Translated high-level concepts into detailed engineering specifications and created a proof-of-concept electronic system.</p><h3 class="text-xl font-semibold text-primary-color mt-6 mb-3">Key Specifications:</h3><ul class="list-disc list-inside text-gray-400 space-y-2"><li>Range: 0 – 25,000 Microns with 5% accuracy.</li><li>Resolution: As fine as 0.1 Micron.</li><li>Maximum Overpressure: 500 PSI.</li></ul>`
            },
            'electrofusion': {
                title: 'Electrofusion Device',
                description: `<p class="text-gray-300 mb-4">Designed and prototyped an innovative Electrofusion device for joining MDPE and HDPE plastic pipes. This project involved creating a portable, battery-powered tool with a modified sine wave H-bridge design for Milwaukee Tool's Advanced Design R&D team.</p><h3 class="text-xl font-semibold text-primary-color mt-6 mb-3">Technical Highlights:</h3><ul class="list-disc list-inside text-gray-400 space-y-2"><li>Power Source: 72VDC portable battery.</li><li>Output: 40V, 60 Hz.</li><li>Designed inverter and comprehensive safety circuits.</li></ul>`
            },
            'gps-tester': {
                title: 'GPS & Telemetry Systems',
                description: `<p class="text-gray-300 mb-4">Led hardware development for industrial control systems at T-L Irrigation Co. My work focused on GPS RTK-based navigation and telemetry platforms for autonomous agricultural equipment, resulting in features that increased company sales by over $2M annually.</p><h3 class="text-xl font-semibold text-primary-color mt-6 mb-3">Achievements:</h3><ul class="list-disc list-inside text-gray-400 space-y-2"><li>Integrated GPS RTK modules to achieve sub-inch navigation accuracy.</li><li>Developed embedded firmware (C) reducing field failures by 25%.</li><li>Designed a hand-held GPS Smart Tester for field waypoint recording.</li></ul>`
            }
        };

        function openModal(projectId) {
            const details = projectDetails[projectId];
            if (details) {
                modalContentContainer.innerHTML = `
                    <h2 class="font-display text-3xl font-bold mb-4 text-white">${details.title}</h2>
                    <div>${details.description}</div>
                `;
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        }
        
        function hideModal() {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }

        projectItems.forEach(item => {
            item.addEventListener('click', () => openModal(item.dataset.project));
        });

        closeModalButton.addEventListener('click', hideModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) hideModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) hideModal();
        });
    }
    
    // --- AI Summary Generator ---
    const generateSummaryBtn = document.getElementById('generate-summary-btn');
    if (generateSummaryBtn) {
        generateSummaryBtn.addEventListener('click', async () => {
            const summaryContainer = document.getElementById('ai-summary-container');
            const summaryText = document.getElementById('ai-summary-text');
            const button = document.getElementById('generate-summary-btn');
            
            summaryText.textContent = 'Generating summary...';
            summaryContainer.classList.remove('hidden');
            button.disabled = true;

            const aboutContent = `
                Rohith Reddy Narala is a Hardware Engineering professional with an M.S. in Electrical Engineering, bringing over 9 years of progressive experience in delivering innovative electronic solutions. My expertise spans the full hardware development lifecycle, from initial concept to mass production.
                I thrive on tackling complex challenges in analog/digital circuit design, power electronics, and embedded systems. My passion lies in leading cross-functional teams through New Product Introduction (NPI) processes, implementing advanced sensing technologies, and optimizing prototypes for manufacturability (DFM).
                Here are a few technologies I've been working with recently: Altium & Cadence Suite, High-Density Flex/Rigid PCBs, Embedded C/C++, Sensor Integration & Fusion, DC-DC Converters & Power Mgmt, AR/VR & Wearable Tech.
            `;

            try {
                // Note: In a real implementation, you would need to provide a valid API key
                // For now, we'll simulate the API response
                setTimeout(() => {
                    const simulatedResponse = "Rohith Reddy Narala is a seasoned Hardware Engineering professional with an M.S. in Electrical Engineering and 9+ years of experience in electronic solutions development. Specializing in the complete hardware lifecycle from concept to production, he excels in analog/digital circuit design, power electronics, and embedded systems. His expertise includes leading NPI processes, implementing advanced sensing technologies, and optimizing for manufacturability, with recent focus on Altium & Cadence Suite, high-density PCBs, embedded programming, sensor integration, power management, and AR/VR technologies.";
                    summaryText.textContent = simulatedResponse;
                    button.disabled = false;
                }, 2000);
            } catch (error) {
                console.error('Error generating summary:', error);
                summaryText.textContent = 'An error occurred. Please try again.';
                button.disabled = false;
            }
        });
    }

    // --- Print functionality for resume page ---
    const printButton = document.querySelector('.print-button');
    if (printButton) {
        printButton.addEventListener('click', () => {
            window.print();
        });
    }
});
