const allQuestions = [
    // Chapter 1: Introduction to Networking (70 questions)
    // General Concepts (10)
    {
        question: "What is the primary purpose of a computer network?",
        options: ["To store data locally", "To connect devices for communication and resource sharing", "To encrypt sensitive files", "To run software independently"],
        answer: 1,
        category: "General Concepts"
    },
    {
        question: "Which component of a network represents the devices connected to it?",
        options: ["Links", "Nodes", "Cables", "Protocols"],
        answer: 1,
        category: "General Concepts"
    },
    {
        question: "What are the communication pathways in a network called?",
        options: ["Nodes", "Links", "Switches", "Routers"],
        answer: 1,
        category: "General Concepts"
    },
    {
        question: "What does a computer network enable between devices?",
        options: ["Data isolation", "Resource sharing", "Hardware encryption", "Software installation"],
        answer: 1,
        category: "General Concepts"
    },
    {
        question: "Which of the following is a fundamental component of network architecture?",
        options: ["Applications", "Nodes and links", "Firewalls", "Operating systems"],
        answer: 1,
        category: "General Concepts"
    },
    {
        question: "What is the largest network in existence referred to as?",
        options: ["LAN", "WAN", "Internet", "MAN"],
        answer: 2,
        category: "General Concepts"
    },
    {
        question: "What protocol suite does the internet primarily use?",
        options: ["HTTP", "TCP/IP", "FTP", "SMTP"],
        answer: 1,
        category: "General Concepts"
    },
    {
        question: "Which type of cable connects continents under the sea for internet backbone?",
        options: ["Coaxial", "Twisted pair", "Fiber optic", "Ethernet"],
        answer: 2,
        category: "General Concepts"
    },
    {
        question: "What model does the internet primarily operate on?",
        options: ["Peer-to-Peer", "Client-Server", "Distributed", "Hybrid"],
        answer: 1,
        category: "General Concepts"
    },
    {
        question: "Who owns the internet?",
        options: ["A single company", "Governments", "No one, it’s a collection of networks", "ISPs"],
        answer: 2,
        category: "General Concepts"
    },

    // Functions of Computer Networks (15)
    {
        question: "Which function allows users to share information via email?",
        options: ["Communication", "Resource Sharing", "Data Transfer", "Collaboration"],
        answer: 0,
        category: "Functions of Computer Networks"
    },
    {
        question: "What function enables sharing of a printer among multiple devices?",
        options: ["Communication", "Resource Sharing", "Data Transfer", "Collaboration"],
        answer: 1,
        category: "Functions of Computer Networks"
    },
    {
        question: "Which function supports transferring multimedia files between devices?",
        options: ["Communication", "Resource Sharing", "Data Transfer", "Collaboration"],
        answer: 2,
        category: "Functions of Computer Networks"
    },
    {
        question: "What function allows shared access to project management tools?",
        options: ["Communication", "Resource Sharing", "Data Transfer", "Collaboration"],
        answer: 3,
        category: "Functions of Computer Networks"
    },
    {
        question: "Which network function facilitates instant messaging?",
        options: ["Communication", "Resource Sharing", "Data Transfer", "Collaboration"],
        answer: 0,
        category: "Functions of Computer Networks"
    },
    {
        question: "What enables centralized access to software applications?",
        options: ["Communication", "Resource Sharing", "Data Transfer", "Collaboration"],
        answer: 1,
        category: "Functions of Computer Networks"
    },
    {
        question: "Which function supports video streaming over a network?",
        options: ["Communication", "Resource Sharing", "Data Transfer", "Collaboration"],
        answer: 2,
        category: "Functions of Computer Networks"
    },
    {
        question: "What allows multiple users to edit a document simultaneously?",
        options: ["Communication", "Resource Sharing", "Data Transfer", "Collaboration"],
        answer: 3,
        category: "Functions of Computer Networks"
    },
    {
        question: "Which function uses networks for real-time voice calls?",
        options: ["Communication", "Resource Sharing", "Data Transfer", "Collaboration"],
        answer: 0,
        category: "Functions of Computer Networks"
    },
    {
        question: "What function reduces hardware costs by sharing devices?",
        options: ["Communication", "Resource Sharing", "Data Transfer", "Collaboration"],
        answer: 1,
        category: "Functions of Computer Networks"
    },
    {
        question: "Which function moves data files between servers?",
        options: ["Communication", "Resource Sharing", "Data Transfer", "Collaboration"],
        answer: 2,
        category: "Functions of Computer Networks"
    },
    {
        question: "What supports teamwork through shared calendars?",
        options: ["Communication", "Resource Sharing", "Data Transfer", "Collaboration"],
        answer: 3,
        category: "Functions of Computer Networks"
    },
    {
        question: "Which function enables video conferencing?",
        options: ["Communication", "Resource Sharing", "Data Transfer", "Collaboration"],
        answer: 0,
        category: "Functions of Computer Networks"
    },
    {
        question: "What allows sharing of a scanner across a network?",
        options: ["Communication", "Resource Sharing", "Data Transfer", "Collaboration"],
        answer: 1,
        category: "Functions of Computer Networks"
    },
    {
        question: "Which function transfers backups between devices?",
        options: ["Communication", "Resource Sharing", "Data Transfer", "Collaboration"],
        answer: 2,
        category: "Functions of Computer Networks"
    },

    // Benefits of Computer Networks (15)
    {
        question: "Which benefit allows real-time communication via video calls?",
        options: ["Improved Communication", "Resource Optimization", "Scalability", "Cost Savings"],
        answer: 0,
        category: "Benefits of Computer Networks"
    },
    {
        question: "What benefit optimizes the use of a shared printer?",
        options: ["Improved Communication", "Resource Optimization", "Scalability", "Enhanced Productivity"],
        answer: 1,
        category: "Benefits of Computer Networks"
    },
    {
        question: "Which benefit allows a network to grow with new users?",
        options: ["Improved Communication", "Resource Optimization", "Scalability", "Cost Savings"],
        answer: 2,
        category: "Benefits of Computer Networks"
    },
    {
        question: "What benefit streamlines workflows with centralized databases?",
        options: ["Improved Communication", "Resource Optimization", "Scalability", "Enhanced Productivity"],
        answer: 3,
        category: "Benefits of Computer Networks"
    },
    {
        question: "Which benefit reduces costs by sharing hardware?",
        options: ["Improved Communication", "Resource Optimization", "Scalability", "Cost Savings"],
        answer: 3,
        category: "Benefits of Computer Networks"
    },
    {
        question: "What enables efficient email communication?",
        options: ["Improved Communication", "Resource Optimization", "Scalability", "Enhanced Productivity"],
        answer: 0,
        category: "Benefits of Computer Networks"
    },
    {
        question: "Which benefit centralizes management of network resources?",
        options: ["Improved Communication", "Resource Optimization", "Scalability", "Cost Savings"],
        answer: 1,
        category: "Benefits of Computer Networks"
    },
    {
        question: "What allows a network to add new devices easily?",
        options: ["Improved Communication", "Resource Optimization", "Scalability", "Enhanced Productivity"],
        answer: 2,
        category: "Benefits of Computer Networks"
    },
    {
        question: "Which benefit improves business processes with applications?",
        options: ["Improved Communication", "Resource Optimization", "Scalability", "Enhanced Productivity"],
        answer: 3,
        category: "Benefits of Computer Networks"
    },
    {
        question: "What reduces software costs through centralized licensing?",
        options: ["Improved Communication", "Resource Optimization", "Scalability", "Cost Savings"],
        answer: 3,
        category: "Benefits of Computer Networks"
    },
    {
        question: "Which benefit supports instant messaging for quick responses?",
        options: ["Improved Communication", "Resource Optimization", "Scalability", "Enhanced Productivity"],
        answer: 0,
        category: "Benefits of Computer Networks"
    },
    {
        question: "What optimizes resource use with shared storage?",
        options: ["Improved Communication", "Resource Optimization", "Scalability", "Cost Savings"],
        answer: 1,
        category: "Benefits of Computer Networks"
    },
    {
        question: "Which benefit allows a network to scale with new branches?",
        options: ["Improved Communication", "Resource Optimization", "Scalability", "Enhanced Productivity"],
        answer: 2,
        category: "Benefits of Computer Networks"
    },
    {
        question: "What enhances productivity with shared project tools?",
        options: ["Improved Communication", "Resource Optimization", "Scalability", "Enhanced Productivity"],
        answer: 3,
        category: "Benefits of Computer Networks"
    },
    {
        question: "Which benefit lowers expenses by reducing hardware needs?",
        options: ["Improved Communication", "Resource Optimization", "Scalability", "Cost Savings"],
        answer: 3,
        category: "Benefits of Computer Networks"
    },

    // Network Types (30: PAN 5, LAN/WLAN/Ethernet 10, WAN 5, MAN 5, VPN 5)
    {
        question: "What is the typical connectivity range of a PAN?",
        options: ["10 meters", "100 meters", "1 kilometer", "10 kilometers"],
        answer: 0,
        category: "Network Types - PAN"
    },
    {
        question: "Which device is commonly part of a PAN?",
        options: ["Router", "Bluetooth headphones", "Switch", "Firewall"],
        answer: 1,
        category: "Network Types - PAN"
    },
    {
        question: "What technology is often used in a PAN?",
        options: ["Ethernet", "Bluetooth", "Fiber optic", "Satellite"],
        answer: 1,
        category: "Network Types - PAN"
    },
    {
        question: "Which network type is most personal to a user?",
        options: ["LAN", "WAN", "PAN", "MAN"],
        answer: 2,
        category: "Network Types - PAN"
    },
    {
        question: "What is the maximum range of a PAN using infrared?",
        options: ["5 meters", "10 meters", "20 meters", "50 meters"],
        answer: 1,
        category: "Network Types - PAN"
    },
    {
        question: "Which network type spans a single building or campus?",
        options: ["WAN", "LAN", "MAN", "VPN"],
        answer: 1,
        category: "Network Types - LAN/WLAN/Ethernet"
    },
    {
        question: "What is the most widely used LAN technology?",
        options: ["Token-ring", "Ethernet", "FDDI", "ATM"],
        answer: 1,
        category: "Network Types - LAN/WLAN/Ethernet"
    },
    {
        question: "What topology does Ethernet commonly use?",
        options: ["Bus", "Ring", "Star", "Mesh"],
        answer: 2,
        category: "Network Types - LAN/WLAN/Ethernet"
    },
    {
        question: "What does WLAN use instead of physical cables?",
        options: ["Fiber optics", "Radio frequency signals", "Coaxial cables", "Twisted pair"],
        answer: 1,
        category: "Network Types - LAN/WLAN/Ethernet"
    },
    {
        question: "What is the speed of traditional Ethernet (10BASE-T)?",
        options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
        answer: 0,
        category: "Network Types - LAN/WLAN/Ethernet"
    },
    {
        question: "Which Ethernet standard provides 100 Mbps speed?",
        options: ["10BASE-T", "100BASE-T", "1000BASE-T", "100BASE-FX"],
        answer: 1,
        category: "Network Types - LAN/WLAN/Ethernet"
    },
    {
        question: "What is the maximum speed of Giga-Ethernet?",
        options: ["100 Mbps", "500 Mbps", "1000 Mbps", "10 Gbps"],
        answer: 2,
        category: "Network Types - LAN/WLAN/Ethernet"
    },
    {
        question: "What does CSMA/CD stand for in Ethernet?",
        options: ["Carrier Sense Multiple Access/Collision Detection", "Collision Sense Multi Access/Detection", "Carrier Sense Multi Access/Control Delay", "Control Sense Multiple Access/Collision Detection"],
        answer: 0,
        category: "Network Types - LAN/WLAN/Ethernet"
    },
    {
        question: "What is the segment length of 10BASE-T Ethernet?",
        options: ["50 meters", "100 meters", "200 meters", "500 meters"],
        answer: 1,
        category: "Network Types - LAN/WLAN/Ethernet"
    },
    {
        question: "Which Ethernet variant uses fiber optic cables?",
        options: ["10BASE-T", "100BASE-T", "100BASE-FX", "1000BASE-T"],
        answer: 2,
        category: "Network Types - LAN/WLAN/Ethernet"
    },
    {
        question: "Which network type connects multiple LANs over large distances?",
        options: ["LAN", "WAN", "MAN", "PAN"],
        answer: 1,
        category: "Network Types - WAN"
    },
    {
        question: "What type of links does a WAN often use?",
        options: ["Ethernet cables", "Leased lines", "Twisted pair", "Radio waves"],
        answer: 1,
        category: "Network Types - WAN"
    },
    {
        question: "Which network type uses submarine cables for connectivity?",
        options: ["LAN", "WAN", "MAN", "VPN"],
        answer: 1,
        category: "Network Types - WAN"
    },
    {
        question: "What does WAN provide centralized access to?",
        options: ["Local files", "Resources and services", "Printers", "Software"],
        answer: 1,
        category: "Network Types - WAN"
    },
    {
        question: "Which network type supports global internet connectivity?",
        options: ["LAN", "WAN", "MAN", "PAN"],
        answer: 1,
        category: "Network Types - WAN"
    },
    {
        question: "Which network type covers a city or metropolitan area?",
        options: ["LAN", "WAN", "MAN", "VPN"],
        answer: 2,
        category: "Network Types - MAN"
    },
    {
        question: "What does MAN connect within a city?",
        options: ["Multiple WANs", "Multiple LANs", "Single devices", "PANs"],
        answer: 1,
        category: "Network Types - MAN"
    },
    {
        question: "Which network type offers high-speed connectivity in urban areas?",
        options: ["LAN", "WAN", "MAN", "VPN"],
        answer: 2,
        category: "Network Types - MAN"
    },
    {
        question: "What is a common use of a MAN?",
        options: ["Personal device connectivity", "Global communication", "City-wide data sharing", "Secure remote access"],
        answer: 2,
        category: "Network Types - MAN"
    },
    {
        question: "Which network type supports educational institutions in a city?",
        options: ["LAN", "WAN", "MAN", "VPN"],
        answer: 2,
        category: "Network Types - MAN"
    },
    {
        question: "What does a VPN use to secure data over public networks?",
        options: ["High-speed cables", "Encryption", "Dedicated servers", "Fiber optics"],
        answer: 1,
        category: "Network Types - VPN"
    },
    {
        question: "Which network type enables secure remote work?",
        options: ["LAN", "WAN", "MAN", "VPN"],
        answer: 3,
        category: "Network Types - VPN"
    },
    {
        question: "What does VPN stand for?",
        options: ["Virtual Private Network", "Very Personal Network", "Virtual Public Network", "Variable Private Network"],
        answer: 0,
        category: "Network Types - VPN"
    },
    {
        question: "Which network type ensures privacy over the internet?",
        options: ["LAN", "WAN", "MAN", "VPN"],
        answer: 3,
        category: "Network Types - VPN"
    },
    {
        question: "What is a key feature of a VPN?",
        options: ["High bandwidth", "Encrypted connections", "Local access", "Public sharing"],
        answer: 1,
        category: "Network Types - VPN"
    },

    // Chapter 2: Network Infrastructure (70 questions)
    // End Devices (10)
    {
        question: "Which device is an example of an end device?",
        options: ["Router", "Switch", "Printer", "Firewall"],
        answer: 2,
        category: "End Devices"
    },
    {
        question: "What role do end devices play in a network?",
        options: ["Route data", "Serve as data sources or destinations", "Amplify signals", "Secure traffic"],
        answer: 1,
        category: "End Devices"
    },
    {
        question: "Which end device initiates communication sessions?",
        options: ["Server", "Switch", "Hub", "Router"],
        answer: 0,
        category: "End Devices"
    },
    {
        question: "What is a common end device in a home network?",
        options: ["Firewall", "Smartphone", "Access Point", "Repeater"],
        answer: 1,
        category: "End Devices"
    },
    {
        question: "Which device consumes services provided by intermediate devices?",
        options: ["Router", "Computer", "Switch", "Modem"],
        answer: 1,
        category: "End Devices"
    },
    {
        question: "What end device is used to print documents over a network?",
        options: ["Server", "Printer", "Router", "Switch"],
        answer: 1,
        category: "End Devices"
    },
    {
        question: "Which end device can act as both client and server?",
        options: ["Printer", "Smartphone", "Hub", "Firewall"],
        answer: 1,
        category: "End Devices"
    },
    {
        question: "What is an example of an end device that stores data?",
        options: ["Switch", "Server", "Repeater", "Access Point"],
        answer: 1,
        category: "End Devices"
    },
    {
        question: "Which end device accesses network resources via a browser?",
        options: ["Router", "Computer", "Hub", "Modem"],
        answer: 1,
        category: "End Devices"
    },
    {
        question: "What end device is typically found at the network periphery?",
        options: ["Switch", "Server", "Firewall", "Router"],
        answer: 1,
        category: "End Devices"
    },

    // Intermediate Devices (20)
    {
        question: "Which device operates at the network layer of the OSI model?",
        options: ["Switch", "Router", "Hub", "Access Point"],
        answer: 1,
        category: "Intermediate Devices"
    },
    {
        question: "What device forwards data packets only to the intended recipient?",
        options: ["Router", "Switch", "Hub", "Firewall"],
        answer: 1,
        category: "Intermediate Devices"
    },
    {
        question: "Which intermediate device broadcasts data to all connected devices?",
        options: ["Router", "Switch", "Hub", "Firewall"],
        answer: 2,
        category: "Intermediate Devices"
    },
    {
        question: "What device protects against unauthorized network access?",
        options: ["Router", "Switch", "Firewall", "Hub"],
        answer: 2,
        category: "Intermediate Devices"
    },
    {
        question: "Which device enables wireless devices to connect to a wired network?",
        options: ["Router", "Switch", "Access Point", "Hub"],
        answer: 2,
        category: "Intermediate Devices"
    },
    {
        question: "What converts digital signals to analog for ISP connectivity?",
        options: ["Router", "Modem", "Switch", "Firewall"],
        answer: 1,
        category: "Intermediate Devices"
    },
    {
        question: "Which device regenerates signals to extend network reach?",
        options: ["Router", "Repeater", "Switch", "Firewall"],
        answer: 1,
        category: "Intermediate Devices"
    },
    {
        question: "What operates at the data link layer of the OSI model?",
        options: ["Router", "Switch", "Hub", "Modem"],
        answer: 1,
        category: "Intermediate Devices"
    },
    {
        question: "Which device determines the best path for data packets?",
        options: ["Switch", "Router", "Hub", "Access Point"],
        answer: 1,
        category: "Intermediate Devices"
    },
    {
        question: "What device improves network efficiency by selective forwarding?",
        options: ["Router", "Switch", "Hub", "Firewall"],
        answer: 1,
        category: "Intermediate Devices"
    },
    {
        question: "Which intermediate device operates at the physical layer?",
        options: ["Router", "Switch", "Hub", "Firewall"],
        answer: 2,
        category: "Intermediate Devices"
    },
    {
        question: "What monitors and controls network traffic for security?",
        options: ["Router", "Switch", "Firewall", "Hub"],
        answer: 2,
        category: "Intermediate Devices"
    },
    {
        question: "Which device acts as a central hub for wireless communication?",
        options: ["Router", "Switch", "Access Point", "Repeater"],
        answer: 2,
        category: "Intermediate Devices"
    },
    {
        question: "What connects a LAN to an ISP?",
        options: ["Router", "Modem", "Switch", "Hub"],
        answer: 1,
        category: "Intermediate Devices"
    },
    {
        question: "Which device amplifies weak signals over long distances?",
        options: ["Router", "Repeater", "Switch", "Firewall"],
        answer: 1,
        category: "Intermediate Devices"
    },
    {
        question: "What device forwards data based on MAC addresses?",
        options: ["Router", "Switch", "Hub", "Modem"],
        answer: 1,
        category: "Intermediate Devices"
    },
    {
        question: "Which intermediate device connects multiple networks?",
        options: ["Switch", "Router", "Hub", "Access Point"],
        answer: 1,
        category: "Intermediate Devices"
    },
    {
        question: "What provides security rules for network traffic?",
        options: ["Router", "Switch", "Firewall", "Hub"],
        answer: 2,
        category: "Intermediate Devices"
    },
    {
        question: "Which device supports wireless connectivity in a LAN?",
        options: ["Router", "Switch", "Access Point", "Repeater"],
        answer: 2,
        category: "Intermediate Devices"
    },
    {
        question: "What modulates signals for internet connectivity?",
        options: ["Router", "Modem", "Switch", "Firewall"],
        answer: 1,
        category: "Intermediate Devices"
    },

    // Network Media (10)
    {
        question: "Which network media uses physical cables?",
        options: ["Unguided media", "Twisted pair", "Radio frequencies", "Light waves"],
        answer: 1,
        category: "Network Media"
    },
    {
        question: "What type of media includes fiber optic cables?",
        options: ["Unguided", "Guided", "Wireless", "Radio"],
        answer: 1,
        category: "Network Media"
    },
    {
        question: "Which media facilitates wireless data transmission?",
        options: ["Twisted pair", "Coaxial cable", "Fiber optic", "Unguided media"],
        answer: 3,
        category: "Network Media"
    },
    {
        question: "What is a common guided media for Ethernet?",
        options: ["Radio waves", "Twisted pair", "Light signals", "Air"],
        answer: 1,
        category: "Network Media"
    },
    {
        question: "Which media type uses radio frequencies?",
        options: ["Coaxial cable", "Fiber optic", "Unguided media", "Twisted pair"],
        answer: 2,
        category: "Network Media"
    },
    {
        question: "What media is used in 10BASE-T Ethernet?",
        options: ["Fiber optic", "Coaxial cable", "Twisted pair", "Radio waves"],
        answer: 2,
        category: "Network Media"
    },
    {
        question: "Which media supports high-speed internet backbone?",
        options: ["Twisted pair", "Coaxial cable", "Fiber optic", "Radio frequencies"],
        answer: 2,
        category: "Network Media"
    },
    {
        question: "What factor influences the choice of network media?",
        options: ["Bandwidth requirements", "Software type", "User preferences", "Device color"],
        answer: 0,
        category: "Network Media"
    },
    {
        question: "Which unguided media uses light for transmission?",
        options: ["Radio waves", "Infrared", "Microwaves", "Twisted pair"],
        answer: 1,
        category: "Network Media"
    },
    {
        question: "What media type is used in WLANs?",
        options: ["Twisted pair", "Coaxial cable", "Fiber optic", "Radio frequencies"],
        answer: 3,
        category: "Network Media"
    },

    // Topologies (25)
    {
        question: "Which topology connects two hosts directly?",
        options: ["Bus", "Star", "Point-to-Point", "Ring"],
        answer: 2,
        category: "Topologies"
    },
    {
        question: "What topology uses a single shared communication line?",
        options: ["Star", "Bus", "Ring", "Mesh"],
        answer: 1,
        category: "Topologies"
    },
    {
        question: "Which topology has all devices connected to a central hub?",
        options: ["Bus", "Star", "Ring", "Mesh"],
        answer: 1,
        category: "Topologies"
    },
    {
        question: "What topology forms a circular structure?",
        options: ["Bus", "Star", "Ring", "Mesh"],
        answer: 2,
        category: "Topologies"
    },
    {
        question: "Which topology connects each host to multiple others?",
        options: ["Bus", "Star", "Ring", "Mesh"],
        answer: 3,
        category: "Topologies"
    },
    {
        question: "What technology does Bus topology use to manage collisions?",
        options: ["CSMA/CA", "CSMA/CD", "Token Passing", "FDMA"],
        answer: 1,
        category: "Topologies"
    },
    {
        question: "Which topology fails completely if the shared line breaks?",
        options: ["Bus", "Star", "Ring", "Mesh"],
        answer: 0,
        category: "Topologies"
    },
    {
        question: "What is the central device in a Star topology?",
        options: ["Router", "Switch", "Hub", "Repeater"],
        answer: 2,
        category: "Topologies"
    },
    {
        question: "Which topology requires only one cable to add a new host?",
        options: ["Bus", "Star", "Ring", "Mesh"],
        answer: 1,
        category: "Topologies"
    },
    {
        question: "What happens if the hub fails in a Star topology?",
        options: ["Network continues", "All connectivity fails", "Partial failure", "No effect"],
        answer: 1,
        category: "Topologies"
    },
    {
        question: "Which topology connects each host to exactly two others?",
        options: ["Bus", "Star", "Ring", "Mesh"],
        answer: 2,
        category: "Topologies"
    },
    {
        question: "What fails the entire Ring topology?",
        options: ["Hub failure", "Single host failure", "Cable redundancy", "Switch failure"],
        answer: 1,
        category: "Topologies"
    },
    {
        question: "Which topology uses a point-to-point connection for reliability?",
        options: ["Bus", "Star", "Ring", "Mesh"],
        answer: 3,
        category: "Topologies"
    },
    {
        question: "What is the most reliable Mesh topology type?",
        options: ["Partial Mesh", "Full Mesh", "Hybrid Mesh", "Tree Mesh"],
        answer: 1,
        category: "Topologies"
    },
    {
        question: "How many connections are needed for 5 hosts in Full Mesh?",
        options: ["5", "10", "15", "20"],
        answer: 1,
        category: "Topologies"
    },
    {
        question: "Which topology connects hosts in a linear fashion?",
        options: ["Bus", "Star", "Daisy Chain", "Mesh"],
        answer: 2,
        category: "Topologies"
    },
    {
        question: "What topology divides the network into layers?",
        options: ["Bus", "Star", "Tree", "Ring"],
        answer: 2,
        category: "Topologies"
    },
    {
        question: "Which layer of Tree topology connects end devices?",
        options: ["Core", "Distribution", "Access", "Root"],
        answer: 2,
        category: "Topologies"
    },
    {
        question: "What topology inherits properties of Bus and Star?",
        options: ["Ring", "Mesh", "Tree", "Daisy Chain"],
        answer: 2,
        category: "Topologies"
    },
    {
        question: "Which topology combines multiple topology types?",
        options: ["Bus", "Star", "Ring", "Hybrid"],
        answer: 3,
        category: "Topologies"
    },
    {
        question: "What is an example of a Hybrid topology?",
        options: ["LAN", "WAN", "Internet", "PAN"],
        answer: 2,
        category: "Topologies"
    },
    {
        question: "Which topology uses a Bus Master to manage data?",
        options: ["Bus", "Star", "Ring", "Mesh"],
        answer: 0,
        category: "Topologies"
    },
    {
        question: "What topology splits into segments if a link fails?",
        options: ["Bus", "Star", "Daisy Chain", "Mesh"],
        answer: 2,
        category: "Topologies"
    },
    {
        question: "Which topology is simplest to configure?",
        options: ["Bus", "Star", "Ring", "Mesh"],
        answer: 1,
        category: "Topologies"
    },
    {
        question: "What topology is most common in modern LANs?",
        options: ["Bus", "Star", "Ring", "Mesh"],
        answer: 1,
        category: "Topologies"
    },

    // Architecture (5)
    {
        question: "Which architecture uses a centralized server?",
        options: ["Peer-to-Peer", "Client-Server", "Distributed", "Hybrid"],
        answer: 1,
        category: "Architecture"
    },
    {
        question: "What architecture allows direct resource sharing between devices?",
        options: ["Client-Server", "Peer-to-Peer", "Distributed", "Centralized"],
        answer: 1,
        category: "Architecture"
    },
    {
        question: "Which architecture distributes resources across multiple nodes?",
        options: ["Client-Server", "Peer-to-Peer", "Distributed", "Hybrid"],
        answer: 2,
        category: "Architecture"
    },
    {
        question: "What role does a server play in Client-Server architecture?",
        options: ["Requests data", "Provides services", "Routes traffic", "Amplifies signals"],
        answer: 1,
        category: "Architecture"
    },
    {
        question: "Which architecture is used by the internet?",
        options: ["Client-Server", "Peer-to-Peer", "Distributed", "All of the above"],
        answer: 0,
        category: "Architecture"
    },

    // Chapter 3: Protocols, Ports, OSI, and TCP/IP Model (70 questions)
    // Protocols (15)
    {
        question: "What is a set of rules governing data exchange in a network?",
        options: ["Topology", "Protocol", "Media", "Address"],
        answer: 1,
        category: "Protocols"
    },
    {
        question: "Which protocol is responsible for addressing and routing packets?",
        options: ["TCP", "UDP", "IP", "HTTP"],
        answer: 2,
        category: "Protocols"
    },
    {
        question: "What protocol ensures reliable data delivery?",
        options: ["UDP", "TCP", "IP", "FTP"],
        answer: 1,
        category: "Protocols"
    },
    {
        question: "Which protocol is connectionless and lightweight?",
        options: ["TCP", "UDP", "HTTP", "SMTP"],
        answer: 1,
        category: "Protocols"
    },
    {
        question: "What protocol is used for web browsing?",
        options: ["FTP", "HTTP", "SMTP", "DNS"],
        answer: 1,
        category: "Protocols"
    },
    {
        question: "Which protocol sends email messages between servers?",
        options: ["HTTP", "SMTP", "FTP", "DNS"],
        answer: 1,
        category: "Protocols"
    },
    {
        question: "What protocol translates domain names to IP addresses?",
        options: ["HTTP", "DNS", "FTP", "TCP"],
        answer: 1,
        category: "Protocols"
    },
    {
        question: "Which protocol is used for secure remote access?",
        options: ["Telnet", "SSH", "HTTP", "FTP"],
        answer: 1,
        category: "Protocols"
    },
    {
        question: "What protocol retrieves email from a server using port 110?",
        options: ["IMAP", "POP3", "SMTP", "HTTP"],
        answer: 1,
        category: "Protocols"
    },
    {
        question: "Which protocol manages email on a server without downloading?",
        options: ["POP3", "IMAP", "SMTP", "FTP"],
        answer: 1,
        category: "Protocols"
    },
    {
        question: "What protocol secures web communication?",
        options: ["HTTP", "HTTPS", "FTP", "Telnet"],
        answer: 1,
        category: "Protocols"
    },
    {
        question: "Which protocol is used for file transfers?",
        options: ["HTTP", "FTP", "SMTP", "DNS"],
        answer: 1,
        category: "Protocols"
    },
    {
        question: "What protocol provides error messages in networks?",
        options: ["ICMP", "TCP", "UDP", "HTTP"],
        answer: 0,
        category: "Protocols"
    },
    {
        question: "Which protocol maps IP addresses to MAC addresses?",
        options: ["ARP", "ICMP", "TCP", "UDP"],
        answer: 0,
        category: "Protocols"
    },
    {
        question: "What protocol synchronizes clocks over a network?",
        options: ["NTP", "HTTP", "FTP", "DNS"],
        answer: 0,
        category: "Protocols"
    },

    // Ports (10)
    {
        question: "What port is used for FTP data transfer?",
        options: ["20", "21", "22", "23"],
        answer: 0,
        category: "Ports"
    },
    {
        question: "Which port handles FTP control commands?",
        options: ["20", "21", "22", "25"],
        answer: 1,
        category: "Ports"
    },
    {
        question: "What port is used by SSH for secure remote access?",
        options: ["21", "22", "23", "25"],
        answer: 1,
        category: "Ports"
    },
    {
        question: "Which port is associated with Telnet?",
        options: ["22", "23", "25", "53"],
        answer: 1,
        category: "Ports"
    },
    {
        question: "What port does SMTP use for email sending?",
        options: ["23", "25", "53", "80"],
        answer: 1,
        category: "Ports"
    },
    {
        question: "Which port is used by DNS?",
        options: ["25", "53", "80", "110"],
        answer: 1,
        category: "Ports"
    },
    {
        question: "What port is the default for HTTP?",
        options: ["53", "80", "110", "143"],
        answer: 1,
        category: "Ports"
    },
    {
        question: "Which port does POP3 use for email retrieval?",
        options: ["80", "110", "143", "443"],
        answer: 1,
        category: "Ports"
    },
    {
        question: "What port is used by IMAP?",
        options: ["110", "143", "443", "3389"],
        answer: 1,
        category: "Ports"
    },
    {
        question: "Which port secures HTTP communication with HTTPS?",
        options: ["143", "443", "110", "3389"],
        answer: 1,
        category: "Ports"
    },

    // OSI Model (25)
    {
        question: "Which OSI layer defines physical components like cables?",
        options: ["Physical", "Data Link", "Network", "Transport"],
        answer: 0,
        category: "OSI Model"
    },
    {
        question: "What layer ensures error-free node-to-node delivery?",
        options: ["Physical", "Data Link", "Network", "Transport"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "Which OSI layer handles packet routing?",
        options: ["Physical", "Data Link", "Network", "Transport"],
        answer: 2,
        category: "OSI Model"
    },
    {
        question: "What layer provides end-to-end data delivery?",
        options: ["Network", "Transport", "Session", "Presentation"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "Which OSI layer manages sessions between devices?",
        options: ["Transport", "Session", "Presentation", "Application"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "What layer translates data into a network format?",
        options: ["Session", "Presentation", "Application", "Transport"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "Which OSI layer interfaces with end-user applications?",
        options: ["Presentation", "Application", "Session", "Transport"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "What device operates at the Physical layer?",
        options: ["Router", "Switch", "Hub", "Firewall"],
        answer: 2,
        category: "OSI Model"
    },
    {
        question: "Which layer uses MAC addresses for addressing?",
        options: ["Physical", "Data Link", "Network", "Transport"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "What layer uses IP addresses for routing?",
        options: ["Data Link", "Network", "Transport", "Session"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "Which layer performs bit synchronization?",
        options: ["Physical", "Data Link", "Network", "Transport"],
        answer: 0,
        category: "OSI Model"
    },
    {
        question: "What layer controls the rate of data transmission?",
        options: ["Physical", "Data Link", "Network", "Transport"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "Which layer defines physical topologies like Star?",
        options: ["Physical", "Data Link", "Network", "Transport"],
        answer: 0,
        category: "OSI Model"
    },
    {
        question: "What layer adds port numbers to data segments?",
        options: ["Network", "Transport", "Session", "Presentation"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "Which layer establishes a connection before data transfer?",
        options: ["Transport", "Session", "Presentation", "Application"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "What layer encrypts data for secure transmission?",
        options: ["Session", "Presentation", "Application", "Transport"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "Which layer provides email services?",
        options: ["Presentation", "Application", "Session", "Transport"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "What sublayer of Data Link handles media access?",
        options: ["LLC", "MAC", "Physical", "Network"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "Which layer uses frames for data transmission?",
        options: ["Physical", "Data Link", "Network", "Transport"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "What layer performs segmentation and reassembly?",
        options: ["Network", "Transport", "Session", "Presentation"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "Which layer adds synchronization points to data?",
        options: ["Transport", "Session", "Presentation", "Application"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "What layer compresses data before transmission?",
        options: ["Session", "Presentation", "Application", "Transport"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "Which layer allows remote file access?",
        options: ["Presentation", "Application", "Session", "Transport"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "What layer uses TCP for reliable communication?",
        options: ["Network", "Transport", "Session", "Application"],
        answer: 1,
        category: "OSI Model"
    },
    {
        question: "Which layer is known as the heart of the OSI model?",
        options: ["Network", "Transport", "Session", "Presentation"],
        answer: 1,
        category: "OSI Model"
    },

    // TCP/IP Model (20)
    {
        question: "How many layers are in the TCP/IP model?",
        options: ["4", "5", "6", "7"],
        answer: 0,
        category: "TCP/IP Model"
    },
    {
        question: "Which TCP/IP layer handles physical infrastructure?",
        options: ["Network Access", "Internet", "Transport", "Application"],
        answer: 0,
        category: "TCP/IP Model"
    },
    {
        question: "What TCP/IP layer controls data routing?",
        options: ["Network Access", "Internet", "Transport", "Application"],
        answer: 1,
        category: "TCP/IP Model"
    },
    {
        question: "Which TCP/IP layer ensures reliable data transfer?",
        options: ["Internet", "Transport", "Application", "Network Access"],
        answer: 1,
        category: "TCP/IP Model"
    },
    {
        question: "What TCP/IP layer interfaces with user applications?",
        options: ["Transport", "Application", "Internet", "Network Access"],
        answer: 1,
        category: "TCP/IP Model"
    },
    {
        question: "Which protocol operates at the Internet layer?",
        options: ["TCP", "UDP", "IP", "HTTP"],
        answer: 2,
        category: "TCP/IP Model"
    },
    {
        question: "What protocol provides error messaging in TCP/IP?",
        options: ["ARP", "ICMP", "TCP", "UDP"],
        answer: 1,
        category: "TCP/IP Model"
    },
    {
        question: "Which protocol maps IP to hardware addresses?",
        options: ["ICMP", "ARP", "TCP", "HTTP"],
        answer: 1,
        category: "TCP/IP Model"
    },
    {
        question: "What transport layer protocol is connection-oriented?",
        options: ["UDP", "TCP", "IP", "ICMP"],
        answer: 1,
        category: "TCP/IP Model"
    },
    {
        question: "Which protocol is used for datagram delivery?",
        options: ["TCP", "UDP", "IP", "HTTP"],
        answer: 1,
        category: "TCP/IP Model"
    },
    {
        question: "What application layer protocol is used for web access?",
        options: ["SSH", "HTTP", "NTP", "FTP"],
        answer: 1,
        category: "TCP/IP Model"
    },
    {
        question: "Which protocol secures web communication in TCP/IP?",
        options: ["HTTP", "HTTPS", "FTP", "SSH"],
        answer: 1,
        category: "TCP/IP Model"
    },
    {
        question: "What protocol provides secure remote access in TCP/IP?",
        options: ["HTTP", "FTP", "SSH", "NTP"],
        answer: 2,
        category: "TCP/IP Model"
    },
    {
        question: "Which protocol synchronizes time in TCP/IP?",
        options: ["HTTP", "FTP", "SSH", "NTP"],
        answer: 3,
        category: "TCP/IP Model"
    },
    {
        question: "What layer combines OSI’s Physical and Data Link layers?",
        options: ["Network Access", "Internet", "Transport", "Application"],
        answer: 0,
        category: "TCP/IP Model"
    },
    {
        question: "Which TCP/IP layer uses IP addresses?",
        options: ["Network Access", "Internet", "Transport", "Application"],
        answer: 1,
        category: "TCP/IP Model"
    },
    {
        question: "What layer handles TCP 3-way handshake?",
        options: ["Internet", "Transport", "Application", "Network Access"],
        answer: 1,
        category: "TCP/IP Model"
    },
    {
        question: "Which TCP/IP layer supports email applications?",
        options: ["Internet", "Transport", "Application", "Network Access"],
        answer: 2,
        category: "TCP/IP Model"
    },
    {
        question: "What is the first step in the TCP 3-way handshake?",
        options: ["ACK", "SYN", "SYN-ACK", "FIN"],
        answer: 1,
        category: "TCP/IP Model"
    },
    {
        question: "Which layer converts digital data to signals?",
        options: ["Network Access", "Internet", "Transport", "Application"],
        answer: 0,
        category: "TCP/IP Model"
    },

    // Chapter 4: Introduction to IP Address and Subnets (40 questions)
    // IP Addressing (20)
    {
        question: "What does an IP address identify on a network?",
        options: ["Software", "Host or interface", "Protocol", "Port"],
        answer: 1,
        category: "IP Addressing"
    },
    {
        question: "How many bits are in an IPv4 address?",
        options: ["16", "32", "64", "128"],
        answer: 1,
        category: "IP Addressing"
    },
    {
        question: "What is the bit length of an IPv6 address?",
        options: ["32", "64", "128", "256"],
        answer: 2,
        category: "IP Addressing"
    },
    {
        question: "Which IP version uses dotted-decimal notation?",
        options: ["IPv4", "IPv6", "Both", "Neither"],
        answer: 0,
        category: "IP Addressing"
    },
    {
        question: "What notation does IPv6 use?",
        options: ["Dotted-decimal", "Hexadecimal", "Binary", "Octal"],
        answer: 1,
        category: "IP Addressing"
    },
    {
        question: "How many octets are in an IPv4 address?",
        options: ["2", "4", "6", "8"],
        answer: 1,
        category: "IP Addressing"
    },
    {
        question: "Which class of IP address starts with 0?",
        options: ["Class A", "Class B", "Class C", "Class D"],
        answer: 0,
        category: "IP Addressing"
    },
    {
        question: "What is the first bit pattern for Class B addresses?",
        options: ["0", "10", "110", "1110"],
        answer: 1,
        category: "IP Addressing"
    },
    {
        question: "Which IP class starts with 110?",
        options: ["Class A", "Class B", "Class C", "Class D"],
        answer: 2,
        category: "IP Addressing"
    },
    {
        question: "What class is reserved for multicasting?",
        options: ["Class A", "Class B", "Class C", "Class D"],
        answer: 3,
        category: "IP Addressing"
    },
    {
        question: "Which IP class is for experimental use?",
        options: ["Class A", "Class B", "Class D", "Class E"],
        answer: 3,
        category: "IP Addressing"
    },
    {
        question: "What is the range of Class A IP addresses?",
        options: ["1.0.0.0 - 126.255.255.255", "128.0.0.0 - 191.255.255.255", "192.0.0.0 - 223.255.255.255", "224.0.0.0 - 239.255.255.255"],
        answer: 0,
        category: "IP Addressing"
    },
    {
        question: "Which range defines Class C IP addresses?",
        options: ["1.0.0.0 - 126.255.255.255", "128.0.0.0 - 191.255.255.255", "192.0.0.0 - 223.255.255.255", "224.0.0.0 - 239.255.255.255"],
        answer: 2,
        category: "IP Addressing"
    },
    {
        question: "How many host IDs does Class A support?",
        options: ["254", "65,534", "16,777,214", "2,097,152"],
        answer: 2,
        category: "IP Addressing"
    },
    {
        question: "What is the number of network addresses in Class B?",
        options: ["256", "16,384", "2,097,152", "65,536"],
        answer: 1,
        category: "IP Addressing"
    },
    {
        question: "How many hosts can a Class C network support?",
        options: ["254", "65,534", "16,777,214", "2,097,152"],
        answer: 0,
        category: "IP Addressing"
    },
    {
        question: "Which IP address requires a NIC for assignment?",
        options: ["MAC", "IPv4", "Port", "Subnet"],
        answer: 1,
        category: "IP Addressing"
    },
    {
        question: "What is an example of an IPv4 address?",
        options: ["2001:0db8::1", "192.168.1.1", "FF-FF-FF-FF-FF-FF", "80"],
        answer: 1,
        category: "IP Addressing"
    },
    {
        question: "Which IP version is gradually replacing IPv4?",
        options: ["IPv2", "IPv6", "IPv8", "IPv10"],
        answer: 1,
        category: "IP Addressing"
    },
    {
        question: "What is included in every internet packet?",
        options: ["Source and destination IP", "MAC address", "Port number", "Protocol type"],
        answer: 0,
        category: "IP Addressing"
    },

    // Subnetting (15)
    {
        question: "What does a subnet mask determine in an IP address?",
        options: ["Port number", "Network and host portions", "MAC address", "Protocol"],
        answer: 1,
        category: "Subnetting"
    },
    {
        question: "How many bits are in a subnet mask?",
        options: ["16", "32", "64", "128"],
        answer: 1,
        category: "Subnetting"
    },
    {
        question: "What is the subnet mask for /24 notation?",
        options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.252"],
        answer: 2,
        category: "Subnetting"
    },
    {
        question: "Which subnet mask corresponds to /30?",
        options: ["255.255.255.0", "255.255.255.252", "255.255.0.0", "255.0.0.0"],
        answer: 1,
        category: "Subnetting"
    },
    {
        question: "How many usable hosts are in a /30 subnet?",
        options: ["2", "6", "14", "30"],
        answer: 0,
        category: "Subnetting"
    },
    {
        question: "What is the default subnet mask for Class A?",
        options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.252"],
        answer: 0,
        category: "Subnetting"
    },
    {
        question: "Which subnet mask is default for Class B?",
        options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.252"],
        answer: 1,
        category: "Subnetting"
    },
    {
        question: "What is the default subnet mask for Class C?",
        options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.252"],
        answer: 2,
        category: "Subnetting"
    },
    {
        question: "How many hosts can a /16 subnet support?",
        options: ["254", "65,534", "16,777,214", "2,097,152"],
        answer: 1,
        category: "Subnetting"
    },
    {
        question: "What is the network portion of 192.168.1.1/24?",
        options: ["192", "192.168", "192.168.1", "192.168.1.1"],
        answer: 2,
        category: "Subnetting"
    },
    {
        question: "How many bits are used for the network in /8?",
        options: ["8", "16", "24", "32"],
        answer: 0,
        category: "Subnetting"
    },
    {
        question: "What is the host portion of 192.168.1.1/24?",
        options: ["192", "168", "1", "1.1"],
        answer: 2,
        category: "Subnetting"
    },
    {
        question: "Which subnet mask allows 65,534 hosts?",
        options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.252"],
        answer: 1,
        category: "Subnetting"
    },
    {
        question: "What does /30 indicate in an IP address?",
        options: ["30-bit host", "30-bit network", "30-bit subnet", "30-bit mask"],
        answer: 1,
        category: "Subnetting"
    },
    {
        question: "How many subnets can a /24 network be divided into with /26?",
        options: ["2", "4", "8", "16"],
        answer: 2,
        category: "Subnetting"
    },

    // Routing (5)
    {
        question: "What process defines the shortest path for data travel?",
        options: ["Switching", "Routing", "Bridging", "Repeating"],
        answer: 1,
        category: "Routing"
    },
    {
        question: "Which device makes routing decisions?",
        options: ["Switch", "Router", "Hub", "Repeater"],
        answer: 1,
        category: "Routing"
    },
    {
        question: "What does IP routing use to find paths?",
        options: ["MAC addresses", "Protocols", "IP addresses", "Port numbers"],
        answer: 2,
        category: "Routing"
    },
    {
        question: "Which layer handles IP routing?",
        options: ["Data Link", "Network", "Transport", "Application"],
        answer: 1,
        category: "Routing"
    },
    {
        question: "What forwards packets from source to destination?",
        options: ["Switches", "Routers", "Hubs", "Access Points"],
        answer: 1,
        category: "Routing"
    }
];

// Function to get 50 random questions, balanced across categories
function getRandomQuestions() {
    const categories = [...new Set(allQuestions.map(q => q.category))];
    const questionsPerCategory = Math.floor(50 / categories.length); // Approx equal distribution
    let selectedQuestions = [];

    categories.forEach(category => {
        const categoryQuestions = allQuestions.filter(q => q.category === category);
        const shuffled = [...categoryQuestions].sort(() => 0.5 - Math.random());
        selectedQuestions = selectedQuestions.concat(shuffled.slice(0, questionsPerCategory));
    });

    // Fill remaining slots if needed (up to 50)
    const remaining = 50 - selectedQuestions.length;
    if (remaining > 0) {
        const remainingQuestions = allQuestions.filter(q => !selectedQuestions.includes(q));
        const shuffledRemaining = [...remainingQuestions].sort(() => 0.5 - Math.random());
        selectedQuestions = selectedQuestions.concat(shuffledRemaining.slice(0, remaining));
    }

    return selectedQuestions.sort(() => 0.5 - Math.random()); // Final shuffle
}
