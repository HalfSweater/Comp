// Topic data for modal
const topicDetails = {
  "communication": {
    title: "Communication",
    icon: '<i class="fa-solid fa-comments"></i>',
    img: "images/communication.png",
    html: `
      <p>Communication is the process of exchanging information between two or more entities.</p>
      <p><strong>Detailed:</strong> Communication can be verbal, non-verbal, written, or digital. In networking, communication refers to how devices, systems, or users exchange data and information. Effective communication is essential for collaboration, coordination, and sharing resources.</p>
    `
  },
  "data-communication": {
    title: "Data Communication",
    icon: '<i class="fa-solid fa-database"></i>',
    img: "images/data-communication.png",
    html: `
      <p>Data communication is the transfer of data between devices through a transmission medium.</p>
      <p><strong>Detailed:</strong> Data communication involves the transmission, reception, and processing of digital or analog data. It relies on hardware (like routers, switches, cables) and protocols (rules for data exchange). Quality of data communication depends on accuracy, speed, and reliability.</p>
    `
  },
  "tele-communication": {
    title: "Tele Communication",
    icon: '<i class="fa-solid fa-tower-broadcast"></i>',
    img: "images/tele-communication.png",
    html: `
      <p>Telecommunication refers to the transmission of information over significant distances using electronic means.</p>
      <p><strong>Detailed:</strong> This includes telephone, radio, television, Internet, and satellite communications. Modern telecommunication uses fiber optics, wireless networks, and satellites to connect people globally.</p>
    `
  },
  "elements": {
    title: "Elements",
    icon: '<i class="fa-solid fa-cubes"></i>',
    img: "images/elements.png",
    html: `
      <ul>
        <li><strong>Sender:</strong> The device that sends the data.</li>
        <li><strong>Receiver:</strong> The device that receives the data.</li>
        <li><strong>Message:</strong> The data or information sent.</li>
        <li><strong>Medium:</strong> The physical path between sender and receiver.</li>
        <li><strong>Protocol:</strong> Set of rules for data transmission.</li>
      </ul>
      <p><strong>Detailed:</strong> Each element plays a key role. For example, protocols like TCP/IP define how data is packaged and delivered. The medium can be wired or wireless, and the message could be text, audio, video, etc.</p>
    `
  },
  "data-communication-mode": {
    title: "Data Communication Mode",
    icon: '<i class="fa-solid fa-arrows-left-right"></i>',
    img: "images/data-communication-mode.png",
    html: `
      <ul>
        <li><strong>Simplex:</strong> Data flows in one direction only.</li>
        <li><strong>Half Duplex:</strong> Data flows in both directions, but only one at a time.</li>
        <li><strong>Full Duplex:</strong> Data flows in both directions simultaneously.</li>
      </ul>
      <p><strong>Detailed:</strong> Example: Simplex – keyboard to computer; Half Duplex – walkie-talkies; Full Duplex – phone calls where both parties talk and listen at the same time.</p>
    `
  },
  "data-communication-medium": {
    title: "Data Communication Medium",
    icon: '<i class="fa-solid fa-cable-car"></i>',
    img: "images/data-communication-medium.png",
    html: `
      <ul>
        <li><strong>Guided Media:</strong> Physical cables like twisted pair, coaxial, and fiber optic.</li>
        <li><strong>Unguided Media:</strong> Wireless transmission like radio waves, microwaves, infrared.</li>
      </ul>
      <p><strong>Detailed:</strong> Guided media is reliable and secure, used in LANs; unguided media is essential for mobility and wide-area communication (Wi-Fi, 4G/5G, satellite).</p>
    `
  },
  "network": {
    title: "What is Network",
    icon: '<i class="fa-solid fa-network-wired"></i>',
    img: "images/network.png",
    html: `
      <p>A network is a collection of computers and devices connected together to share resources and data.</p>
      <p><strong>Detailed:</strong> Networks enable file sharing, resource sharing (like printers), communication, and centralized management. Examples: home Wi-Fi, school computer labs, the Internet.</p>
    `
  },
  "types-of-network": {
    title: "Types Of Network",
    icon: '<i class="fa-solid fa-layer-group"></i>',
    img: "images/types-of-network.png",
    html: `
      <ul>
        <li><strong>LAN:</strong> Small area like home or office.</li>
        <li><strong>MAN:</strong> Covers a city or campus.</li>
        <li><strong>WAN:</strong> Covers large areas like countries.</li>
        <li><strong>PAN:</strong> Small network around a person, like Bluetooth.</li>
      </ul>
      <p><strong>Detailed:</strong> LAN is fast and private, MAN connects city-wide resources, WAN (like the Internet) connects global resources, PAN is for personal devices (smartphones, headphones).</p>
    `
  },
  "networking-device": {
    title: "Networking Device",
    icon: '<i class="fa-solid fa-server"></i>',
    img: "images/networking-device.png",
    html: `
      <ul>
        <li><strong>Router:</strong> Routes data packets between networks.</li>
        <li><strong>Switch:</strong> Connects devices within a LAN.</li>
        <li><strong>Hub:</strong> Connects multiple Ethernet devices.</li>
        <li><strong>Modem:</strong> Modulates and demodulates signals for internet connection.</li>
      </ul>
      <p><strong>Detailed:</strong> Routers enable Internet access; switches improve local network performance; hubs are basic connectors; modems convert digital and analog signals.</p>
    `
  },
  "architecture-of-network": {
    title: "Architecture Of Network",
    icon: '<i class="fa-solid fa-sitemap"></i>',
    img: "images/architecture-of-network.png",
    html: `
      <ul>
        <li><strong>Peer-to-Peer:</strong> Each device has equal status.</li>
        <li><strong>Client-Server:</strong> Devices are divided into servers and clients.</li>
      </ul>
      <p><strong>Detailed:</strong> Peer-to-peer is simple and decentralized, suitable for small/home networks. Client-server is scalable and secure – used in businesses and the Internet (web servers, mail servers, etc).</p>
    `
  },
  "layers-of-network": {
    title: "Layers of Network",
    icon: '<i class="fa-solid fa-layer-group"></i>',
    img: "images/layers-of-network.png",
    html: `
      <ol>
        <li><strong>Physical Layer:</strong> Deals with hardware transmission of raw bits.</li>
        <li><strong>Data Link Layer:</strong> Provides node-to-node data transfer and error detection.</li>
        <li><strong>Network Layer:</strong> Determines routing and forwarding of data.</li>
        <li><strong>Transport Layer:</strong> Provides end-to-end communication control.</li>
        <li><strong>Session Layer:</strong> Manages sessions between applications.</li>
        <li><strong>Presentation Layer:</strong> Translates data formats and encryption.</li>
        <li><strong>Application Layer:</strong> Provides services to user applications.</li>
      </ol>
      <p><strong>Detailed:</strong> These are the 7 layers of the OSI model. Each layer serves the layer above and is served by the layer below. Understanding layers helps in troubleshooting and protocol design.</p>
    `
  },
  "topology": {
    title: "Topology",
    icon: '<i class="fa-solid fa-diagram-project"></i>',
    img: "images/topology.png",
    html: `
      <ul>
        <li><strong>Bus Topology:</strong> All devices connected to a single backbone cable.</li>
        <li><strong>Star Topology:</strong> All devices connected to a central hub or switch.</li>
        <li><strong>Ring Topology:</strong> Devices connected in a circular chain.</li>
        <li><strong>Mesh Topology:</strong> Devices interconnected with many redundant connections.</li>
      </ul>
      <p><strong>Detailed:</strong> Each topology has advantages and disadvantages. Star is most common (easy to manage), mesh offers high reliability, ring and bus are less used today but important historically.</p>
    `
  }
};

const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

// Modal open logic
document.querySelectorAll('nav a[data-topic]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const key = link.getAttribute('data-topic');
    const d = topicDetails[key];
    if (d) {
      modalContent.innerHTML = `
        <h2>${d.icon} ${d.title}</h2>
        <img src="${d.img}" alt="${d.title}">
        ${d.html}
      `;
      modalOverlay.classList.add('active');
      document.body.style.overflow = "hidden";
      // Progress bar update (mark as covered)
      markTopicCovered(key);
    }
  });
});

// Modal close logic
modalOverlay.addEventListener('click', function(e) {
  if (e.target === modalOverlay) closeModal();
});
modalClose.addEventListener('click', closeModal);
window.addEventListener('keydown', e => {
  if (e.key === "Escape") closeModal();
});
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = "";
}

// -- DASHBOARD LOGIC --
// Progress: store seen topics in localStorage
const allTopics = Object.keys(topicDetails);
function getCoveredTopics() {
  try {
    return JSON.parse(localStorage.getItem('coveredTopics') || '[]');
  } catch { return []; }
}
function setCoveredTopics(arr) {
  localStorage.setItem('coveredTopics', JSON.stringify(arr));
}
function markTopicCovered(key) {
  let arr = getCoveredTopics();
  if (!arr.includes(key)) {
    arr.push(key);
    setCoveredTopics(arr);
    updateProgress();
  }
}
function updateProgress() {
  const arr = getCoveredTopics();
  const num = arr.length, total = allTopics.length;
  const percent = Math.round((num/total)*100);
  document.getElementById('topicsProgress').textContent = `${num} / ${total}`;
  document.getElementById('topicsBar').style.width = percent + '%';
}
updateProgress();

// Tip of the day (random)
const tips = [
  "The Internet is the largest WAN in the world!",
  "Routers connect two or more networks and direct network traffic.",
  "OSI stands for Open Systems Interconnection.",
  "A switch is more efficient than a hub in a LAN.",
  "Fiber optic cables transmit data as light.",
  "Wi-Fi stands for Wireless Fidelity.",
  "IP stands for Internet Protocol.",
  "Star topology is the most common LAN topology.",
  "A modem converts digital signals to analog for transmission.",
  "TCP and UDP are common transport layer protocols."
];
function setRandomTip() {
  const tip = tips[Math.floor(Math.random()*tips.length)];
  document.getElementById('tipOfDay').textContent = tip;
}
setRandomTip();

// Quick Search (searches topics by name and opens modal if match)
document.getElementById('dashboardSearchBtn').onclick = function() {
  searchTopic();
};
document.getElementById('dashboardSearch').onkeydown = function(e) {
  if (e.key === 'Enter') searchTopic();
};
function searchTopic() {
  const q = document.getElementById('dashboardSearch').value.trim().toLowerCase();
  if (!q) return;
  let found = null;
  for (const key of allTopics) {
    if (
      key.replace(/-/g,' ').includes(q) ||
      (topicDetails[key].title && topicDetails[key].title.toLowerCase().includes(q))
    ) {
      found = key; break;
    }
  }
  if (found) {
    // Open the modal for the found topic
    const d = topicDetails[found];
    modalContent.innerHTML = `
      <h2>${d.icon} ${d.title}</h2>
      <img src="${d.img}" alt="${d.title}">
      ${d.html}
    `;
    modalOverlay.classList.add('active');
    document.body.style.overflow = "hidden";
    markTopicCovered(found);
  } else {
    alert("No topic found for: " + q);
  }
}

// Optionally, you can update the goal dynamically if you wish
// document.getElementById('goalText').textContent = "Today's Goal: ...";