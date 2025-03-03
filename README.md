### 📡 Minecraft Status Bot  

**Description:**  
- Minecraft Status Bot is a professional and efficient Discord bot designed to provide real-time status updates for your Minecraft server. It fetches essential server information, such as online players, queue status, and more, ensuring server administrators and players stay informed at all times.

**Features:**  
- Live Minecraft server status updates  
- Displays online players and server queue  
- Fetches server details using the MCSrvStat API  
- Clean and professional Discord embeds  

**Credits:**  
- This bot was developed by Kaloudas. Special thanks to all contributors and the Discord community for their support and valuable feedback.  

**License:**  
- This project is open-source and available under the GNU General Public License v3.0.  

---

## ⚙️ Setup Instructions:  

To set up Minecraft Status Bot on your own Discord server, follow these steps:  

### 1️⃣ Clone the Repository  
Clone the repository to your local machine using the following command:  
```sh
git clone https://github.com/KaloudasDev/Minecraft-Status-Bot
```

### 2️⃣ Install Dependencies  
Navigate to the project folder and install the required dependencies:  
```sh
npm install discord.js@latest axios dotenv
```

### 3️⃣ Set Up Environment Variables  
Create a `.env` file in the root directory and add the following:  
```sh
TOKEN=YOUR_BOT_TOKEN_HERE
CLIENT_ID=YOUR_CLIENT_ID_HERE
GUILD_ID=YOUR_GUILD_ID_HERE
MC_SERVER_IP=YOUR_MINECRAFT_SERVER_IP_HERE
```

### 4️⃣ Ensure Query is Enabled  
For the bot to retrieve full server details, enable query in your Minecraft server's `server.properties` file:  
```properties
enable-query=true
query.port=25565
```

### 5️⃣ Run the Bot  
To start the bot, use the following command:  
```sh
node index.js
```

### 6️⃣ Add the Bot to Your Server  
Go to the [Discord Developer Portal](https://discord.com/developers/applications), find your bot’s application, and use the OAuth2 link to add it to your server.  

---

## 🔗 Contact Links:  
- **Developer's Discord Profile:** [Kaloudas](https://discordlookup.com/user/1069279857072160921)  
- **NobleCraft Studios:** [Join Discord](https://discord.gg/noblecraft)  
- **Developer's Email:** [kaloudasdev@gmail.com](mailto:kaloudasdev@example.com)