# 🚀 Zerodha Trading Agent (MCP x Bun.js)

This is an intelligent **Stock Trading Agent** built using:
- **Bun.js** (fast JavaScript runtime)
- **Zerodha Kite Connect API**
- **Claude MCP Server Integration**

The agent allows you to **place trades**, **auto-buy/sell stocks** based on triggers, and (future roadmap) **predict stock trends** using historical data and live news.

---

## 📋 Features

- 🔥 Place **Buy** and **Sell** orders automatically via MCP Agent
- 🛡️ **Authenticate** securely using Kite Connect
- 🔄 **Auto-refresh access tokens** periodically
- 🎯 **(Coming Soon)** Smart GTT-like Watchlist based buying/selling
- 🧠 **(Coming Soon)** Stock Future Prediction using charts and news analysis
- ⚡ Built with **Bun.js** for superfast runtime
- 🎯 Fully compatible with **Claude Toolchain / MCP Agents**

---

## 📂 Project Structure

zerodha-trade/
├── index.ts          # MCP Server setup, defines trading tools
├── trade.ts          # Trading logic: place order, generate session
├── refreshToken.ts   # Refreshes access token using request_token
├── login.ts          # (One time) Generate new access token
├── tokenStore.json   # Stores API key, secret, access token
├── watchlist.json    # (Coming soon) GTT trigger rules
├── README.md         # Project documentation

---

## ⚙️ Setup Instructions

### 1. Install Dependencies

```bash
bun install

(Make sure you have Bun.js installed: curl -fsSL https://bun.sh/install | bash)

⸻

2. Configure API Credentials

Update tokenStore.json with:

{
  "apiKey": "YOUR_KITE_API_KEY",
  "apiSecret": "YOUR_KITE_API_SECRET",
  "accessToken": "YOUR_ACCESS_TOKEN"
}

If you don’t have accessToken yet, run:

bun login.ts

to generate one manually.

⸻

3. Running the Agent Server

bun index.ts

✅ This will:
	•	Auto-refresh your access token every 24 hours
	•	Expose trading functions to Claude Agent via MCP Server
	•	Run a server on http://localhost:3000

⸻

🚀 MCP Server Configuration Example

```JSON
{
  "mcpServers": {
    "zerodha-trade": {
      "command": "/Users/vamsi/.bun/bin/bun",
      "args": [
        "--directory",
        "/Users/vamsi/Projects/zerodha-trade",
        "index.ts"
      ]
    }
  }
}
```


⸻

🛠️ Future Enhancements (Roadmap)
	•	🔔 Smart GTT Trigger system: Buy/sell when price crosses target
	•	📈 Stock Future Prediction Agent (using historical price + live news)
	•	📊 Auto SIP Bot for ETFs like Nifty50
	•	📬 Telegram/Slack Alerts on successful order execution
	•	📉 Stop Loss Automation on Portfolio Holdings

⸻

🤖 How It Works (High Level)
	1.	MCP Agent requests buyStock(symbol, quantity) or sellStock(symbol, quantity)
	2.	Agent server uses Kite Connect API to place orders
	3.	Access token refreshed every day automatically
	4.	(Upcoming) Background service watches prices to auto-trigger GTT-like orders
	5.	(Upcoming) News + Chart analysis predict stock trend

⸻

✨ Credits
	•	Zerodha Kite Connect API
	•	Bun.js
	•	Claude Model Context Protocol
	•	Zerodha Developer Community

⸻
