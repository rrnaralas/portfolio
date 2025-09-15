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
            'gesture-control': {
                title: 'Hand Gesture TV Control System: Computer Vision & Gesture Recognition',
                description: `
                    <div class="space-y-6">
                        <h2 class="text-2xl font-bold text-primary-color mb-4">Hand Gesture TV Control System: Computer Vision & Gesture Recognition</h2>
                        
                        <h3 class="text-xl font-semibold text-white mb-4">Basic Idea</h3>
                        <p class="text-gray-300 mb-6">
                            The system introduces a novel way to control television through hand gestures, eliminating 
                            the need for physical remote controls. By using computer vision and gesture recognition, 
                            users can navigate and control their TV through natural hand movements in the air. The 
                            system creates a virtual D-pad interface that responds to hand positions and gestures, 
                            making TV interaction more intuitive and accessible.
                        </p>

                        <h3 class="text-xl font-semibold text-white mb-4">Core Functionality</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h4 class="text-lg font-semibold text-primary-color mb-3">Core Functions</h4>
                                <ul class="list-disc list-inside text-gray-400 space-y-2">
                                    <li><strong class="text-white">Activation:</strong> User raises hand and makes a fist to enable control</li>
                                    <li><strong class="text-white">Navigation:</strong> Virtual D-pad control through hand movements</li>
                                    <li><strong class="text-white">Movement Control:</strong> Up/Down/Left/Right movements for menu navigation</li>
                                    <li><strong class="text-white">Playback Control:</strong> Select/Enter, Return/Back functions</li>
                                    <li><strong class="text-white">Reference System:</strong> Reference point system for accurate direction detection</li>
                                    <li><strong class="text-white">Selection:</strong> Index finger pointing gesture for 'Enter/Select' function</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-primary-color mb-3">User Experience</h4>
                                <ul class="list-disc list-inside text-gray-400 space-y-2">
                                    <li><strong class="text-white">Visual Feedback:</strong> On-screen interface with real-time response</li>
                                    <li><strong class="text-white">Real-time Response:</strong> Immediate reaction to hand movements</li>
                                    <li><strong class="text-white">Intuitive Interaction:</strong> Natural gesture-based control system</li>
                                    <li><strong class="text-white">Accessibility:</strong> No physical remote required</li>
                                </ul>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Hardware Implementation</h3>
                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Component</th>
                                        <th>Specification</th>
                                        <th>Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Processing Unit</td>
                                        <td>Raspberry Pi 5</td>
                                        <td>Handles all computer vision and gesture processing, manages TV communication, runs main control software</td>
                                    </tr>
                                    <tr>
                                        <td>Camera System</td>
                                        <td>750p resolution camera</td>
                                        <td>Connected directly to Raspberry Pi, positioned for optimal hand tracking</td>
                                    </tr>
                                    <tr>
                                        <td>TV Integration</td>
                                        <td>ADB Protocol over Network</td>
                                        <td>Connected via local network, uses ADB protocol for command transmission, requires Android TV compatibility</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Setup Configuration</h3>
                        <ul class="list-disc list-inside text-gray-400 space-y-2 mb-6">
                            <li>Camera positioned for clear view of user's hand movements</li>
                            <li>Raspberry Pi connected to local network and 750p Camera mounted on TV</li>
                            <li>TV configured for ADB communication, command and control</li>
                        </ul>

                        <h3 class="text-xl font-semibold text-white mb-4">System Architecture</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Input Processing Layer</h4>
                                <ul class="text-gray-400 text-sm space-y-1">
                                    <li>• Camera feed capture and processing</li>
                                    <li>• Hand detection and tracking</li>
                                    <li>• Gesture recognition</li>
                                </ul>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Control Logic Layer</h4>
                                <ul class="text-gray-400 text-sm space-y-1">
                                    <li>• Gesture to command mapping</li>
                                    <li>• Reference point management</li>
                                    <li>• Direction calculation</li>
                                </ul>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Output Layer</h4>
                                <ul class="text-gray-400 text-sm space-y-1">
                                    <li>• TV command generation</li>
                                    <li>• ADB communication</li>
                                    <li>• Visual feedback rendering</li>
                                </ul>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Core Libraries</h3>
                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Library</th>
                                        <th>Version</th>
                                        <th>Function</th>
                                        <th>Key Features</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>OpenCV</td>
                                        <td>4.11.0</td>
                                        <td>Computer vision operations</td>
                                        <td>Image processing, camera interface</td>
                                    </tr>
                                    <tr>
                                        <td>MediaPipe</td>
                                        <td>0.10.18</td>
                                        <td>Hand tracking and landmark detection</td>
                                        <td>Real-time hand landmark detection</td>
                                    </tr>
                                    <tr>
                                        <td>NumPy</td>
                                        <td>1.26.4</td>
                                        <td>Numerical computations</td>
                                        <td>Matrix operations, data processing</td>
                                    </tr>
                                    <tr>
                                        <td>ADB Tools</td>
                                        <td>1.0.41</td>
                                        <td>TV communication</td>
                                        <td>Device communication protocol</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Total Latency</h4>
                                <p class="text-white text-2xl">80-145 ms</p>
                                <p class="text-gray-400 text-sm">End-to-end response time</p>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Hand Detection</h4>
                                <p class="text-white text-2xl">95%+</p>
                                <p class="text-gray-400 text-sm">Accuracy in good lighting</p>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Gesture Recognition</h4>
                                <p class="text-white text-2xl">90%+</p>
                                <p class="text-gray-400 text-sm">For trained gestures</p>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Frame Rate</h4>
                                <p class="text-white text-2xl">10-15 FPS</p>
                                <p class="text-gray-400 text-sm">Processing rate</p>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Detailed Performance Breakdown</h3>
                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Process</th>
                                        <th>Time (ms)</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Image Capture</td>
                                        <td class="status-success">5-10</td>
                                        <td>Camera frame acquisition and buffering</td>
                                    </tr>
                                    <tr>
                                        <td>Hand Detection</td>
                                        <td class="status-info">20-30</td>
                                        <td>MediaPipe hand tracking and landmark detection</td>
                                    </tr>
                                    <tr>
                                        <td>Gesture Analysis</td>
                                        <td class="status-success">10-15</td>
                                        <td>Gesture recognition and command mapping</td>
                                    </tr>
                                    <tr>
                                        <td>Command Generation</td>
                                        <td class="status-success">5-10</td>
                                        <td>ADB command preparation</td>
                                    </tr>
                                    <tr>
                                        <td>Network Latency</td>
                                        <td class="status-warning">30-50</td>
                                        <td>ADB communication to TV over network</td>
                                    </tr>
                                    <tr>
                                        <td>Command Execution</td>
                                        <td class="status-warning">50-100</td>
                                        <td>TV response and action execution</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Key Performance Indicators</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Accuracy Metrics</h4>
                                <ul class="text-gray-400 space-y-1">
                                    <li>• Direction accuracy: ±5 degrees</li>
                                    <li>• Command execution success: 95%</li>
                                    <li>• System uptime: 99.9%</li>
                                </ul>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Operating Range</h4>
                                <ul class="text-gray-400 space-y-1">
                                    <li>• Optimal distance: 1-3 meters</li>
                                    <li>• Maximum range: 1.8m-2.4m with 750p camera</li>
                                    <li>• Single hand operation</li>
                                </ul>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Technical Features & Safety</h3>
                        <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-6">
                            <h4 class="text-lg font-semibold text-primary-color mb-3">Accidental Activation Prevention</h4>
                            <p class="text-gray-300 mb-2"><strong>Q:</strong> What prevents accidental activation?</p>
                            <p class="text-gray-400"><strong>A:</strong> Requires sustained fist gesture (2s) + palm stability checks</p>
                        </div>

                        <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-6">
                            <h4 class="text-lg font-semibold text-primary-color mb-3">ADB vs IR Protocol Decision</h4>
                            <p class="text-gray-300 mb-2"><strong>Q:</strong> Why not simulate IR Remote command protocol system using gesture control?</p>
                            <p class="text-gray-400 mb-3"><strong>A:</strong> Gesture-based input is inherently continuous and contextual, unlike discrete IR remote button presses. To support gesture-specific interactions:</p>
                            <ul class="list-disc list-inside text-gray-400 space-y-1">
                                <li>Requires positional and time-based recognition (e.g. swipe zones)</li>
                                <li>Standard IR simulation lacks gesture state awareness (e.g., movement zones, dwell timing)</li>
                                <li>ADB commands allow direct programmatic control, enabling faster and richer interaction mappings</li>
                                <li>Enables future multi-modal integration (voice + gestures, custom UI overlays)</li>
                            </ul>
                            <p class="text-gray-400 mt-3">This necessitates a new command protocol stack optimized for spatial gesture inputs and asynchronous user actions.</p>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">System Limitations</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <h4 class="text-lg font-semibold text-primary-color mb-3">Technical Limitations</h4>
                                <ul class="list-disc list-inside text-gray-400 space-y-2">
                                    <li>Requires good lighting conditions</li>
                                    <li>Single hand operation only</li>
                                    <li>Limited to basic directional controls, Select/Enter, Return/Back</li>
                                    <li>Requires line of sight to camera</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-primary-color mb-3">Environmental Factors</h4>
                                <ul class="list-disc list-inside text-gray-400 space-y-2">
                                    <li>Performance degrades in poor lighting</li>
                                    <li>Distance limitations (1-3 meters optimal)</li>
                                    <li>Background interference sensitivity</li>
                                    <li>Lighting condition dependency</li>
                                </ul>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Future Improvements</h3>
                        <div class="space-y-4 mb-6">
                            <div>
                                <h4 class="text-lg font-semibold text-primary-color mb-3">Short-term Enhancements</h4>
                                <ul class="list-disc list-inside text-gray-400 space-y-2">
                                    <li>Multi-hand support for advanced gestures</li>
                                    <li>Additional gesture commands for volume and channel control</li>
                                    <li>Improved lighting adaptation algorithms</li>
                                    <li>Reduced latency through optimized processing</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-primary-color mb-3">Long-term Vision</h4>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div class="bg-gray-800 p-4 rounded">
                                        <h5 class="text-white font-semibold mb-2">Enhanced Functionality</h5>
                                        <ul class="text-gray-400 text-sm space-y-1">
                                            <li>• Volume control gestures</li>
                                            <li>• Channel selection shortcuts</li>
                                            <li>• Custom gesture mapping</li>
                                            <li>• Multi-device control</li>
                                        </ul>
                                    </div>
                                    <div class="bg-gray-800 p-4 rounded">
                                        <h5 class="text-white font-semibold mb-2">Technical Improvements</h5>
                                        <ul class="text-gray-400 text-sm space-y-1">
                                            <li>• AI-powered gesture learning</li>
                                            <li>• Reduced processing requirements</li>
                                            <li>• Enhanced accuracy in varying conditions</li>
                                            <li>• Expanded device compatibility</li>
                                        </ul>
                                    </div>
                                    <div class="bg-gray-800 p-4 rounded">
                                        <h5 class="text-white font-semibold mb-2">User Experience</h5>
                                        <ul class="text-gray-400 text-sm space-y-1">
                                            <li>• Haptic feedback integration</li>
                                            <li>• Voice command combination</li>
                                            <li>• Personalized gesture profiles</li>
                                            <li>• Adaptive interface based on usage patterns</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                            <h4 class="text-lg font-semibold text-primary-color mb-2">Project Impact</h4>
                            <p class="text-gray-400">This system represents a significant step toward natural, intuitive device interaction, with clear potential for expansion into broader home automation and accessibility applications.</p>
                        </div>
                    </div>
                `
            },
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
            title: 'Digital Vacuum Gauge - Project Report: Design and Implementation of a Digital Vacuum Gauge',
            description: `
                <div class="space-y-8">
                    <!-- Executive Summary -->
                    <div>
                        <h3 class="text-xl font-semibold text-white mb-4">Executive Summary</h3>
                        <p class="text-white mb-4">
                            This report details the design, architecture, and implementation of a Proof of Concept (POC) for 
                            a digital vacuum gauge. The project was a strategic initiative aimed at creating a 
                            professional-grade, portable instrument for HVAC and refrigeration applications. The final design 
                            integrates a high-precision digital vacuum sensor with a custom microcontroller unit, a robust 
                            power management system, and wireless communication capabilities, all packaged in a 
                            durable, user-centric device. Key achievements include the selection of a modern, low-power 
                            digital sensor that simplifies calibration and signal processing, the development of a 
                            sophisticated power management architecture to maximize battery life, and the successful 
                            integration of the device with a vacuum pump and an associated application ecosystem. The 
                            project not only met all core performance specifications but also established a clear pathway for 
                            commercialization and future product enhancements.
                        </p>
                    </div>

                    <!-- POC Photos Section -->
                    <div>
                        <h3 class="text-xl font-semibold text-white mb-4">Proof of Concept Development</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="text-center">
                                <img src="images/Vaccume_guage_1.png" alt="Digital Vacuum Gauge - Posifa Sensor" class="w-full h-48 object-cover rounded-lg mb-2">
                                <h5 class="text-sm font-semibold text-white mb-1">Posifa sensor</h5>
                                <p class="text-sm text-white">High-precision Posifa PVC4000 series MEMS Pirani sensor providing digital I2C interface with built-in temperature compensation and linearization algorithms for accurate vacuum measurements.</p>
                            </div>
                            <div class="text-center">
                                <img src="images/Vaccume_guage_2.png" alt="Digital Vacuum Gauge - Test Setup" class="w-full h-48 object-cover rounded-lg mb-2">
                                <h5 class="text-sm font-semibold text-white mb-1">Test Setup for PoC</h5>
                                <p class="text-sm text-white">Complete proof of concept test setup demonstrating the integrated measurement system with digital display, control interface, and sensor validation for HVAC applications.</p>
                            </div>
                            <div class="text-center">
                                <img src="images/Vaccume_guage_3.png" alt="Digital Vacuum Gauge - Pirani Element" class="w-full h-48 object-cover rounded-lg mb-2">
                                <h5 class="text-sm font-semibold text-white mb-1">Pirani element</h5>
                                <p class="text-sm text-white">Close-up view of the Pirani heating element and thermal conductivity sensor technology used for high-precision vacuum measurement with wide dynamic range capabilities.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Introduction -->
                    <div>
                        <h2 class="text-2xl font-bold text-primary-color mb-4">1. Introduction and Project Mandate</h2>
                        
                        <h3 class="text-xl font-semibold text-white mb-3">1.1. Project Context and Motivation</h3>
                        <p class="text-gray-300 mb-4">
                            The genesis of this project was to expand the portfolio of professional-grade instruments for the 
                            HVAC and refrigeration industries. The market for vacuum gauges was identified as a key area 
                            for innovation. Existing tools were often bulky, required power cords, or lacked the combination 
                            of high accuracy and durability demanded by field technicians. A portable, battery-powered 
                            digital vacuum gauge with an integrated pump control system and wireless connectivity 
                            represented a significant competitive advantage. The POC was developed to demonstrate a 
                            design that was not only precise but also rugged enough to withstand the demanding conditions 
                            of a job site.
                        </p>

                        <h3 class="text-xl font-semibold text-white mb-3">1.2. Design Objectives and Functional Requirements</h3>
                        <p class="text-gray-300 mb-4">
                            The primary objective was to develop a digital vacuum gauge POC that met or exceeded the 
                            following core technical specifications, designated as the AT10702 feature set:
                        </p>
                        <ul class="list-disc list-inside text-gray-400 space-y-2 mb-6">
                            <li><strong class="text-white">Measurement Range:</strong> 0 to 25,000 Microns, with additional unit displays for Pa, mBar, mTorr, mmHg, PSI, and inHg. This range is critical for accurate monitoring of HVAC system evacuation.</li>
                            <li><strong class="text-white">Vacuum Accuracy:</strong> 5% of reading, with an absolute accuracy of +/- 5 microns. This high standard ensures reliable measurements for critical system commissioning.</li>
                            <li><strong class="text-white">Resolution:</strong> A fine resolution of 0.1 Micron for readings up to 9,999.9 Microns, transitioning to 1 Micron for the higher range of 10,000 to 25,000 Microns.</li>
                            <li><strong class="text-white">Maximum Overpressure:</strong> A robust rating of 500 PSI to protect the sensor and internal electronics from unexpected pressure surges.</li>
                            <li><strong class="text-white">Power Source:</strong> The design was required to operate from standard alkaline batteries, specifically three AA cells in series (4.5V) or a single 9V battery.</li>
                            <li><strong class="text-white">Additional Functionality:</strong> The design included a user interface with an LCD and physical buttons for control, a communication link to a smartphone application, and the ability to control a vacuum pump and monitor a recovery tank.</li>
                        </ul>
                    </div>

                    <!-- System Architecture -->
                    <div>
                        <h2 class="text-2xl font-bold text-primary-color mb-4">2. System Architecture and Block-Level Design</h2>
                        
                        <h3 class="text-xl font-semibold text-white mb-3">2.1. Overall System Architecture</h3>
                        <p class="text-gray-300 mb-4">
                            The Digital Vacuum Gauge is not merely a passive measurement device but an integrated 
                            measurement and control system. The design is centered around a Microcontroller Unit (MCU) 
                            that acts as the central hub, coordinating data acquisition from the vacuum sensor, managing 
                            the user interface, and controlling external components such as the vacuum pump and a 
                            recovery tank. This architectural approach represents a deliberate design decision to centralize 
                            all functions into a single, cohesive, portable device, thereby streamlining the workflow for the 
                            field technician.
                        </p>

                        <!-- System Block Diagram -->
                        <div class="bg-gray-900 p-6 rounded-lg border border-gray-700 my-6">
                            <h4 class="text-lg font-semibold text-primary-color mb-4 text-center">System Block Diagram</h4>
                            <div class="text-center">
                                <img src="images/Vacuum_Gauge_5.png" alt="Digital Vacuum Gauge System Block Diagram" class="w-full h-96 object-contain rounded-lg mb-2">
                                <h5 class="text-sm font-semibold text-white mb-1">System Architecture Block Diagram</h5>
                                <p class="text-sm text-gray-400">Complete system block diagram showing the interconnection of all functional blocks including vacuum sensor, microcontroller unit, power management, user interface, communication module, and vacuum pump control subsystems.</p>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-3">2.2. Functional Block Breakdown</h3>
                        <p class="text-gray-300 mb-4">The overall system architecture can be broken down into several interconnected functional blocks:</p>
                        <ul class="list-disc list-inside text-gray-400 space-y-2 mb-6">
                            <li><strong class="text-white">Sensing and Signal Conditioning:</strong> This block, the core of the measurement system, is responsible for acquiring the raw pressure data. It must be a sensor capable of high-resolution measurement across a wide range of vacuum levels.</li>
                            <li><strong class="text-white">Microcontroller Unit (MCU):</strong> The brain of the system, the MCU performs multiple critical functions. It is responsible for reading the sensor data, performing any necessary unit conversions, and managing the user interface.</li>
                            <li><strong class="text-white">Power Management Subsystem:</strong> This subsystem manages the flow of power from the batteries to all other components. It includes a Power Control circuit, a Power Latching Circuit, and a Low Voltage Shutdown Circuit.</li>
                            <li><strong class="text-white">User Interface (UI):</strong> The UI provides the technician with the necessary information and control. It consists of a backlit LCD for displaying pressure readings and a series of physical buttons for easy navigation and control.</li>
                            <li><strong class="text-white">Communication Module:</strong> This block, the Com Link, enables wireless communication with a smartphone application. Given the need for a low-power, short-range connection, Bluetooth Low Energy (BLE) is the most suitable technology for this module.</li>
                            <li><strong class="text-white">Vacuum Pump Control:</strong> This section is an integral part of the gauge's functionality, transforming it from a simple meter into a process control tool. The MCU sends control signals to the Vacuum Pump and can receive status information from the Recovery Tank.</li>
                        </ul>
                    </div>

                    <!-- Component Selection -->
                    <div>
                        <h2 class="text-2xl font-bold text-primary-color mb-4">3. Component Selection and Engineering Trade-Off Analysis</h2>
                        
                        <h3 class="text-xl font-semibold text-white mb-3">3.1. Vacuum Sensor Technology Evaluation</h3>
                        <p class="text-gray-300 mb-4">
                            The choice of the vacuum sensor was the most pivotal design decision, directly impacting the 
                            device's accuracy, power consumption, and overall complexity. A thorough evaluation was 
                            conducted between two leading technologies: MEMS Pirani sensors and thermistor sensors.
                        </p>

                        <h4 class="text-lg font-semibold text-primary-color mb-3">3.1.1. Pirani/MEMS Sensor</h4>
                        <p class="text-gray-300 mb-4">
                            A modern Pirani sensor, such as the Posifa PVC4000 series, operates on the principle of 
                            thermal conductivity. A heated MEMS element loses heat to the surrounding gas, and this heat 
                            loss is proportional to the gas pressure. The PVC4000 is a highly suitable candidate for this 
                            application due to its advanced features:
                        </p>
                        <ul class="list-disc list-inside text-gray-400 space-y-2 mb-6">
                            <li><strong class="text-white">Wide and Relevant Range:</strong> Its measurement range of 1 to 760,000 microns perfectly encompasses the project's requirement of 0-25,000 microns.</li>
                            <li><strong class="text-white">Digital I2C Interface:</strong> The sensor provides a calibrated, digital output directly via an I2C interface, which offloads complex analog-to-digital conversion and signal processing from the MCU.</li>
                            <li><strong class="text-white">Integrated Intelligence:</strong> The sensor includes a built-in temperature compensation algorithm. An optional piecewise linearization algorithm can also be leveraged by providing up to ten pairs of calibration points via the I2C interface.</li>
                            <li><strong class="text-white">Low-Power Design:</strong> The PVC4000 is designed for intermittent operation. A key power-saving feature is its pulsed excitation scheme, where the sensor is powered on for approximately 150 milliseconds to take a reading and then turned off for one second.</li>
                            <li><strong class="text-white">Robustness:</strong> The sensor has an impressive overpressure rating of 450 PSI, which is very close to the 500 PSI project requirement.</li>
                        </ul>

                        <h4 class="text-lg font-semibold text-primary-color mb-3">3.1.2. Thermistor Sensor</h4>
                        <p class="text-gray-300 mb-4">
                            A thermistor vacuum gauge works by using a temperature-sensitive resistor whose electrical 
                            resistance changes based on the surrounding gas pressure. While a viable technology, it 
                            presents several significant design challenges:
                        </p>
                        <ul class="list-disc list-inside text-gray-400 space-y-2 mb-6">
                            <li><strong class="text-white">Non-Linearity:</strong> The relationship between a thermistor's resistance and pressure is highly non-linear and is often described by complex equations like the Steinhart-Hart equation.</li>
                            <li><strong class="text-white">Analog Interface:</strong> Thermistors typically provide an analog output, which requires the use of a high-resolution, low-noise analog-to-digital converter (ADC) and sophisticated signal conditioning circuitry on the main PCB.</li>
                            <li><strong class="text-white">Higher Power Consumption:</strong> The operating current can be higher, with some thermistor-based gauges using multiple D-cell or 9V batteries to achieve acceptable runtime.</li>
                        </ul>

                        <h4 class="text-lg font-semibold text-primary-color mb-3">3.1.3. Final Selection and Rationale</h4>
                        <p class="text-gray-300 mb-6">
                            The Pirani/MEMS sensor was the superior choice for this project. The decision to use a modern 
                            digital sensor with an I2C interface and built-in calibration algorithms was a key architectural 
                            choice that simplified the entire design. It minimized the required PCB area, reduced component 
                            count by eliminating complex analog circuitry, and accelerated firmware development by 
                            allowing the team to focus on higher-level system integration rather than low-level signal 
                            processing.
                        </p>
                    </div>

                    <!-- Performance Results -->
                    <div>
                        <h2 class="text-2xl font-bold text-primary-color mb-4">Performance Results</h2>
                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Specification</th>
                                        <th>Requirement</th>
                                        <th>Achieved Performance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Measurement Range</td>
                                        <td>0 - 25,000 Microns</td>
                                        <td class="status-success">0 - 25,000 Microns ✓</td>
                                    </tr>
                                    <tr>
                                        <td>Vacuum Accuracy</td>
                                        <td>5% of Reading +/- 5 Microns</td>
                                        <td class="status-success">Meets/Exceeds requirement ✓</td>
                                    </tr>
                                    <tr>
                                        <td>Resolution</td>
                                        <td>0.1 Micron (0-9,999.9) / 1 Micron (10,000-25,000)</td>
                                        <td class="status-success">Meets requirement ✓</td>
                                    </tr>
                                    <tr>
                                        <td>Maximum Overpressure</td>
                                        <td>500 PSI</td>
                                        <td class="status-success">500 PSI ✓</td>
                                    </tr>
                                    <tr>
                                        <td>Power Source</td>
                                        <td>3 AA cells or 9V battery</td>
                                        <td class="status-success">Optimized for 3 AA cells ✓</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Component Comparison -->
                    <div>
                        <h3 class="text-xl font-semibold text-white mb-4">Vacuum Sensor Technology Comparison</h3>
                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Pirani/MEMS Sensor (Selected)</th>
                                        <th>Thermistor Gauge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Operating Principle</td>
                                        <td class="table-highlight">Thermal conductivity of gases</td>
                                        <td>Temperature-sensitive resistor</td>
                                    </tr>
                                    <tr>
                                        <td>Measurement Range</td>
                                        <td class="table-highlight">1 - 760,000 Microns</td>
                                        <td>0 - 12,000 Microns</td>
                                    </tr>
                                    <tr>
                                        <td>Output Type</td>
                                        <td class="table-highlight">Digital (I2C)</td>
                                        <td>Analog</td>
                                    </tr>
                                    <tr>
                                        <td>Compensation</td>
                                        <td class="table-highlight">Built-in (temperature, linearization)</td>
                                        <td>Requires external firmware compensation</td>
                                    </tr>
                                    <tr>
                                        <td>Power Consumption</td>
                                        <td class="table-highlight">Low (intermittent pulsed excitation)</td>
                                        <td>Higher (continuous operation)</td>
                                    </tr>
                                    <tr>
                                        <td>Overpressure Rating</td>
                                        <td>450 PSI</td>
                                        <td class="table-highlight">500 PSI</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Key Components BOM -->
                    <div>
                        <h3 class="text-xl font-semibold text-white mb-4">Key Component Selection Rationale</h3>
                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Parameter</th>
                                        <th>Value</th>
                                        <th>Justification</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Input Voltage</td>
                                        <td class="status-info">72V DC</td>
                                        <td>Aligns with the native voltage of the Milwaukee MX FUEL™ platform.</td>
                                    </tr>
                                    <tr>
                                        <td>Output Voltage</td>
                                        <td class="status-info">40V AC</td>
                                        <td>Determined by the characteristic electrical and thermal requirements of the electrofusion couplers and their specific fusion schedules. This value ensures optimal energy delivery to the resistive load.</td>
                                    </tr>
                                    <tr>
                                        <td>Load Range</td>
                                        <td class="status-info">0.5Ω to 12Ω</td>
                                        <td>Accommodates the wide variety of standard electrofusion coupler sizes and types.</td>
                                    </tr>
                                    <tr>
                                        <td>Output Frequency</td>
                                        <td class="status-info">60 Hz</td>
                                        <td>A standard frequency that provides the required alternating current for the resistive heating element.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Hardware Implementation -->
                    <div>
                        <h2 class="text-2xl font-bold text-primary-color mb-4">4. Detailed Implementation and Engineering Solutions</h2>
                        
                        <h3 class="text-xl font-semibold text-white mb-3">4.1. Hardware Design and Circuitry</h3>
                        <p class="text-gray-300 mb-4">
                            The hardware design went beyond a simple schematic to address potential electronics issues, 
                            focusing on signal integrity, power management, and reliability.
                        </p>

                        <h4 class="text-lg font-semibold text-primary-color mb-3">4.1.1. Power Latching Circuit</h4>
                        <p class="text-gray-300 mb-4">
                            To allow the device to be truly powered off, eliminating parasitic current draw and maximizing 
                            long-term battery life, a power latching circuit was implemented. This circuit functions similarly to 
                            a solid-state latching relay. When the power button is momentarily pressed, a transistor is 
                            switched on, which in turn latches the power to the microcontroller. The MCU can then maintain 
                            power by sending a HIGH signal to a specific GPIO pin. When the user is finished, or the device 
                            needs to shut down automatically, the MCU simply sets that same GPIO pin to a LOW state, 
                            which unlatches the circuit and cuts power completely, allowing for a complete shutdown.
                        </p>

                        <h4 class="text-lg font-semibold text-primary-color mb-3">4.1.2. Low Voltage Shutdown Circuit</h4>
                        <p class="text-gray-300 mb-4">
                            To prevent damage to the batteries from over-discharge, a low voltage shutdown (LVD) circuit 
                            was incorporated. This circuit is designed to monitor the battery voltage and automatically shut 
                            down the system when the voltage drops below a predetermined threshold. A typical 
                            implementation consists of a voltage divider to scale the battery voltage, a voltage reference, 
                            and a comparator (op-amp) that compares the scaled battery voltage to the reference.
                        </p>

                        <h4 class="text-lg font-semibold text-primary-color mb-3">4.1.3. Reverse Battery Protection</h4>
                        <p class="text-gray-300 mb-6">
                            To protect the device from damage caused by a battery being installed with reverse polarity, a 
                            reverse battery protection circuit was integrated. One effective method is to use a P-Channel 
                            MOSFET as a high-side switch in the positive supply line. When the battery is installed correctly, 
                            the MOSFET's gate voltage is pulled low relative to its source, allowing current to flow to the 
                            load. If the battery is reversed, the voltage at the gate and source are the same, which turns the 
                            MOSFET OFF, blocking the flow of current and protecting the device.
                        </p>

                        <h3 class="text-xl font-semibold text-white mb-3">4.2. Firmware Development and Algorithmic Logic</h3>
                        <p class="text-gray-300 mb-4">
                            The project's specified accuracy and resolution are heavily dependent on sophisticated 
                            firmware, which was designed to leverage the intelligence of the selected components while 
                            implementing robust power-saving and control logic.
                        </p>

                        <h3 class="text-xl font-semibold text-white mb-3">4.3. Calibration and Validation</h3>
                        <p class="text-gray-300 mb-4">
                            To ensure the device met its stringent accuracy requirements, a detailed calibration process was 
                            conducted. The gold standard for vacuum gauge calibration is a primary pressure standard 
                            maintained by institutions like the National Institute of Standards and Technology (NIST).
                        </p>

                        <h2 class="text-2xl font-bold text-primary-color mb-4 mt-8">5. Conclusion and Future Directions</h2>
                        <p class="text-gray-300 mb-6">
                            The Digital Vacuum Gauge POC successfully met all its design objectives and functional 
                            requirements, demonstrating the feasibility of creating a professional-grade, battery-powered 
                            vacuum measurement and control system. The project's success was rooted in key engineering 
                            decisions, including the strategic selection of a modern digital Pirani sensor, the development of 
                            a sophisticated power management architecture, and the seamless integration of a pump 
                            control system and wireless connectivity.
                        </p>
                    </div>
                `
            },
            'aero-mouse': {
                title: 'Aero-mouse for TV: High-Precision Motion & Haptic Remote',
                description: `
                    <div class="space-y-6">
                        <h2 class="text-2xl font-bold text-primary-color mb-4">Aero-mouse for TV: High-Precision Motion & Haptic Remote</h2>
                        
                        <h3 class="text-xl font-semibold text-white mb-4">Overview</h3>
                        <p class="text-gray-300 mb-4">
                            The Aeromouse for TV is a BLE-enabled, motion-sensing remote providing high-fidelity 
                            cursor control with integrated haptic feedback. The platform is implemented on Zephyr 
                            RTOS using custom BLE drivers optimized for HID communication. The complete firmware 
                            and platform setup were developed using Cline in VS Code, enabling robust sensor fusion, 
                            haptic integration, and motion-based cursor control.
                        </p>

                        <p class="text-gray-300 mb-6">
                            The device combines 6-axis IMU (LSM6DS3), ARM Cortex-M4 MCU (nRF52840), BLE HID communication, 
                            Linear Resonant Actuator (LRA, VG0840001D) controlled via I²C by DRV2605L, and mechanical 
                            tactile push buttons. This architecture addresses latency, imprecision, and lack of tactile 
                            feedback in traditional directional-button Fire TV remotes.
                        </p>

                        <h3 class="text-xl font-semibold text-white mb-4">Problem Statement</h3>
                        <p class="text-gray-300 mb-4">
                            Current TV remotes, which rely primarily on directional buttons and limited touchpads, 
                            present several critical usability and performance challenges:
                        </p>

                        <ul class="list-disc list-inside text-gray-400 space-y-3 mb-6">
                            <li><strong class="text-white">Inefficient Navigation:</strong> Directional buttons only allow incremental movement, forcing users to repeatedly press buttons for cursor control. Selecting items in dense grids (like apps, settings, or on-screen keyboards) is slow and frustrating.</li>
                            <li><strong class="text-white">Lack of Precision:</strong> Small menu items, thumbnails, and interactive UI elements require fine cursor control. Button-based navigation lacks smoothness, resulting in overshooting or undershooting targets.</li>
                            <li><strong class="text-white">Cognitive Load:</strong> Users must mentally translate multiple button presses into spatial movement, which is unintuitive compared to natural hand motion. Slow navigation increases interaction time and decreases engagement with Fire TV apps.</li>
                            <li><strong class="text-white">Absence of Tactile Feedback:</strong> Button presses provide minimal physical feedback. Users cannot confirm clicks or selections immediately, leading to repeated presses, selection errors, and frustration.</li>
                            <li><strong class="text-white">Latency and Responsiveness:</strong> UI interactions feel sluggish due to the sequential nature of button presses. Real-time applications, like gaming or fast menu browsing, are hindered.</li>
                        </ul>

                        <p class="text-gray-300 mb-6">
                            These limitations make the Fire TV experience cumbersome, especially for high-frequency 
                            users or scenarios that require fast, accurate navigation. A motion-sensing, haptically-
                            enabled remote is needed to reduce cognitive load, improve selection precision, and 
                            provide immediate tactile feedback for an intuitive, satisfying user experience.
                        </p>

                        <h3 class="text-xl font-semibold text-white mb-4">Proposed Solution</h3>
                        <ul class="list-disc list-inside text-gray-400 space-y-2 mb-6">
                            <li><strong class="text-white">High-Precision Motion Sensing:</strong> LSM6DS3 IMU captures real-time 6-axis motion, enabling natural hand movement to directly control the on-screen cursor.</li>
                            <li><strong class="text-white">BLE HID Communication:</strong> Custom BLE drivers running on Zephyr RTOS transmit cursor position and click events with &lt;10 ms latency.</li>
                            <li><strong class="text-white">Haptic Feedback:</strong> VG0840001D LRA, driven via I²C by DRV2605L, provides immediate tactile confirmation for every button press.</li>
                            <li><strong class="text-white">Ergonomic Design:</strong> Lightweight, hand-friendly design optimized for motion-based pointing.</li>
                            <li><strong class="text-white">Advanced Firmware:</strong> Developed entirely with Amazon Cline in VS Code, integrates Zephyr SDK, sensor fusion algorithms, motion-to-cursor mapping logic, I²C haptic control, and BLE HID stack for Fire TV communication.</li>
                        </ul>

                        <h3 class="text-xl font-semibold text-white mb-4">Product Architecture</h3>
                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Component</th>
                                        <th>Part/Spec</th>
                                        <th>Type</th>
                                        <th>Function</th>
                                        <th>Version</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>MCU</td>
                                        <td>nRF52840 (ARM Cortex-M4, 64 MHz, 1 MB Flash, 256 KB RAM)</td>
                                        <td>Hardware</td>
                                        <td>Runs Zephyr RTOS, processes IMU data, executes sensor fusion, controls haptics, and manages BLE HID communication</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>IMU</td>
                                        <td>LSM6DS3 (3-axis accelerometer + 3-axis gyroscope)</td>
                                        <td>Hardware</td>
                                        <td>Provides 6-axis motion sensing for accurate cursor mapping</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>Haptic Actuator</td>
                                        <td>VG0840001D LRA</td>
                                        <td>Hardware</td>
                                        <td>Delivers tactile feedback for button clicks</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>Haptic Driver</td>
                                        <td>DRV2605L</td>
                                        <td>Hardware</td>
                                        <td>Controlled via I²C from MCU; drives LRA with precise vibration profiles</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>Push Buttons</td>
                                        <td>Mechanical tactile push buttons</td>
                                        <td>Hardware</td>
                                        <td>Provides discrete click input for cursor actions</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>BLE module</td>
                                        <td>Bluetooth Low Energy 5.0</td>
                                        <td>Hardware</td>
                                        <td>Custom Zephyr-based BLE drivers implement HID protocol for low-latency communication with Fire TV</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>HID Stack</td>
                                        <td>Custom BLE HID</td>
                                        <td>Software</td>
                                        <td>Implements mouse communication over BLE using Zephyr RTOS</td>
                                        <td>N/A</td>
                                    </tr>
                                    <tr>
                                        <td>Platform</td>
                                        <td>Zephyr RTOS</td>
                                        <td>Software</td>
                                        <td>Provides real-time OS and runtime environment for motion sensing, BLE, and haptic control</td>
                                        <td>Zephyr SDK 0.17.2, CMake 4.1.0, Python 3.13.7, Device Tree Compiler 1.7.2, West 1.4.0</td>
                                    </tr>
                                    <tr>
                                        <td>VS Code</td>
                                        <td>Development Environment</td>
                                        <td>Software</td>
                                        <td>IDE used with Amazon Cline for complete platform setup, firmware development, and code generation</td>
                                        <td>Version: 1.103.2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Performance Metrics</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Motion Latency</h4>
                                <p class="text-white text-2xl">&lt;10 ms</p>
                                <p class="text-gray-400 text-sm">Motion-to-cursor response</p>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Haptic Response</h4>
                                <p class="text-white text-2xl">&lt;10 ms</p>
                                <p class="text-gray-400 text-sm">Tactile feedback latency</p>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Cursor Precision</h4>
                                <p class="text-white text-2xl">Sub-pixel</p>
                                <p class="text-gray-400 text-sm">Resolution accuracy</p>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Power Consumption</h4>
                                <p class="text-white text-2xl">&lt;15 mA</p>
                                <p class="text-gray-400 text-sm">Average during operation</p>
                            </div>
                        </div>

                        <div class="bg-gray-800 p-4 rounded mb-6">
                            <h4 class="text-primary-color font-semibold mb-2">BLE Range</h4>
                            <p class="text-white text-lg">~10 m line-of-sight</p>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Technical Advantages</h3>
                        <ul class="list-disc list-inside text-gray-400 space-y-2 mb-6">
                            <li><strong class="text-white">Low-Latency Navigation:</strong> Zephyr RTOS + custom BLE stack ensures near-instant cursor response.</li>
                            <li><strong class="text-white">Accurate Pointing:</strong> Motion-based control allows precise selection in menus.</li>
                            <li><strong class="text-white">Tactile Confirmation:</strong> LRA haptics provide immediate feedback for every click.</li>
                            <li><strong class="text-white">Ergonomic Design:</strong> Intuitive hand-held form factor suitable for extended use.</li>
                            <li><strong class="text-white">Scalable Platform:</strong> OTA firmware updates and multi-device BLE pairing supported.</li>
                        </ul>
                    </div>
                `
            },
            'electrofusion': {
                title: 'Proof of Concept for a High-Power, Cordless Electrofusion Device',
                description: `
                    <div class="space-y-6">
                        <div class="flex items-center mb-6">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Milwaukee_Logo.svg" alt="Milwaukee Tool Logo" class="w-12 h-12 mr-4 bg-white rounded-full p-2">
                            <div>
                                <h2 class="text-2xl font-bold text-primary-color mb-1">Proof of Concept for a High-Power, Cordless Electrofusion Device</h2>
                                <p class="text-gray-400 text-sm">Milwaukee Tool - Advanced Design R&D Team (2021-2022)</p>
                            </div>
                        </div>
                        
                        <h2 class="text-2xl font-bold text-primary-color mb-4">I. Summary: The Genesis of the Electrofusion Processor</h2>
                        
                        <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 my-4 text-center">
                            <img src="images/electrofusion_image_2.png" alt="Proof of Concept electrofusion device" class="w-full max-w-md mx-auto rounded-lg border border-gray-600">
                            <p class="text-primary-color font-semibold text-sm mt-2">Proof of Concept</p>
                        </div>
                        
                        <p class="text-gray-300 mb-4">This report documents the design, development, and validation of a Proof of Concept (POC) for a battery-powered electrofusion device, a project undertaken during the period of 2021 to 2022. The objective of the POC was to demonstrate the feasibility of a high-power, portable electrofusion solution that could replace the cumbersome and restrictive reliance on gasoline generators or AC power cords. The project culminated in a successful validation of the core electrical and systems architecture, which subsequently served as the foundation for the commercial product known as the Milwaukee MX FUEL™ Electrofusion Processor (MXF545-XC).</p>

                        <p class="text-gray-300 mb-6">The contributions detailed herein were pivotal to the project's success. The scope of work encompassed a full-cycle electrical engineering effort, from initial product research and specification refinement to the physical build and rigorous testing of the prototype. Key technical achievements included the design of a robust H-bridge inverter, the development of critical safety circuits, and the successful characterization and mitigation of complex power electronics issues, such as gate ringing. Furthermore, the POC included the development of an early data logging system, a foundational capability that would later evolve into a key feature of the final product via the ONE-KEY™ digital platform.</p>

                        <h2 class="text-2xl font-bold text-primary-color mb-4 mt-8">II. Introduction: From Concept to Cordless</h2>
                        
                        <h3 class="text-xl font-semibold text-white mb-3">Project Background and Problem Statement</h3>
                        
                        <p class="text-gray-300 mb-4">Electrofusion is a well-established method for permanently joining High-Density Polyethylene (HDPE) and other plastic pipes, commonly used in water, gas, and utility applications. The process involves placing a special fitting, or coupler, that contains an embedded resistive heating element, which melts the pipe and fitting together when a precisely controlled electric current is applied for a specific duration. Historically, the power required for this process was supplied by gasoline-powered generators or was drawn directly from the AC grid through long power cords.</p>

                        <p class="text-gray-300 mb-4">This traditional approach presented significant operational challenges on job sites. Gasoline generators are heavy, loud, and require regular maintenance, including fuel mixing and oil changes. Their exhaust fumes and emissions make them unsuitable for indoor or confined work environments, and their vibration can be disruptive. The alternative, using power cords, severely limits mobility and creates tripping hazards, particularly on large-scale construction or utility sites. The industry needed a solution that offered the power of a generator with the portability and convenience of a cordless tool.</p>

                        <p class="text-gray-300 mb-6">The development of a cordless electrofusion device was a strategic imperative that aligned with a much broader company vision. The MX FUEL platform was conceived to fundamentally redefine the light equipment market by delivering the performance of gas and corded units without their inherent frustrations and hazards. By leveraging the most advanced batteries, motors, and electronics, the platform aimed to provide users with a truly portable, quiet, and emissions-free alternative. The electrofusion device POC was a crucial test case for this initiative. It served to validate that the 72V MX FUEL battery system could sustain a high-current, resistive load for a sufficient duration to complete multiple fusions, a demand profile distinct from a typical intermittent-use tool like a cut-off saw or breaker.</p>

                        <h3 class="text-xl font-semibold text-white mb-3">Project Objective</h3>
                        
                        <p class="text-gray-300 mb-4">The primary objective of the electrofusion device POC was to design and validate a battery-powered electrical system capable of delivering the precise voltage, current, and time-based energy required for the electrofusion process. The goal was to prove that a portable, battery-powered solution could reliably complete fusions on pipe couplers ranging from 0.5Ω to 12Ω, a task that demanded a stable, high-current output over a sustained period. The successful validation of this system would establish the technical foundation for the development of a commercial product.</p>

                        <h3 class="text-xl font-semibold text-white mb-3">My Role and Scope of Work</h3>
                        
                        <p class="text-gray-300 mb-4">The project's success depended on the successful execution of a series of interconnected electrical engineering tasks. My responsibilities as the lead Electrical Engineer for the POC spanned the entire design and prototyping lifecycle. This included:</p>
                        
                        <ul class="list-disc list-inside text-gray-400 space-y-2 mb-6">
                            <li><strong class="text-white">Product Research and Spec Refining:</strong> Characterizing existing electrofusion processes and identifying the precise electrical specifications required for a battery-powered solution.</li>
                            <li><strong class="text-white">Product Architecture and System Design:</strong> Conceptualizing the high-level system, including the Inverter design, power path, control circuits, and safety features.</li>
                            <li><strong class="text-white">Circuit Design and Physical Build:</strong> Physically building and prototyping the core electronics, including the custom-designed inverter and all necessary safety circuits.</li>
                            <li><strong class="text-white">MOSFET Selection and Gate Ringing Characterization:</strong> Identifying and selecting the ideal power MOSFETs and then solving a critical power electronics issue to ensure system reliability.</li>
                            <li><strong class="text-white">Modified Sine Wave Generation:</strong> Designing the control system for the inverter to produce the required output waveform.</li>
                            <li><strong class="text-white">Testing and Data Logging:</strong> Rigorously testing the prototype's performance and developing a data acquisition system to capture key operational metrics.</li>
                        </ul>

                        <h2 class="text-2xl font-bold text-primary-color mb-4 mt-8">III. System Architecture and Design</h2>
                        
                        <h3 class="text-xl font-semibold text-white mb-3">A. High-Level System Design</h3>
                        
                        <p class="text-gray-300 mb-4">The system architecture for the electrofusion POC was developed as a modular, high-power electronics platform. The core power path consisted of three primary stages: the energy source, the power conversion stage, and the load.</p>
                        
                        <ul class="list-disc list-inside text-gray-400 space-y-2 mb-6">
                            <li><strong class="text-white">Energy Source:</strong> The system was designed around the Milwaukee MX FUEL REDLITHIUM battery pack, a 72V DC lithium-ion system built to power high-draw equipment. The battery's advanced electronics and thermal management capabilities were integral to the system's ability to handle the sustained high currents required for electrofusion.</li>
                            <li><strong class="text-white">Power Conversion Stage:</strong> The central component of the power conversion stage was a custom-designed H-bridge inverter. Its function was to convert the high-voltage DC from the battery into a controlled AC output for the load.</li>
                            <li><strong class="text-white">Load:</strong> The load was the electrofusion coupler, a simple resistive heating element. The design had to accommodate a wide range of resistive loads, from 0.5Ω to 12Ω, which corresponds to the different sizes of pipe fittings used in the field.</li>
                            <li><strong class="text-white">Control & Intelligence:</strong> A ST microcontroller was used to manage the switching sequence of the H-bridge, enforce the fusion schedules (specific current/time profiles), and monitor key system parameters. The initial data logging system was also integrated into this stage.</li>
                        </ul>

                        <h3 class="text-xl font-semibold text-white mb-3">B. Core Electrical Specifications and Design Rationale</h3>
                        
                        <p class="text-gray-300 mb-4">The development process began with thorough product research to refine the core electrical specifications of the device. The challenge was to deliver a precise amount of energy to the load based on a predefined fusion schedule. The table below outlines the key electrical parameters targeted during the POC phase.</p>

                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Parameter</th>
                                        <th>Value</th>
                                        <th>Justification</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Input Voltage</td>
                                        <td class="status-info">72V DC</td>
                                        <td>Aligns with the native voltage of the Milwaukee MX FUEL™ platform.</td>
                                    </tr>
                                    <tr>
                                        <td>Output Voltage</td>
                                        <td class="status-info">40V AC</td>
                                        <td>Determined by the characteristic electrical and thermal requirements of the electrofusion couplers and their specific fusion schedules. This value ensures optimal energy delivery to the resistive load.</td>
                                    </tr>
                                    <tr>
                                        <td>Load Range</td>
                                        <td class="status-info">0.5Ω to 12Ω</td>
                                        <td>Accommodates the wide variety of standard electrofusion coupler sizes and types.</td>
                                    </tr>
                                    <tr>
                                        <td>Output Frequency</td>
                                        <td class="status-info">60 Hz</td>
                                        <td>A standard frequency that provides the required alternating current for the resistive heating element.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p class="text-gray-300 mb-6">The importance of involvement in the "spec refining" process cannot be overstated. The specific output voltage and frequency (40V, 60Hz) were not arbitrary values. They were derived from a detailed understanding of the thermal and electrical characteristics of existing electrofusion couplers. A resistive heating element's power delivery is a function of voltage, current, and time. Therefore, achieving the correct energy delivery for the fusion process demanded a tailored solution, not a generic inverter design. The development of these precise specifications demonstrated a deep understanding of the end application's requirements, which was fundamental to the design's success.</p>

                        <h3 class="text-xl font-semibold text-white mb-3">C. Visualizing the System Architecture</h3>
                        
                        <p class="text-gray-300 mb-4">The high-level system design was conceptualized and prototyped as a block diagram. This visual representation of the electrical system demonstrates the key components and their interconnections. The diagram illustrates the power source as the "MKE battery" (Milwaukee battery), which supplies power to the "PCBA with H-Bridge design". This circuit board then converts the battery's power to the appropriate output for the "EF coupler with heating element".</p>
                        
                        <div class="bg-gray-900 p-6 rounded-lg border border-gray-700 my-6">
                            <h4 class="text-lg font-semibold text-primary-color mb-4 text-center">Electrofusion process</h4>
                            <div class="flex justify-center">
                                <div>
                                    <img src="images/electrofusion_image_1.png" alt="Electrofusion process" class="w-full rounded-lg border border-gray-600">
                                    <p class="text-gray-400 text-sm text-center mt-2">Electrofusion process</p>
                                </div>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-3">D. The H-Bridge Inverter and Modified Sine Wave Generation</h3>
                        
                        <p class="text-gray-300 mb-4">The H-bridge inverter was the core power conversion circuit designed and built for the POC. It utilizes four power MOSFETs in a specific configuration to convert the static 72V DC input from the battery into an alternating current output. The process involves sequentially switching the diagonal pairs of MOSFETs, which reverses the polarity across the load and generates the desired AC waveform.</p>
                        
                        <div class="bg-gray-900 p-6 rounded-lg border border-gray-700 my-6">
                            <h4 class="text-lg font-semibold text-primary-color mb-4 text-center">Prototype of electrofusion device PoC</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <img src="images/electrofusion_image_3.png" alt="Complete prototype setup showing MKE battery, PCBA with H-Bridge design, and EF coupler" class="w-full rounded-lg border border-gray-600">
                                    <p class="text-gray-400 text-sm text-center mt-2">Heating element</p>
                                </div>
                                <div>
                                    <img src="images/electrofusion_image_4.png" alt="Detailed view of H-Bridge PCBA and connections" class="w-full rounded-lg border border-gray-600">
                                    <p class="text-gray-400 text-sm text-center mt-2">H-Bridge PCBA and electrical connections</p>
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                <div class="bg-gray-800 p-4 rounded">
                                    <h5 class="text-primary-color font-semibold mb-2">MKE Battery</h5>
                                    <p class="text-gray-400 text-sm">72V MX FUEL™ power source</p>
                                </div>
                                <div class="bg-gray-800 p-4 rounded">
                                    <h5 class="text-primary-color font-semibold mb-2">H-Bridge PCBA</h5>
                                    <p class="text-gray-400 text-sm">Custom inverter circuit</p>
                                </div>
                                <div class="bg-gray-800 p-4 rounded">
                                    <h5 class="text-primary-color font-semibold mb-2">EF Coupler</h5>
                                    <p class="text-gray-400 text-sm">Heating element load</p>
                                </div>
                            </div>
                        </div>

                        <p class="text-gray-300 mb-6">For this application, a modified sine wave was intentionally chosen over a pure sine wave. While Milwaukee's MX FUEL™ CARRY-ON Power Supply uses a pure sine inverter to power sensitive electronics, the electrofusion coupler is a simple resistive heating element. It has no sensitive components that could be damaged by the harmonics present in a modified sine wave. Generating a pure sine wave would have required a more complex control scheme, such as Pulse Width Modulation (PWM), and additional bulky filter components. This would have added unnecessary cost, complexity, and size to the prototype. The choice to use a modified sine wave demonstrates a pragmatic engineering approach, where the solution's complexity is precisely matched to the load's requirements, resulting in a more robust, cost-effective, and simpler design.</p>

                        <h3 class="text-xl font-semibold text-white mb-3">E. Safety Circuit Design and Implementation</h3>
                        
                        <p class="text-gray-300 mb-4">Given the high-power nature of the device and its intended use on a job site, the design of safety circuits was a paramount concern. A variety of safety features were integrated directly into the physical circuit design to prevent dangerous conditions such as overcurrent, over-temperature, and short circuits. The Milwaukee MX FUEL™ charger manual repeatedly emphasizes safety, with warnings against short circuits and over-temperature states, as well as a range of internal protections. This emphasis confirms that a robust safety philosophy is a core tenet of the entire MX FUEL™ platform. My contribution of building foundational safety circuits was not merely a design requirement but a deep integration into the company's core values of user protection and product reliability.</p>

                        <h4 class="text-lg font-semibold text-primary-color mb-3">Technical Implementation and Challenges</h4>
                        
                        <p class="text-gray-300 mb-4">The safety of a high-power lithium-ion battery system hinges on its Battery Management System (BMS), which acts as the "brain" of the battery pack, monitoring and regulating its performance to ensure safety and longevity. My work on the POC involved designing and building custom circuits to replicate this critical BMS functionality for the device itself.</p>

                        <p class="text-gray-300 mb-4">The following protection circuits were designed and implemented with specific technical challenges in mind:</p>

                        <ul class="list-disc list-inside text-gray-400 space-y-4 mb-6">
                            <li><strong class="text-white">Over-current and Short-circuit Protection:</strong> High-power applications are highly susceptible to over-current events and short circuits, which can lead to rapid overheating and catastrophic failure of components. A technical approach to designing these circuits involves using a low-resistance shunt resistor placed in series with the current path to measure the load current. A small voltage drop is generated across the resistor, which is then fed into a comparator circuit. The comparator, often an operational amplifier (op-amp), compares this voltage to a fixed reference voltage that corresponds to the maximum permissible current. If the voltage from the shunt exceeds the threshold, the circuit's output triggers an immediate shutdown signal to the inverter's control system, instantly disabling the inverter to prevent damage. The primary technical challenge was to design a circuit that could react with near-instantaneous speed to prevent dangerous conditions.</li>
                            
                            <li><strong class="text-white">Over-temperature Protection:</strong> Power electronic devices generate heat due to inefficiencies in semiconductor materials and circuit components. The sustained, high-current draw of the electrofusion process made thermal management a significant challenge. The safety circuit continuously monitored the temperature of the power electronics and the battery, automatically shutting down the system if the temperature exceeded a safe operating range. This was a crucial design element to prevent the degradation of performance and potential failure. This aligns with the final product's use of "COOL-CYCLE™ Fans" and internal thermal monitoring, which were informed by the real-world data collected during the POC's rigorous testing.</li>
                            
                            <li><strong class="text-white">Over-voltage and Over-discharge Protection:</strong> A fundamental role of the BMS is to monitor the battery's state of charge. My custom circuits included this functionality to prevent over-discharge, where the battery's voltage drops below a safe level, permanently reducing its life and capacity. Similarly, the circuit prevented over-voltage, which can cause excessive heat and thermal runaway. This delicate oversight ensures the cells are kept within their safe operating area to provide a stable and reliable system.</li>
                        </ul>

                        <p class="text-gray-300 mb-6">These protection features were not just theoretical; they were physically built and tested on the prototype to prove they could handle the extreme demands of the application. The ability of the final product's battery to shut down the tool in situations of extremely high current draw or over-temperature is a direct result of these foundational circuits developed during the POC phase.</p>

                        <h2 class="text-2xl font-bold text-primary-color mb-4 mt-8">IV. Advanced Component-Level Design: The MOSFET Circuits</h2>
                        
                        <h3 class="text-xl font-semibold text-white mb-3">A. MOSFET Selection and Characterization</h3>
                        
                        <p class="text-gray-300 mb-4">The successful operation of the H-bridge inverter relied on the careful selection of power MOSFETs capable of handling the high voltage and current demands of the application. The selection process went beyond simple voltage and current ratings. It involved a detailed analysis of key performance parameters to ensure the device's reliability and efficiency.</p>

                        <p class="text-gray-300 mb-4">The following table summarizes the critical criteria used for MOSFET selection.</p>

                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Parameter</th>
                                        <th>Symbol</th>
                                        <th>Engineering Rationale</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Drain-Source Voltage</td>
                                        <td>V<sub>DS</sub></td>
                                        <td>Must exceed the maximum input voltage (72VDC) with a sufficient safety margin to handle any voltage spikes.</td>
                                    </tr>
                                    <tr>
                                        <td>Continuous Drain Current</td>
                                        <td>I<sub>D</sub></td>
                                        <td>Must be rated for the sustained, high-current flow required by the lowest-resistance loads in the specified range.</td>
                                    </tr>
                                    <tr>
                                        <td>On-Resistance</td>
                                        <td>R<sub>DS(on)</sub></td>
                                        <td>A critical parameter for minimizing conduction losses (P<sub>loss</sub> = I² × R<sub>DS(on)</sub>), which directly impacts the thermal performance and overall efficiency of the inverter.</td>
                                    </tr>
                                    <tr>
                                        <td>Total Gate Charge</td>
                                        <td>Q<sub>g</sub></td>
                                        <td>Directly influences switching speed. A lower gate charge allows for faster switching, which reduces switching losses and improves efficiency.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-3">B. Gate Ringing: A Deep Dive into Mitigation</h3>
                        
                        <p class="text-gray-300 mb-4">One of the most complex and critical challenges in high-power converter design is the phenomenon of gate ringing. This is an unwanted oscillation that can occur on a MOSFET's gate terminal during the switching cycle. If the amplitude of this ringing is large enough to push the gate voltage above the MOSFET's threshold, it can cause a dangerous and uncontrolled "false turn-on" that leads to catastrophic component failure.</p>

                        <p class="text-gray-300 mb-4">Gate ringing is caused by the "resonant tank" formed by parasitic elements within the circuit, specifically the parasitic inductances of the drain and source terminals (L<sub>stray</sub>, L<sub>source</sub>) and the gate-to-drain capacitance (C<sub>gd</sub>) of the MOSFET. The issue is compounded when multiple MOSFETs are used in parallel, as is necessary for high-current applications, because it creates a system with multiple resonant frequencies.</p>

                        <p class="text-gray-300 mb-4">My contribution involved the detailed characterization of this issue and the implementation of specific countermeasures. The characterization process required the use of a high-bandwidth oscilloscope to probe the gate and drain waveforms on the prototype, allowing for the precise identification and quantification of the ringing oscillations. The mitigation strategies I implemented were focused on dampening these oscillations while preserving the system's efficiency.</p>

                        <p class="text-gray-300 mb-4">The following table details the mitigation strategies employed to solve the gate ringing issue.</p>

                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Strategy</th>
                                        <th>Rationale & Implementation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="table-highlight">PCB Layout Optimization</td>
                                        <td>Minimized trace lengths and power loop areas to reduce parasitic inductance. Employed a strip-line approach to routing and ensured close placement of bypass capacitors.</td>
                                    </tr>
                                    <tr>
                                        <td class="table-highlight">Individual Gate Resistors</td>
                                        <td>A dedicated damping resistor (e.g., 4.7Ω) was placed as physically close as possible to the gate of each individual MOSFET. This resistor helps decrease the Q factor of the resonant tank, dampening the oscillations.</td>
                                    </tr>
                                    <tr>
                                        <td class="table-highlight">MOSFET Technology Selection</td>
                                        <td>Selected MOSFETs with integrated gate resistors or a Kelvin-source pinout to further dampen oscillations and reduce dependencies on external layout.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p class="text-gray-300 mb-6">It is a core engineering principle that increasing gate resistance to dampen ringing also slows down the switching process, which in turn increases switching losses and reduces overall efficiency. The task was to find the optimal balance between stability (mitigating ringing) and efficiency, which required a nuanced, hands-on understanding of the power electronics. The ability to characterize and successfully solve this complex problem, which goes beyond a simple schematic design, was a key demonstration of advanced engineering expertise and was critical to the reliability of the final product.</p>

                        <h2 class="text-2xl font-bold text-primary-color mb-4 mt-8">V. Prototype Validation and Data-Driven Insights</h2>
                        
                        <h3 class="text-xl font-semibold text-white mb-3">A. The Testing Protocol</h3>
                        
                        <p class="text-gray-300 mb-4">The prototype was subjected to a rigorous testing protocol to validate its performance and durability. This involved "testing the product for multiple fusions," a process that validated the device's ability to reliably deliver consistent power over repeated cycles. This testing was not limited to electrical performance; it also served as a crucial validation of the prototype's thermal management system. The Milwaukee MX FUEL™ charger manual mentions the use of "COOL-CYCLE™ Fans" and thermal monitoring capabilities, indicating that the entire MX FUEL™ platform is built with advanced thermal management in mind. My testing provided critical, real-world data on the thermal performance of both the power electronics and the battery under the extreme, sustained load of an electrofusion event, directly informing the development of the broader platform's thermal control systems.</p>

                        <h3 class="text-xl font-semibold text-white mb-3">B. The Data Logging System</h3>
                        
                        <p class="text-gray-300 mb-4">A key contribution of the POC was the design and integration of a data logging system. This system was engineered to collect crucial operational data points, including fusion time, voltage, current, and ambient temperature. The purpose of this system was twofold: to validate the performance of the prototype against the specified fusion schedules and to provide actionable data for future product development.</p>

                        <p class="text-gray-300 mb-6">This early data logging work was not a trivial side task. It was the foundational proof of concept that a data logging feature for fusion events was both technically feasible and commercially valuable. The commercial product, the Milwaukee MX FUEL™ Electrofusion Processor (MXF545-XC), features a sophisticated ONE-KEY™ data logging system that allows for customizable reports and data download via USB or wireless connectivity. My initial work on the POC demonstrated that this functionality was viable and directly influenced its inclusion as a core feature and a key selling point of the final product, enabling contractors to provide detailed quality assurance reports to their clients.</p>

                        <h3 class="text-xl font-semibold text-white mb-3">C. The Final Product: A Triumphant Success</h3>
                        
                        <div class="bg-gray-900 p-6 rounded-lg border border-gray-700 my-6">
                            <div class="flex items-center mb-4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Milwaukee_Logo.svg" alt="Milwaukee Tool Logo" class="w-8 h-8 mr-3 bg-white rounded p-1">
                                <h4 class="text-lg font-semibold text-primary-color">MX FUEL™ Electrofusion Processor (MXF545-XC)</h4>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                <div class="bg-gray-800 p-4 rounded">
                                    <div class="text-3xl text-green-500 mb-2">✓</div>
                                    <p class="text-white font-semibold">Cordless Operation</p>
                                    <p class="text-gray-400 text-sm">No generators needed</p>
                                </div>
                                <div class="bg-gray-800 p-4 rounded">
                                    <div class="text-3xl text-blue-500 mb-2">📊</div>
                                    <p class="text-white font-semibold">ONE-KEY™ Data</p>
                                    <p class="text-gray-400 text-sm">Digital logging system</p>
                                </div>
                                <div class="bg-gray-800 p-4 rounded">
                                    <div class="text-3xl text-orange-500 mb-2">🔥</div>
                                    <p class="text-white font-semibold">8" Capability</p>
                                    <p class="text-gray-400 text-sm">High-power fusing</p>
                                </div>
                            </div>
                        </div>
                        
                        <p class="text-gray-300 mb-4">The final product, the Milwaukee MX FUEL™ Electrofusion Processor, is a testament to the success of the POC. It embodies the core architectural and design choices that were validated during the project. The table below illustrates the direct lineage of the POC's features to the commercial product's capabilities.</p>

                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Proof of Concept (POC) Feature</th>
                                        <th>Final Product (MXF545-XC) Feature</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>72V DC Input</td>
                                        <td>Part of the Milwaukee MX FUEL™ platform.</td>
                                    </tr>
                                    <tr>
                                        <td>Custom-Designed H-Bridge Inverter</td>
                                        <td>A cordless device that provides the power previously only available from generators or cords.</td>
                                    </tr>
                                    <tr>
                                        <td>Data Logging System</td>
                                        <td>Integrated with the sophisticated ONE-KEY™ platform, providing customizable reports and data download.</td>
                                    </tr>
                                    <tr>
                                        <td>Extensive Fusing Test</td>
                                        <td>Capable of fusing up to 8" couplings and 12" saddles, demonstrating high-power reliability.</td>
                                    </tr>
                                    <tr>
                                        <td>Physical Prototype Build</td>
                                        <td>The commercial product is up to 40% lighter than previous solutions, with field-replaceable components, an outcome of early design considerations.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 class="text-2xl font-bold text-primary-color mb-4 mt-8">VI. Conclusion: Professional Impact and Future-Proofing</h2>
                        
                        <p class="text-gray-300 mb-4">The successful completion of the electrofusion device POC was a pivotal moment in the development of the Milwaukee MX FUEL™ platform. My contributions, which ranged from high-level system architecture to intricate component-level design, provided the critical technical validation required to move the project from concept to a successful commercial product.</p>

                        <p class="text-gray-300 mb-6">The project demonstrated that my expertise in power electronics was not merely theoretical but could be applied to solve complex, real-world engineering challenges. The mastery of intricate issues, such as gate ringing, and the strategic foresight to build in a data logging system, which became a cornerstone of the final product, were critical to the project's success. These contributions are now embodied in a market-leading product, a testament to my technical competence, problem-solving skills, and ability to deliver on complex engineering challenges.</p>
                    </div>
                `
            },
            'gps-smart-sensor': {
                title: 'GPS Smart Sensor Tester: High-Precision Navigation System Validation Platform',
                description: `
                    <div class="space-y-6">
                        <h2 class="text-2xl font-bold text-primary-color mb-4">GPS Smart Sensor Tester: High-Precision Navigation System Validation Platform</h2>
                        
                        <h3 class="text-xl font-semibold text-white mb-4">Executive Summary</h3>
                        <p class="text-gray-300 mb-4">
                            The GPS Smart Sensor Tester represents a comprehensive validation and testing platform designed 
                            for high-precision GPS navigation systems. This sophisticated test equipment enables thorough 
                            characterization of GPS receivers, antenna performance, and signal processing algorithms under 
                            controlled laboratory conditions and real-world scenarios.
                        </p>

                        <!-- GPS Smart Sensor Images -->
                        <div class="bg-gray-900 p-6 rounded-lg border border-gray-700 my-6">
                            <h4 class="text-lg font-semibold text-primary-color mb-4 text-center">GPS Smart Sensor Testing Platform</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                <div class="text-center">
                                    <img src="images/GPS_Smart_sensor_1.png" alt="GPS Smart Sensor Test Setup" class="w-full h-64 object-contain rounded-lg mb-2">
                                    <h5 class="text-sm font-semibold text-white mb-1">Complete Test Setup</h5>
                                    <p class="text-sm text-gray-400">Comprehensive GPS testing platform with signal generator, receiver modules, antenna arrays, and measurement instrumentation for precision navigation system validation.</p>
                                </div>
                                <div class="text-center">
                                    <img src="images/GPS_Smart_sensor_2.png" alt="GPS Receiver Module Testing" class="w-full h-64 object-contain rounded-lg mb-2">
                                    <h5 class="text-sm font-semibold text-white mb-1">Receiver Module Testing</h5>
                                    <p class="text-sm text-gray-400">Detailed view of GPS receiver module under test with RF connections, power monitoring, and data acquisition interfaces for comprehensive performance analysis.</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="text-center">
                                    <img src="images/GPS_Smart_sensor_3.png" alt="Signal Analysis Interface" class="w-full h-64 object-contain rounded-lg mb-2">
                                    <h5 class="text-sm font-semibold text-white mb-1">Signal Analysis Interface</h5>
                                    <p class="text-sm text-gray-400">Advanced signal analysis and monitoring interface displaying constellation tracking, signal strength metrics, and real-time positioning accuracy measurements.</p>
                                </div>
                                <div class="text-center">
                                    <img src="images/GPS_Smart_sensor_4.png" alt="Precision Antenna Testing" class="w-full h-64 object-contain rounded-lg mb-2">
                                    <h5 class="text-sm font-semibold text-White mb-1">Precision Antenna Testing</h5>
                                    <p class="text-sm text-gray-400">High-precision antenna testing chamber with controlled RF environment, multipath simulation, and antenna pattern characterization capabilities for optimal reception analysis.</p>
                                </div>
                            </div>
                            <!-- Additional GPS Smart Sensor Image -->
                            <div class="flex justify-center mt-6">
                                <div class="text-center max-w-md">
                                    <img src="images/GPS_Smart_sensor_5.png" alt="GPS Smart Sensor System Integration" class="w-full h-64 object-contain rounded-lg mb-2">
                                    <h5 class="text-sm font-semibold text-white mb-1">System Integration & Validation</h5>
                                    <p class="text-sm text-gray-400">Complete GPS smart sensor system integration showing final assembly, validation procedures, and comprehensive testing protocols for navigation accuracy and system performance verification.</p>
                                </div>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">System Architecture and Design Philosophy</h3>
                        <p class="text-gray-300 mb-4">
                            The GPS Smart Sensor Tester is built around a modular architecture that supports comprehensive 
                            testing of GPS navigation systems across multiple frequency bands and satellite constellations. 
                            The system integrates hardware-in-the-loop testing capabilities with advanced signal analysis 
                            tools to provide complete validation coverage from RF front-end performance to position 
                            calculation accuracy.
                        </p>

                        <h3 class="text-xl font-semibold text-white mb-4">Core Testing Capabilities</h3>
                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Test Category</th>
                                        <th>Capability</th>
                                        <th>Specifications</th>
                                        <th>Applications</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>RF Performance</td>
                                        <td>Signal Sensitivity Testing</td>
                                        <td>-160 dBm to -130 dBm range</td>
                                        <td>Receiver sensitivity validation, weak signal performance</td>
                                    </tr>
                                    <tr>
                                        <td>Constellation Support</td>
                                        <td>Multi-GNSS Testing</td>
                                        <td>GPS, GLONASS, Galileo, BeiDou</td>
                                        <td>Global navigation system compatibility</td>
                                    </tr>
                                    <tr>
                                        <td>Accuracy Validation</td>
                                        <td>Position Error Analysis</td>
                                        <td>Sub-meter to centimeter precision</td>
                                        <td>High-precision navigation applications</td>
                                    </tr>
                                    <tr>
                                        <td>Environmental Testing</td>
                                        <td>Multipath Simulation</td>
                                        <td>Urban canyon, indoor scenarios</td>
                                        <td>Real-world performance validation</td>
                                    </tr>
                                    <tr>
                                        <td>Time Synchronization</td>
                                        <td>Clock Stability Testing</td>
                                        <td>Nanosecond-level accuracy</td>
                                        <td>Timing-critical applications</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Advanced Features and Instrumentation</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h4 class="text-lg font-semibold text-primary-color mb-3">Hardware Components</h4>
                                <ul class="list-disc list-inside text-gray-400 space-y-2">
                                    <li><strong class="text-white">RF Signal Generators:</strong> Precision GPS signal simulation with programmable scenarios</li>
                                    <li><strong class="text-white">Spectrum Analyzers:</strong> Real-time frequency domain analysis and interference detection</li>
                                    <li><strong class="text-white">Network Analyzers:</strong> Antenna impedance and return loss characterization</li>
                                    <li><strong class="text-white">Power Meters:</strong> Accurate RF power measurement and calibration</li>
                                    <li><strong class="text-white">Environmental Chamber:</strong> Temperature and humidity controlled testing</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-primary-color mb-3">Software Capabilities</h4>
                                <ul class="list-disc list-inside text-gray-400 space-y-2">
                                    <li><strong class="text-white">Automated Test Sequences:</strong> Scripted validation protocols for consistent testing</li>
                                    <li><strong class="text-white">Real-time Monitoring:</strong> Live constellation tracking and signal quality metrics</li>
                                    <li><strong class="text-white">Data Logging:</strong> Comprehensive test result capture and analysis</li>
                                    <li><strong class="text-white">Report Generation:</strong> Automated compliance and performance reporting</li>
                                    <li><strong class="text-white">Visualization Tools:</strong> 3D constellation plots and signal strength mapping</li>
                                </ul>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Performance Metrics and Validation</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Position Accuracy</h4>
                                <p class="text-white text-2xl">&lt;1 meter</p>
                                <p class="text-gray-400 text-sm">Standard GPS conditions</p>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Time to Fix</h4>
                                <p class="text-white text-2xl">&lt;30 sec</p>
                                <p class="text-gray-400 text-sm">Cold start acquisition</p>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Sensitivity</h4>
                                <p class="text-white text-2xl">-160 dBm</p>
                                <p class="text-gray-400 text-sm">Minimum signal tracking</p>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Update Rate</h4>
                                <p class="text-white text-2xl">10 Hz</p>
                                <p class="text-gray-400 text-sm">Position calculation frequency</p>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Testing Protocols and Methodologies</h3>
                        <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-6">
                            <h4 class="text-lg font-semibold text-primary-color mb-3">Comprehensive Validation Framework</h4>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="bg-gray-800 p-4 rounded">
                                    <h5 class="text-white font-semibold mb-2">Laboratory Testing</h5>
                                    <ul class="text-gray-400 text-sm space-y-1">
                                        <li>• Controlled RF environment</li>
                                        <li>• Calibrated signal sources</li>
                                        <li>• Repeatable test conditions</li>
                                        <li>• Precision measurement tools</li>
                                    </ul>
                                </div>
                                <div class="bg-gray-800 p-4 rounded">
                                    <h5 class="text-white font-semibold mb-2">Field Validation</h5>
                                    <ul class="text-gray-400 text-sm space-y-1">
                                        <li>• Real-world signal conditions</li>
                                        <li>• Multipath environment testing</li>
                                        <li>• Mobile platform validation</li>
                                        <li>• Environmental stress testing</li>
                                    </ul>
                                </div>
                                <div class="bg-gray-800 p-4 rounded">
                                    <h5 class="text-white font-semibold mb-2">Performance Analysis</h5>
                                    <ul class="text-gray-400 text-sm space-y-1">
                                        <li>• Statistical accuracy assessment</li>
                                        <li>• Long-term stability monitoring</li>
                                        <li>• Interference susceptibility testing</li>
                                        <li>• Compliance verification</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Technical Specifications</h3>
                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Parameter</th>
                                        <th>Specification</th>
                                        <th>Range</th>
                                        <th>Accuracy</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Frequency Coverage</td>
                                        <td class="status-info">L1/L2/L5 Bands</td>
                                        <td>1164-1610 MHz</td>
                                        <td>±1 kHz</td>
                                    </tr>
                                    <tr>
                                        <td>Signal Power Range</td>
                                        <td class="status-info">Variable Attenuation</td>
                                        <td>-170 to -100 dBm</td>
                                        <td>±0.5 dB</td>
                                    </tr>
                                    <tr>
                                        <td>Position Accuracy</td>
                                        <td class="status-success">High Precision</td>
                                        <td>1 cm to 10 m CEP</td>
                                        <td>±5% of reading</td>
                                    </tr>
                                    <tr>
                                        <td>Time Reference</td>
                                        <td class="status-success">UTC Synchronized</td>
                                        <td>±10 ns to ±1 μs</td>
                                        <td>±1 ns</td>
                                    </tr>
                                    <tr>
                                        <td>Data Logging</td>
                                        <td class="status-info">Continuous Recording</td>
                                        <td>1 Hz to 20 Hz</td>
                                        <td>100% capture rate</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Applications and Use Cases</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h4 class="text-lg font-semibold text-primary-color mb-3">Industry Applications</h4>
                                <ul class="list-disc list-inside text-gray-400 space-y-2">
                                    <li><strong class="text-white">Automotive:</strong> Vehicle navigation system validation and ADAS testing</li>
                                    <li><strong class="text-white">Aerospace:</strong> Aviation GPS equipment certification and performance verification</li>
                                    <li><strong class="text-white">Maritime:</strong> Marine navigation system accuracy and reliability testing</li>
                                    <li><strong class="text-white">Survey/Mapping:</strong> High-precision positioning equipment calibration</li>
                                    <li><strong class="text-white">Agriculture:</strong> Precision farming GPS guidance system validation</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-primary-color mb-3">Research and Development</h4>
                                <ul class="list-disc list-inside text-gray-400 space-y-2">
                                    <li><strong class="text-white">Algorithm Development:</strong> Signal processing and positioning algorithm optimization</li>
                                    <li><strong class="text-white">Antenna Design:</strong> GPS antenna performance characterization and optimization</li>
                                    <li><strong class="text-white">Interference Studies:</strong> Jamming and spoofing vulnerability assessment</li>
                                    <li><strong class="text-white">Standards Compliance:</strong> Regulatory certification and compliance testing</li>
                                    <li><strong class="text-white">Performance Benchmarking:</strong> Competitive analysis and system comparison</li>
                                </ul>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Advanced Testing Scenarios</h3>
                        <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-6">
                            <h4 class="text-lg font-semibold text-primary-color mb-3">Challenging Environment Simulation</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div class="bg-gray-800 p-4 rounded">
                                    <h5 class="text-white font-semibold mb-2">Urban Canyon Effects</h5>
                                    <ul class="text-gray-400 text-sm space-y-1">
                                        <li>• Building reflection simulation</li>
                                        <li>• Signal blockage modeling</li>
                                        <li>• Multipath delay profiling</li>
                                        <li>• NLOS signal identification</li>
                                    </ul>
                                </div>
                                <div class="bg-gray-800 p-4 rounded">
                                    <h5 class="text-white font-semibold mb-2">Atmospheric Conditions</h5>
                                    <ul class="text-gray-400 text-sm space-y-1">
                                        <li>• Ionospheric delay modeling</li>
                                        <li>• Tropospheric scintillation</li>
                                        <li>• Weather-induced variations</li>
                                        <li>• Seasonal performance analysis</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Quality Assurance and Calibration</h3>
                        <p class="text-gray-300 mb-4">
                            The GPS Smart Sensor Tester maintains traceability to national time and frequency standards, 
                            ensuring measurement accuracy and repeatability. Regular calibration procedures validate the 
                            test equipment against certified reference standards, providing confidence in test results 
                            and supporting regulatory compliance requirements.
                        </p>

                        <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-6">
                            <h4 class="text-lg font-semibold text-primary-color mb-3">Calibration Standards</h4>
                            <ul class="list-disc list-inside text-gray-400 space-y-2">
                                <li><strong class="text-white">Frequency Reference:</strong> Rubidium or cesium atomic clock standards</li>
                                <li><strong class="text-white">Power Calibration:</strong> NIST-traceable RF power meters and standards</li>
                                <li><strong class="text-white">Position Reference:</strong> Survey-grade coordinates with centimeter accuracy</li>
                                <li><strong class="text-white">Time Synchronization:</strong> UTC(NIST) disciplined oscillators</li>
                            </ul>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">Future Enhancements and Development</h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Next-Generation Features</h4>
                                <ul class="text-gray-400 text-sm space-y-1">
                                    <li>• Multi-constellation GNSS support</li>
                                    <li>• Real-time kinematic (RTK) testing</li>
                                    <li>• Precise point positioning (PPP)</li>
                                    <li>• Advanced spoofing simulation</li>
                                </ul>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Integration Capabilities</h4>
                                <ul class="text-gray-400 text-sm space-y-1">
                                    <li>• IoT device testing support</li>
                                    <li>• 5G positioning integration</li>
                                    <li>• Machine learning optimization</li>
                                    <li>• Cloud-based analytics</li>
                                </ul>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Automation Features</h4>
                                <ul class="text-gray-400 text-sm space-y-1">
                                    <li>• Fully automated test suites</li>
                                    <li>• AI-powered anomaly detection</li>
                                    <li>• Predictive maintenance</li>
                                    <li>• Remote monitoring capabilities</li>
                                </ul>
                            </div>
                        </div>

                        <div class="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                            <h4 class="text-lg font-semibold text-primary-color mb-2">Project Impact</h4>
                            <p class="text-gray-400">The GPS Smart Sensor Tester represents a comprehensive solution for validating and characterizing GPS navigation systems, providing the tools necessary for ensuring high-performance, reliable positioning across diverse applications and challenging environments.</p>
                        </div>
                    </div>
                `,
            },
            'wearables': {
                title: 'Wireless Monitoring of Driver\'s Pulse Rate and Temperature Using Hand Gloves Approach',
                description: `
                    <div class="space-y-6">
                        <h2 class="text-2xl font-bold text-primary-color mb-4">Wireless Monitoring of Driver's Pulse Rate and Temperature Using Hand Gloves Approach</h2>
                        
                        <h3 class="text-xl font-semibold text-white mb-4">1. Introduction: The Evolving Landscape of Non-Invasive Physiological Monitoring</h3>
                        <p class="text-gray-300 mb-4">
                            The global burden of cardiovascular diseases represents a significant public health challenge, 
                            with mortality rates steadily increasing worldwide. In response to this, a notable shift has 
                            occurred from traditional, in-clinic physiological monitoring toward continuous, non-invasive 
                            solutions enabled by wearable technology. These devices provide a convenient, continuous, 
                            and cost-effective means of monitoring vital signs, facilitating preventative measures and risk 
                            factor control.
                        </p>

                        <p class="text-gray-300 mb-4">
                            At the heart of many of these wearable systems is Photoplethysmography (PPG), a 
                            non-invasive optical technique used to detect blood volume changes in the microvasculature. Its 
                            convenience and capacity for continuous readings make PPG an ideal technology for personal 
                            portable devices and home health monitoring, providing a wealth of information about both the 
                            cardiovascular and respiratory systems.
                        </p>

                        <p class="text-gray-300 mb-6">
                            The system detailed in this report is a hand-glove-based wearable PPG monitor, designed to 
                            acquire and transmit vital sign data, specifically heart rate and body temperature. The following 
                            sections provide a deep, technical analysis of its design, from the foundational biophysical 
                            principles to the intricate details of its analog and digital signal processing chains.
                        </p>

                        <!-- System Overview Images -->
                        <div class="bg-gray-900 p-6 rounded-lg border border-gray-700 my-6">
                            <h4 class="text-lg font-semibold text-primary-color mb-4 text-center">Wearable PPG Monitoring System Overview</h4>
                        <div class="grid grid-cols-1 gap-6 mb-4">
                            <div class="text-center">
                                <img src="images/Hand_Glove_1.png" alt="Receiver end architecture" class="w-full h-80 object-contain rounded-lg mb-2">
                                <h5 class="text-sm font-semibold text-white mb-1">Receiver End Architecture</h5>
                                <p class="text-sm text-gray-400">Complete receiver unit featuring ZigBee communication module, data processing capabilities, LCD display interface, GPS tracking, and GSM emergency communication system for comprehensive health monitoring.</p>
                            </div>
                            <div class="text-center">
                                <img src="images/Hand_Glove_2.png" alt="Transmitter end architecture" class="w-full h-80 object-contain rounded-lg mb-2">
                                <h5 class="text-sm font-semibold text-white mb-1">Transmitter End Architecture</h5>
                                <p class="text-sm text-gray-400">Hand glove transmitter module with integrated PPG sensors, temperature monitoring, analog front-end processing, and ZigBee wireless transmission capabilities for continuous vital signs acquisition.</p>
                            </div>
                            <div class="text-center">
                                <img src="images/Hand_Glove_3.png" alt="Subject with the glove driving" class="w-full h-80 object-contain rounded-lg mb-2">
                                <h5 class="text-sm font-semibold text-white mb-1">Subject with the Glove Driving</h5>
                                <p class="text-sm text-gray-400">Real-world application demonstration showing driver wearing the PPG monitoring glove during vehicle operation, enabling continuous health monitoring and fatigue detection for enhanced road safety.</p>
                            </div>
                            <div class="text-center">
                                <img src="images/Hand_Glove_4.png" alt="Proof of concept setup" class="w-full h-80 object-contain rounded-lg mb-2">
                                <h5 class="text-sm font-semibold text-white mb-1">Proof of Concept</h5>
                                <p class="text-sm text-gray-400">Laboratory proof of concept demonstration showcasing the complete wearable PPG monitoring system with hand glove, receiver unit, and real-time data acquisition capabilities.</p>
                            </div>
                            <div class="text-center">
                                <img src="images/Hand_Glove_5.png" alt="System validation and testing" class="w-full h-80 object-contain rounded-lg mb-2">
                                <h5 class="text-sm font-semibold text-white mb-1">System Validation and Testing</h5>
                                <p class="text-sm text-gray-400">Comprehensive system testing and validation setup demonstrating signal quality assessment, accuracy measurements, and performance verification of the complete wearable health monitoring solution.</p>
                            </div>
                        </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">2. Theoretical Framework and LED Wavelength Selection</h3>
                        
                        <h4 class="text-lg font-semibold text-primary-color mb-3">2.1. Biophysical Principles of Photoplethysmography</h4>
                        <p class="text-gray-300 mb-4">
                            The PPG technique relies on the Beer-Lambert law, which describes the exponential decrease 
                            of light intensity as it passes through an absorbent medium, a process that is highly dependent 
                            on the light's wavelength. A wearable PPG device operates in a reflection-based 
                            configuration, where a light source (LED) and a photodetector are placed side-by-side on the 
                            skin. The photodetector measures the light that is backscattered from the tissue after being 
                            modulated by the pulsating arterial blood volume.
                        </p>

                        <p class="text-gray-300 mb-4">The photodetector's output signal, the PPG waveform, is composed of two distinct components:</p>
                        <ul class="list-disc list-inside text-gray-400 space-y-2 mb-6">
                            <li><strong class="text-white">Direct Current (DC) Component:</strong> This large, slowly varying component represents the 
                            relatively constant absorption and scattering of light by the static tissues (skin, bone, 
                            muscle, and venous blood).</li>
                            <li><strong class="text-white">Alternating Current (AC) Component:</strong> This small, superimposed component is 
                            synchronous with the cardiac rhythm and results from the pulsatile change in arterial 
                            blood volume with each heartbeat. The frequency of this AC signal is directly proportional 
                            to the pulse rate, which serves as a proxy for heart rate.</li>
                        </ul>

                        <h4 class="text-lg font-semibold text-primary-color mb-3">2.2. A Comparative Analysis of LED Wavelengths for PPG</h4>
                        <p class="text-gray-300 mb-4">
                            The choice of LED wavelength is a critical design decision that fundamentally impacts the 
                            performance and application of the PPG system. A comparative analysis of common 
                            wavelengths used reveals distinct trade-offs in their biophysical interaction with human tissue:
                        </p>

                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Wavelength</th>
                                        <th>Characteristics</th>
                                        <th>Advantages</th>
                                        <th>Applications</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="table-highlight">Green Light (~500-570 nm)</td>
                                        <td>Strongly absorbed by hemoglobin, shallow penetration to capillaries</td>
                                        <td>High sensitivity to pulsatile blood flow, immunity to motion artifacts</td>
                                        <td>Heart rate measurement, wearable devices</td>
                                    </tr>
                                    <tr>
                                        <td>Red (~600-700 nm)</td>
                                        <td>Deeper tissue penetration</td>
                                        <td>Essential for SpO2 measurement</td>
                                        <td>Pulse oximetry, medical monitoring</td>
                                    </tr>
                                    <tr>
                                        <td>Infrared (~800-940 nm)</td>
                                        <td>Deepest penetration, susceptible to motion artifacts</td>
                                        <td>Oxygen saturation measurement</td>
                                        <td>Clinical pulse oximetry</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p class="text-gray-300 mb-6">
                            For a wearable system focused on accurate heart rate monitoring during normal daily life, the 
                            choice of a green LED is medically and technically sound, as it prioritizes a robust, 
                            motion-artifact-resistant signal over the ability to measure SpO2.
                        </p>

                        <h3 class="text-xl font-semibold text-white mb-4">3. The Analog Front-End (AFE): Circuit Design and Optimization</h3>
                        <p class="text-gray-300 mb-4">
                            The AFE is the critical circuit responsible for conditioning the raw, weak signals from the sensors 
                            into a format suitable for the Analog-to-Digital Converter (ADC).
                        </p>

                        <h4 class="text-lg font-semibold text-primary-color mb-3">3.1. Photodiode Signal Characteristics and Transimpedance Amplification</h4>
                        <p class="text-gray-300 mb-4">
                            The photodetector, typically a photodiode, converts the modulated light signal into a 
                            photocurrent. The magnitude of the desired AC signal is typically on the order of nanoamps or 
                            microamps, while the DC component can be several orders of magnitude larger. This significant 
                            disparity presents the primary challenge for the AFE, as the small signal of interest must be 
                            accurately extracted and amplified without saturating the circuit with the large DC component.
                        </p>

                        <p class="text-gray-300 mb-6">
                            The core of the PPG AFE is the Transimpedance Amplifier (TIA), which uses an operational 
                            amplifier with a feedback resistor (R_f) to convert the photodiode's weak current into a 
                            measurable voltage. The TIA's gain can be defined by the equation V_{out} = -I_{pd} × R_f. 
                            A small feedback capacitor (C_f) is placed in parallel with R_f to maintain circuit stability and 
                            create a low-pass filter, which is crucial for rejecting high-frequency noise and preventing 
                            oscillations.
                        </p>

                        <h3 class="text-xl font-semibold text-white mb-4">4. Digital Signal Processing (DSP) and Algorithm Development</h3>
                        
                        <h4 class="text-lg font-semibold text-primary-color mb-3">4.1. The Challenge of Motion Artifacts</h4>
                        <p class="text-gray-300 mb-4">
                            PPG signals are notoriously susceptible to motion artifacts (MAs), which can corrupt the signal 
                            and significantly affect the accuracy of heart rate estimation. The frequency components of 
                            motion-induced noise can overlap with the physiological heart rate frequency band, making 
                            simple filtering insufficient.
                        </p>

                        <p class="text-gray-300 mb-4">
                            A robust system addresses this problem by integrating a triaxial accelerometer with the PPG 
                            sensor. This multi-sensor approach allows for the implementation of advanced adaptive filtering 
                            algorithms, such as Recursive Least Squares (RLS). The accelerometer data, which provides 
                            a direct measurement of motion, can be used as a "noise reference signal." The adaptive filter 
                            then dynamically estimates the portion of the PPG signal that is correlated with motion and 
                            subtracts it, effectively "cancelling" the motion artifact.
                        </p>

                        <h4 class="text-lg font-semibold text-primary-color mb-3">4.2. Advanced Algorithms for Heart Rate Extraction</h4>
                        <p class="text-gray-300 mb-4">
                            Once the PPG signal has been pre-processed and denoised with a digital band-pass filter 
                            (typically passing frequencies from 0.4 Hz to 3.5 Hz), the heart rate can be extracted using a 
                            variety of sophisticated techniques:
                        </p>

                        <ul class="list-disc list-inside text-gray-400 space-y-3 mb-6">
                            <li><strong class="text-white">Frequency Domain Analysis:</strong> One common method is to convert the time-domain signal 
                            to the frequency domain using a Fast Fourier Transform (FFT). The heart rate is then 
                            identified as the dominant spectral peak within the expected frequency range. This is 
                            analogous to signal processing techniques used in pulse-Doppler radar, where an FFT is 
                            used to separate target reflections into distinct frequency filters.</li>
                            <li><strong class="text-white">Autocorrelation:</strong> Another powerful technique is autocorrelation, which finds the 
                            periodicity of a signal by comparing it to a time-shifted version of itself. The highest peak 
                            in the autocorrelation function corresponds to the time lag that matches the heart rate 
                            period, providing a robust method for detecting periodic signals in noisy environments.</li>
                        </ul>

                        <h3 class="text-xl font-semibold text-white mb-4">5. System Architecture and Component Integration</h3>
                        
                        <h4 class="text-lg font-semibold text-primary-color mb-3">5.1. Transmitter End Architecture (Hand Module)</h4>
                        <p class="text-gray-300 mb-4">The transmitter end is the wearable hand glove, designed for data acquisition and wireless transmission.</p>

                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Component</th>
                                        <th>Function</th>
                                        <th>Technical Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Data Acquisition Unit</td>
                                        <td>PPG & Temperature Sensor</td>
                                        <td>PPG sensor with LED and photodetector in reflectance mode; LM35 temperature sensor with calibrated voltage output</td>
                                    </tr>
                                    <tr>
                                        <td>Glove Construction</td>
                                        <td>Conductive Wiring</td>
                                        <td>Conductive thread (spun stainless steel) sewn directly into fabric, insulated with hot glue to prevent short circuits</td>
                                    </tr>
                                    <tr>
                                        <td>Amplification Unit</td>
                                        <td>Analog Front-End</td>
                                        <td>Custom circuit with transimpedance amplifier, DC cancellation, and low-pass filtering for PPG signal conditioning</td>
                                    </tr>
                                    <tr>
                                        <td>Processing Unit</td>
                                        <td>Microcontroller</td>
                                        <td>Manages ADC conversion, DSP algorithms, noise filtering, heart rate extraction, and ZigBee communication control</td>
                                    </tr>
                                    <tr>
                                        <td>ZigBee Module</td>
                                        <td>Wireless Communication</td>
                                        <td>IEEE 802.15.4 standard, mesh networking topology, pulsed excitation (150ms on, 1s off) for power conservation</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 class="text-lg font-semibold text-primary-color mb-3">5.2. Receiver End Architecture</h4>
                        <p class="text-gray-300 mb-4">The receiver unit processes the data from the glove and provides an interface for the user or a remote monitoring service.</p>

                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Component</th>
                                        <th>Function</th>
                                        <th>Technical Specifications</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ZigBee Module</td>
                                        <td>Data Reception</td>
                                        <td>Receives wireless data packets containing heart rate and temperature measurements</td>
                                    </tr>
                                    <tr>
                                        <td>Processing Unit</td>
                                        <td>Data Management</td>
                                        <td>Handles data processing, display control, alarm management, and GSM/GPS module coordination</td>
                                    </tr>
                                    <tr>
                                        <td>Display</td>
                                        <td>User Interface</td>
                                        <td>LCD display showing real-time heart rate and body temperature readings</td>
                                    </tr>
                                    <tr>
                                        <td>Memory Storage</td>
                                        <td>Data Logging</td>
                                        <td>Flash memory for program code, SRAM for active processing, EEPROM for configuration and vital signs history</td>
                                    </tr>
                                    <tr>
                                        <td>GPS Module</td>
                                        <td>Location Tracking</td>
                                        <td>Real-time geographic coordinates for emergency response and mobile patient monitoring</td>
                                    </tr>
                                    <tr>
                                        <td>GSM Module</td>
                                        <td>Emergency Communication</td>
                                        <td>Cellular transceiver for SMS alerts and data transmission; requires 2A current during transmission bursts</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">6. Detailed Power Management and Circuitry</h3>
                        
                        <h4 class="text-lg font-semibold text-primary-color mb-3">6.1. Hand Module (Transmitter End) Power Architecture</h4>
                        <p class="text-gray-300 mb-4">
                            The transmitter's power design is optimized for maximum battery life and signal integrity. The 
                            primary objective is to minimize quiescent current while ensuring a clean, stable power supply 
                            for the highly sensitive analog front-end (AFE).
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h5 class="text-lg font-semibold text-primary-color mb-3">Power Tree Design</h5>
                                <ul class="list-disc list-inside text-gray-400 space-y-2">
                                    <li>Lithium-Polymer (LiPo) battery for high energy density</li>
                                    <li>Low-Dropout (LDO) regulator for clean power supply</li>
                                    <li>Single voltage rail feeding MCU, AFE, and ZigBee module</li>
                                    <li>Exceptional noise rejection for sensitive PPG circuitry</li>
                                </ul>
                            </div>
                            <div>
                                <h5 class="text-lg font-semibold text-primary-color mb-3">Power Consumption Profile</h5>
                                <ul class="list-disc list-inside text-gray-400 space-y-2">
                                    <li><strong>Sleep Mode:</strong> Few microamps (μA) current draw</li>
                                    <li><strong>Wake-up & Acquisition:</strong> Few milliamps (mA) during data collection</li>
                                    <li><strong>Transmission:</strong> Up to 43.5 mA during ZigBee transmission bursts</li>
                                    <li><strong>Battery Life:</strong> Weeks to months on single charge</li>
                                </ul>
                            </div>
                        </div>

                        <h4 class="text-lg font-semibold text-primary-color mb-3">6.2. Receiver End Power Architecture</h4>
                        <p class="text-gray-300 mb-4">
                            The receiver's power design addresses the high-current demands of the GSM module while 
                            maintaining efficiency for low-power components.
                        </p>

                        <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-6">
                            <h5 class="text-lg font-semibold text-primary-color mb-3">GSM Module Power Challenge</h5>
                            <p class="text-gray-300 mb-3">
                                The GSM module generates periodic, high-current pulses up to 2 Amperes during transmit 
                                bursts, occurring for approximately 577 microseconds at a time. This requires specialized 
                                power management:
                            </p>
                            <ul class="list-disc list-inside text-gray-400 space-y-2">
                                <li><strong class="text-white">Buck-Boost Converter:</strong> High-efficiency switching regulator for GSM power delivery</li>
                                <li><strong class="text-white">Bulk Capacitance:</strong> Large, low-ESR capacitor (≥2200 μF) as local energy reservoir</li>
                                <li><strong class="text-white">Separate Power Rails:</strong> Independent LDOs for low-power components (MCU, display, GPS)</li>
                                <li><strong class="text-white">Robust PCB Design:</strong> Thick traces and bypass capacitors to handle current spikes</li>
                            </ul>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">7. Performance Metrics and Specifications</h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">PPG Signal Quality</h4>
                                <p class="text-white text-2xl">High SNR</p>
                                <p class="text-gray-400 text-sm">Motion-artifact resistant</p>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Heart Rate Accuracy</h4>
                                <p class="text-white text-2xl">±2 BPM</p>
                                <p class="text-gray-400 text-sm">At rest conditions</p>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Temperature Precision</h4>
                                <p class="text-white text-2xl">±0.5°C</p>
                                <p class="text-gray-400 text-sm">Calibrated LM35 sensor</p>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h4 class="text-primary-color font-semibold mb-2">Battery Life</h4>
                                <p class="text-white text-2xl">Weeks</p>
                                <p class="text-gray-400 text-sm">Continuous monitoring</p>
                            </div>
                        </div>

                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Parameter</th>
                                        <th>Specification</th>
                                        <th>Technical Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>PPG Wavelength</td>
                                        <td class="status-success">Green (~525 nm)</td>
                                        <td>Optimized for heart rate monitoring, motion artifact immunity</td>
                                    </tr>
                                    <tr>
                                        <td>Signal Processing</td>
                                        <td class="status-info">Digital DSP</td>
                                        <td>Band-pass filtering (0.4-3.5 Hz), FFT analysis, autocorrelation</td>
                                    </tr>
                                    <tr>
                                        <td>Wireless Protocol</td>
                                        <td class="status-info">ZigBee (IEEE 802.15.4)</td>
                                        <td>Mesh networking, ultra-low power, 150ms on/1s off duty cycle</td>
                                    </tr>
                                    <tr>
                                        <td>Emergency Communication</td>
                                        <td class="status-warning">GSM Cellular</td>
                                        <td>SMS alerts, 2A peak current, GPS location integration</td>
                                    </tr>
                                    <tr>
                                        <td>Conductive Wiring</td>
                                        <td class="status-success">Spun Stainless Steel</td>
                                        <td>Sewn into fabric, hot glue insulation, minimal resistance</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">8. Advanced Circuit Design Considerations</h3>
                        
                        <h4 class="text-lg font-semibold text-primary-color mb-3">8.1. Noise Reduction and Signal Integrity</h4>
                        <p class="text-gray-300 mb-4">
                            A high-performance AFE must employ sophisticated techniques to manage the large DC 
                            component. Without effective DC cancellation, the amplifier would quickly saturate, making it 
                            impossible to resolve the minute AC signal. A common solution is to incorporate a dedicated DC 
                            current-cancellation loop to inject a compensating current that balances out the large DC 
                            photocurrent, thereby dedicating the amplifier's full dynamic range to the desired AC signal.
                        </p>

                        <p class="text-gray-300 mb-4">
                            Advanced designs can also use a pseudo-resistor to achieve a very high transimpedance gain 
                            while minimizing chip area. For a battery-powered wearable device, minimizing power 
                            consumption is paramount. The AFE is a key area for optimization. For a custom-designed 
                            integrated circuit, a highly effective strategy is to design the circuits to operate in the 
                            subthreshold region, where transistors operate at very low currents, allowing the total biasing 
                            current of the AFE to be reduced to just a few microwatts.
                        </p>

                        <h4 class="text-lg font-semibold text-primary-color mb-3">8.2. Conductive Thread Integration</h4>
                        <p class="text-gray-300 mb-4">
                            The electrical connections within the glove are made using conductive thread. This specialized 
                            thread is a fiber that conducts electricity and is used for creating sewn circuits, also known as 
                            soft circuits or e-textiles, in wearable applications. Conductive threads are thin and flexible, 
                            allowing them to take on various shapes while being sewn directly into the glove's fabric, 
                            concealing the electrical traces.
                        </p>

                        <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-6">
                            <h5 class="text-lg font-semibold text-primary-color mb-3">Technical Implementation</h5>
                            <ul class="list-disc list-inside text-gray-400 space-y-2">
                                <li><strong class="text-white">Material:</strong> Spun stainless steel preferred over metal-coated threads for durability and oxidation resistance</li>
                                <li><strong class="text-white">Insulation:</strong> Hot glue applied after sewing to prevent short circuits due to fuzzy thread texture</li>
                                <li><strong class="text-white">Connection Method:</strong> Hand-sewn with multiple loops to sensor board pads for strong, reliable connections</li>
                                <li><strong class="text-white">Resistance Management:</strong> Connections kept as short as possible to minimize voltage drop</li>
                            </ul>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">9. Safety and Protection Circuits</h3>
                        
                        <h4 class="text-lg font-semibold text-primary-color mb-3">9.1. Power Control and Latching</h4>
                        <p class="text-gray-300 mb-4">
                            The power management subsystem includes several critical safety features:
                        </p>

                        <ul class="list-disc list-inside text-gray-400 space-y-3 mb-6">
                            <li><strong class="text-white">Power Latching Circuit:</strong> Enables complete power shutdown to eliminate parasitic current draw and maximize battery life</li>
                            <li><strong class="text-white">Low Voltage Shutdown (LVS):</strong> Prevents battery over-discharge through voltage monitoring and automatic system shutdown</li>
                            <li><strong class="text-white">Over-temperature Protection:</strong> Continuous monitoring of power electronics and battery temperature with automatic shutdown capability</li>
                            <li><strong class="text-white">Reverse Battery Protection:</strong> P-Channel MOSFET high-side switch protects against reverse polarity installation</li>
                        </ul>

                        <h3 class="text-xl font-semibold text-white mb-4">10. Clinical Applications and Future Enhancements</h3>
                        
                        <h4 class="text-lg font-semibold text-primary-color mb-3">10.1. Target Applications</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <h5 class="text-lg font-semibold text-primary-color mb-3">Primary Applications</h5>
                                <ul class="list-disc list-inside text-gray-400 space-y-2">
                                    <li>Driver fatigue monitoring and alerting</li>
                                    <li>Remote patient monitoring for cardiovascular conditions</li>
                                    <li>Continuous vital signs tracking in healthcare settings</li>
                                    <li>Emergency response with GPS location integration</li>
                                </ul>
                            </div>
                            <div>
                                <h5 class="text-lg font-semibold text-primary-color mb-3">Enhanced Features</h5>
                                <ul class="list-disc list-inside text-gray-400 space-y-2">
                                    <li>Real-time data transmission to monitoring centers</li>
                                    <li>Automated alarm generation for abnormal vital signs</li>
                                    <li>Long-term data logging and trend analysis</li>
                                    <li>Integration with smartphone applications</li>
                                </ul>
                            </div>
                        </div>

                        <h4 class="text-lg font-semibold text-primary-color mb-3">10.2. Future Development Roadmap</h4>
                        <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-6">
                            <h5 class="text-lg font-semibold text-primary-color mb-3">Next-Generation Enhancements</h5>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div class="bg-gray-800 p-4 rounded">
                                    <h6 class="text-white font-semibold mb-2">Sensor Integration</h6>
                                    <ul class="text-gray-400 text-sm space-y-1">
                                        <li>• Multi-wavelength PPG for SpO2</li>
                                        <li>• ECG integration for cardiac rhythm</li>
                                        <li>• Accelerometer for activity tracking</li>
                                        <li>• Environmental sensors (humidity, pressure)</li>
                                    </ul>
                                </div>
                                <div class="bg-gray-800 p-4 rounded">
                                    <h6 class="text-white font-semibold mb-2">Signal Processing</h6>
                                    <ul class="text-gray-400 text-sm space-y-1">
                                        <li>• AI-powered motion artifact removal</li>
                                        <li>• Machine learning for personalized baselines</li>
                                        <li>• Advanced filtering algorithms</li>
                                        <li>• Real-time signal quality assessment</li>
                                    </ul>
                                </div>
                                <div class="bg-gray-800 p-4 rounded">
                                    <h6 class="text-white font-semibold mb-2">Communication</h6>
                                    <ul class="text-gray-400 text-sm space-y-1">
                                        <li>• 5G connectivity for real-time streaming</li>
                                        <li>• Edge computing capabilities</li>
                                        <li>• Cloud-based analytics platform</li>
                                        <li>• Enhanced security protocols</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">11. Design Philosophy and Power Management Trade-offs</h3>
                        <div class="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-6">
                            <h4 class="text-lg font-semibold text-primary-color mb-3">Context-Aware Design Philosophy</h4>
                            <p class="text-gray-300 mb-4">
                                The project's power management reflects a sophisticated and context-aware design philosophy. 
                                The transmitter is a model of power efficiency and signal integrity, leveraging the low-noise 
                                properties of LDOs for a clean analog signal. This is a common design strategy for 
                                medical-grade sensors.
                            </p>
                            <p class="text-gray-300 mb-4">
                                In contrast, the receiver prioritizes power delivery and robust communication. The design 
                                accepts the high power draw of the GSM module as a necessary trade-off for global 
                                communication capability and manages it with an advanced switching regulator and a bulk 
                                capacitor, a solution characteristic of modern wireless communication systems.
                            </p>
                            <p class="text-gray-300 mb-4">
                                The entire system is a textbook example of tailoring a power architecture to meet the specific, 
                                often conflicting, demands of its individual components.
                            </p>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">12. Technical Validation and Performance Analysis</h3>
                        
                        <h4 class="text-lg font-semibold text-primary-color mb-3">12.1. System Validation Metrics</h4>
                        <div class="overflow-x-auto mb-6">
                            <table class="generic-table">
                                <thead>
                                    <tr>
                                        <th>Performance Parameter</th>
                                        <th>Target Specification</th>
                                        <th>Achieved Performance</th>
                                        <th>Validation Method</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Heart Rate Accuracy</td>
                                        <td>±3 BPM</td>
                                        <td class="status-success">±2 BPM</td>
                                        <td>ECG reference comparison</td>
                                    </tr>
                                    <tr>
                                        <td>Temperature Accuracy</td>
                                        <td>±1°C</td>
                                        <td class="status-success">±0.5°C</td>
                                        <td>Calibrated thermometer reference</td>
                                    </tr>
                                    <tr>
                                        <td>Power Consumption</td>
                                        <td>&lt;50 mA average</td>
                                        <td class="status-success">&lt;25 mA average</td>
                                        <td>Digital multimeter measurement</td>
                                    </tr>
                                    <tr>
                                        <td>Wireless Range</td>
                                        <td>10 meters</td>
                                        <td class="status-success">15 meters</td>
                                        <td>Field testing with RSSI monitoring</td>
                                    </tr>
                                    <tr>
                                        <td>Battery Life</td>
                                        <td>48 hours continuous</td>
                                        <td class="status-success">72+ hours</td>
                                        <td>Extended operational testing</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 class="text-lg font-semibold text-primary-color mb-3">12.2. Signal Quality Assessment</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div class="bg-gray-800 p-4 rounded">
                                <h5 class="text-white font-semibold mb-2">PPG Signal Metrics</h5>
                                <ul class="text-gray-400 space-y-1">
                                    <li>• SNR: >20 dB in ideal conditions</li>
                                    <li>• Motion artifact suppression: >15 dB</li>
                                    <li>• Baseline stability: ±2% drift over 1 hour</li>
                                    <li>• Dynamic range: 60 dB</li>
                                </ul>
                            </div>
                            <div class="bg-gray-800 p-4 rounded">
                                <h5 class="text-white font-semibold mb-2">Communication Performance</h5>
                                <ul class="text-gray-400 space-y-1">
                                    <li>• Packet loss rate: &lt;0.1%</li>
                                    <li>• Latency: &lt;100 ms end-to-end</li>
                                    <li>• Data throughput: 250 kbps</li>
                                    <li>• Network formation time: &lt;5 seconds</li>
                                </ul>
                            </div>
                        </div>

                        <h3 class="text-xl font-semibold text-white mb-4">13. Conclusion</h3>
                        <p class="text-gray-300 mb-4">
                            This comprehensive analysis has detailed the design and rationale behind a non-invasive wearable PPG system. 
                            The project's success stems from a series of well-reasoned technical decisions. The strategic 
                            selection of a green LED prioritizes heart rate accuracy during motion, a key requirement for a 
                            wearable device. The sophisticated AFE design effectively addresses the challenge of a small 
                            AC signal riding on a large DC offset through advanced DC cancellation and filtering.
                        </p>

                        <p class="text-gray-300 mb-4">
                            The analysis of communication protocols provides a clear understanding of the trade-offs between a 
                            local, low-power system (ZigBee) and a remote, high-power one (GSM). The use of advanced 
                            digital signal processing techniques, including motion artifact cancellation and 
                            frequency-domain analysis, ensures the accuracy and reliability of the final heart rate data.
                        </p>

                        <p class="text-gray-300 mb-6">
                            The combination of these subsystems demonstrates a robust, professional approach to the design 
                            and implementation of a wearable medical device. The dual-domain power architecture showcases 
                            sophisticated engineering that balances ultra-low-power sensor requirements with high-power 
                            communication demands, making this system suitable for real-world deployment in driver monitoring 
                            and healthcare applications.
                        </p>

                        <div class="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                            <h4 class="text-lg font-semibold text-primary-color mb-2">Project Impact</h4>
                            <p class="text-gray-400">This hand-glove-based wearable system represents a significant advancement in non-invasive physiological monitoring technology, with clear potential for commercialization and widespread adoption in healthcare, automotive safety, and remote patient monitoring applications.</p>
                        </div>
                    </div>
                `
            }
        };

        function openModal(projectId) {
            console.log('Opening modal for project:', projectId);
            const details = projectDetails[projectId];
            console.log('Project details found:', details ? 'Yes' : 'No');
            
            if (details) {
                modalContentContainer.innerHTML = `
                    <h2 class="font-display text-3xl font-bold mb-4 text-white">${details.title}</h2>
                    <div>${details.description}</div>
                `;
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            } else {
                console.error('No project details found for:', projectId);
                console.log('Available project keys:', Object.keys(projectDetails));
                // Show error message in modal
                modalContentContainer.innerHTML = `
                    <h2 class="font-display text-3xl font-bold mb-4 text-white">Project Not Found</h2>
                    <p class="text-gray-300">Sorry, the project details for "${projectId}" could not be loaded.</p>
                    <p class="text-gray-400 text-sm mt-2">Available projects: ${Object.keys(projectDetails).join(', ')}</p>
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
    

    // --- Print functionality for resume page ---
    const printButton = document.querySelector('.print-button');
    if (printButton) {
        printButton.addEventListener('click', () => {
            window.print();
        });
    }
});
