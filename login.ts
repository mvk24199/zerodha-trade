import { KiteConnect } from "kiteconnect";


const apiKey = "YOUR_KITE_API_KEY";
const apiSecret = "YOUR_KITE_API_SECRET";
const requestToken = "YOUR_REQUEST_TOKEN";

const kc = new KiteConnect({ api_key: apiKey });

async function run(){
    const session = await kc.generateSession(requestToken,apiSecret);

}

run();