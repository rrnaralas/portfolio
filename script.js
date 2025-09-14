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
                            <table class="w-full border-collapse border border-gray-600 text-sm">
                                <thead>
                                    <tr class="bg-gray-800">
                                        <th class="border border-gray-600 px-4 py-2 text-left text-primary-color">Parameter</th>
                                        <th class="border border-gray-600 px-4 py-2 text-left text-primary-color">Value</th>
                                        <th class="border border-gray-600 px-4 py-2 text-left text-primary-color">Justification</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-gray-600 px-4 py-2 text-white">Input Voltage</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-300">72V DC</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">Aligns with the native voltage of the Milwaukee MX FUEL™ platform.</td>
                                    </tr>
                                    <tr class="bg-gray-900/50">
                                        <td class="border border-gray-600 px-4 py-2 text-white">Output Voltage</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-300">40V AC</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">Determined by the characteristic electrical and thermal requirements of the electrofusion couplers and their specific fusion schedules. This value ensures optimal energy delivery to the resistive load.</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-600 px-4 py-2 text-white">Load Range</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-300">0.5Ω to 12Ω</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">Accommodates the wide variety of standard electrofusion coupler sizes and types.</td>
                                    </tr>
                                    <tr class="bg-gray-900/50">
                                        <td class="border border-gray-600 px-4 py-2 text-white">Output Frequency</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-300">60 Hz</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">A standard frequency that provides the required alternating current for the resistive heating element.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p class="text-gray-300 mb-6">The importance of involvement in the "spec refining" process cannot be overstated. The specific output voltage and frequency (40V, 60Hz) were not arbitrary values. They were derived from a detailed understanding of the thermal and electrical characteristics of existing electrofusion couplers. A resistive heating element's power delivery is a function of voltage, current, and time. Therefore, achieving the correct energy delivery for the fusion process demanded a tailored solution, not a generic inverter design. The development of these precise specifications demonstrated a deep understanding of the end application's requirements, which was fundamental to the design's success.</p>

                        <h3 class="text-xl font-semibold text-white mb-3">C. Visualizing the System Architecture</h3>
                        
                        <p class="text-gray-300 mb-4">The high-level system design was conceptualized and prototyped as a block diagram. This visual representation of the electrical system demonstrates the key components and their interconnections. The diagram illustrates the power source as the "MKE battery" (Milwaukee battery), which supplies power to the "PCBA with H-Bridge design". This circuit board then converts the battery's power to the appropriate output for the "EF coupler with heating element".</p>
                        
                        <div class="bg-gray-900 p-6 rounded-lg border border-gray-700 my-6">
                            <h4 class="text-lg font-semibold text-primary-color mb-4 text-center">Electrofusion process</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <img src="images/electrofusion_image_1.png" alt="Electrofusion process step 1" class="w-full rounded-lg border border-gray-600">
                                    <p class="text-gray-400 text-sm text-center mt-2">Electrofusion process</p>
                                </div>
                                <div>
                                    <img src="images/electrofusion_image_2.png" alt="Electrofusion process step 2" class="w-full rounded-lg border border-gray-600">
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
                            <table class="w-full border-collapse border border-gray-600 text-sm">
                                <thead>
                                    <tr class="bg-gray-800">
                                        <th class="border border-gray-600 px-4 py-2 text-left text-primary-color">Parameter</th>
                                        <th class="border border-gray-600 px-4 py-2 text-left text-primary-color">Symbol</th>
                                        <th class="border border-gray-600 px-4 py-2 text-left text-primary-color">Engineering Rationale</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-gray-600 px-4 py-2 text-white">Drain-Source Voltage</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-300">V<sub>DS</sub></td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">Must exceed the maximum input voltage (72VDC) with a sufficient safety margin to handle any voltage spikes.</td>
                                    </tr>
                                    <tr class="bg-gray-900/50">
                                        <td class="border border-gray-600 px-4 py-2 text-white">Continuous Drain Current</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-300">I<sub>D</sub></td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">Must be rated for the sustained, high-current flow required by the lowest-resistance loads in the specified range.</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-600 px-4 py-2 text-white">On-Resistance</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-300">R<sub>DS(on)</sub></td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">A critical parameter for minimizing conduction losses (P<sub>loss</sub> = I² × R<sub>DS(on)</sub>), which directly impacts the thermal performance and overall efficiency of the inverter.</td>
                                    </tr>
                                    <tr class="bg-gray-900/50">
                                        <td class="border border-gray-600 px-4 py-2 text-white">Total Gate Charge</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-300">Q<sub>g</sub></td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">Directly influences switching speed. A lower gate charge allows for faster switching, which reduces switching losses and improves efficiency.</td>
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
                            <table class="w-full border-collapse border border-gray-600 text-sm">
                                <thead>
                                    <tr class="bg-gray-800">
                                        <th class="border border-gray-600 px-4 py-2 text-left text-primary-color">Strategy</th>
                                        <th class="border border-gray-600 px-4 py-2 text-left text-primary-color">Rationale & Implementation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-gray-600 px-4 py-2 text-white">PCB Layout Optimization</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">Minimized trace lengths and power loop areas to reduce parasitic inductance. Employed a strip-line approach to routing and ensured close placement of bypass capacitors.</td>
                                    </tr>
                                    <tr class="bg-gray-900/50">
                                        <td class="border border-gray-600 px-4 py-2 text-white">Individual Gate Resistors</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">A dedicated damping resistor (e.g., 4.7Ω) was placed as physically close as possible to the gate of each individual MOSFET. This resistor helps decrease the Q factor of the resonant tank, dampening the oscillations.</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-600 px-4 py-2 text-white">MOSFET Technology Selection</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">Selected MOSFETs with integrated gate resistors or a Kelvin-source pinout to further dampen oscillations and reduce dependencies on external layout.</td>
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
                            <table class="w-full border-collapse border border-gray-600 text-sm">
                                <thead>
                                    <tr class="bg-gray-800">
                                        <th class="border border-gray-600 px-4 py-2 text-left text-primary-color">Proof of Concept (POC) Feature</th>
                                        <th class="border border-gray-600 px-4 py-2 text-left text-primary-color">Final Product (MXF545-XC) Feature</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border border-gray-600 px-4 py-2 text-white">72V DC Input</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">Part of the Milwaukee MX FUEL™ platform.</td>
                                    </tr>
                                    <tr class="bg-gray-900/50">
                                        <td class="border border-gray-600 px-4 py-2 text-white">Custom-Designed H-Bridge Inverter</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">A cordless device that provides the power previously only available from generators or cords.</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-600 px-4 py-2 text-white">Data Logging System</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">Integrated with the sophisticated ONE-KEY™ platform, providing customizable reports and data download.</td>
                                    </tr>
                                    <tr class="bg-gray-900/50">
                                        <td class="border border-gray-600 px-4 py-2 text-white">Extensive Fusing Test</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">Capable of fusing up to 8" couplings and 12" saddles, demonstrating high-power reliability.</td>
                                    </tr>
                                    <tr>
                                        <td class="border border-gray-600 px-4 py-2 text-white">Physical Prototype Build</td>
                                        <td class="border border-gray-600 px-4 py-2 text-gray-400">The commercial product is up to 40% lighter than previous solutions, with field-replaceable components, an outcome of early design considerations.</td>
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
