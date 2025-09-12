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
                title: 'MX FUEL™ Electrofusion Processor - Genesis Project',
                description: `
                    <div class="space-y-6">
                        <div class="bg-gradient-to-r from-primary-color/10 to-transparent p-4 rounded-lg border-l-4 border-primary-color">
                            <p class="text-gray-300 mb-2"><strong class="text-primary-color">Project Genesis:</strong> Revolutionary Proof of Concept (2021-2022)</p>
                            <p class="text-gray-400 text-sm">Led the foundational development of Milwaukee's first cordless electrofusion solution, establishing the technical architecture that became the commercial MX FUEL™ Electrofusion Processor (MXF545-XC).</p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div class="glass-card p-4 rounded-lg">
                                <h4 class="text-primary-color font-semibold mb-2">⚡ Power Architecture</h4>
                                <ul class="text-gray-400 text-sm space-y-1">
                                    <li>• Input: 72V DC MX FUEL™ REDLITHIUM</li>
                                    <li>• Output: 40V AC, 60Hz Modified Sine Wave</li>
                                    <li>• Load Range: 0.5Ω - 12Ω Resistive Couplers</li>
                                    <li>• Topology: Custom H-Bridge Inverter</li>
                                </ul>
                            </div>
                            <div class="glass-card p-4 rounded-lg">
                                <h4 class="text-primary-color font-semibold mb-2">🔬 Advanced Engineering</h4>
                                <ul class="text-gray-400 text-sm space-y-1">
                                    <li>• MOSFET Gate Ringing Mitigation</li>
                                    <li>• Parasitic Inductance Optimization</li>
                                    <li>• Thermal Management Integration</li>
                                    <li>• Real-time Data Acquisition System</li>
                                </ul>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-primary-color mt-6 mb-3">🚀 Revolutionary System Architecture</h3>
                        <p class="text-gray-300 mb-4">Engineered a modular, high-power electronics platform that fundamentally redefined portable electrofusion technology. The system architecture consisted of three critical stages: energy source (72V MX FUEL™ battery), power conversion (custom H-bridge inverter), and intelligent load management for HDPE pipe fusion applications.</p>

                        <div class="bg-gray-900/50 p-4 rounded-lg mb-4">
                            <h4 class="text-primary-color font-semibold mb-2">⚙️ Core Technical Specifications</h4>
                            <div class="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span class="text-gray-400">Input Voltage:</span> <span class="text-white">72V DC</span><br>
                                    <span class="text-gray-400">Output Voltage:</span> <span class="text-white">40V AC</span><br>
                                    <span class="text-gray-400">Frequency:</span> <span class="text-white">60 Hz</span>
                                </div>
                                <div>
                                    <span class="text-gray-400">Load Range:</span> <span class="text-white">0.5Ω - 12Ω</span><br>
                                    <span class="text-gray-400">Waveform:</span> <span class="text-white">Modified Sine Wave</span><br>
                                    <span class="text-gray-400">Control:</span> <span class="text-white">ST Microcontroller</span>
                                </div>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-primary-color mt-6 mb-3">🔧 Advanced Component-Level Engineering</h3>
                        <div class="space-y-4">
                            <div class="border-l-2 border-primary-color pl-4">
                                <h4 class="text-white font-semibold">MOSFET Selection & Gate Ringing Mitigation</h4>
                                <p class="text-gray-400 text-sm mt-1">Solved critical power electronics challenges including parasitic oscillations through strategic component selection and PCB layout optimization. Implemented individual gate resistors (4.7Ω) and strip-line routing to achieve optimal Q-factor dampening while maintaining switching efficiency.</p>
                            </div>
                            <div class="border-l-2 border-primary-color pl-4">
                                <h4 class="text-white font-semibold">Safety Circuit Architecture</h4>
                                <p class="text-gray-400 text-sm mt-1">Designed comprehensive protection systems including over-current detection via shunt resistors, thermal monitoring with op-amp comparators, and Battery Management System (BMS) integration for over-voltage/under-voltage protection.</p>
                            </div>
                            <div class="border-l-2 border-primary-color pl-4">
                                <h4 class="text-white font-semibold">Data Acquisition & Analytics</h4>
                                <p class="text-gray-400 text-sm mt-1">Pioneered the foundational data logging system that evolved into the commercial ONE-KEY™ platform, capturing fusion time, voltage, current, and thermal parameters for quality assurance and predictive maintenance.</p>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-primary-color mt-6 mb-3">📊 Validation & Performance Metrics</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div class="text-center glass-card p-3 rounded-lg">
                                <div class="text-2xl font-bold text-primary-color">95%+</div>
                                <div class="text-gray-400 text-sm">First-Pass Yield</div>
                            </div>
                            <div class="text-center glass-card p-3 rounded-lg">
                                <div class="text-2xl font-bold text-primary-color">40%</div>
                                <div class="text-gray-400 text-sm">Weight Reduction</div>
                            </div>
                            <div class="text-center glass-card p-3 rounded-lg">
                                <div class="text-2xl font-bold text-primary-color">8"</div>
                                <div class="text-gray-400 text-sm">Max Coupling Size</div>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-primary-color mt-6 mb-3">🏆 Commercial Impact & Legacy</h3>
                        <p class="text-gray-300 mb-4">The POC's success directly enabled the development of the Milwaukee MX FUEL™ Electrofusion Processor (MXF545-XC), a market-leading product that eliminated the need for gasoline generators and AC power cords in electrofusion applications. The foundational architecture, safety systems, and data logging capabilities developed during this project became core features of the commercial product.</p>

                        <div class="bg-gradient-to-r from-green-500/10 to-transparent p-4 rounded-lg border-l-4 border-green-500 mt-4">
                            <p class="text-green-400 font-semibold mb-1">Project Outcome</p>
                            <p class="text-gray-300 text-sm">Successfully transitioned from proof-of-concept to commercial product, establishing Milwaukee Tool as the industry leader in cordless electrofusion technology and validating the MX FUEL™ platform's capability for high-power, sustained-load applications.</p>
                        </div>
                    </div>
                `
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
