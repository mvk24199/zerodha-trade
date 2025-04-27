import {placeOrder} from "./trade";
import { setAccessTokenManually } from "./trade";
import { serve } from "bun";
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

async function init(){
    //const newToken = await refreshAccessToken();
    setAccessTokenManually("YOUR_ACCESS_TOKEN");
}

await init();

const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});

server.tool("buyStockHandler",
    {symbol:z.string(),quantity:z.number()},
    async ({symbol,quantity}) => {
        await placeOrder(symbol,"BUY",quantity);
        return {content: [{type:"text",text:'BuyOrder placed successfully for ${symbol} with quantity ${quantity}'}]};
    }
);

server.tool("sellStockHandler",
    {symbol:z.string(),quantity:z.number()},
    async ({symbol,quantity}) => {
        await placeOrder(symbol,"SELL",quantity);
        return {content: [{type:"text",text:'Sell Order placed successfully for ${symbol} with quantity ${quantity}'}]};
    }
);

serve({
    port:3000,
    fetch(req){
        return new Response("Server is running on Port 3000");
    }
});
/*
setInterval(async ()=> {
    const newToken = await refreshAccessToken();
    setAccessTokenManually(newToken);
},1000*60*60*24);*/

const transport = new StdioServerTransport();
await server.connect(transport);