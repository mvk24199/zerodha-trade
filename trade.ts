import { KiteConnect } from "kiteconnect";


const apiKey = "YOUR_KITE_API_KEY";
const apiSecret = "YOUR_KITE_API_SECRET";
const requestToken = "YOUR_REQUEST_TOKEN";

let accessToken = "";

const kc = new KiteConnect({ api_key: apiKey });
//console.log(kc.getLoginURL());

export async function generateSession(requestToken:string){
    try{
    const session = await kc.generateSession(requestToken,apiSecret);
    accessToken = session.access_token;
    kc.setAccessToken(accessToken);
    //console.log("Access token generated: ", accessToken);
    }
    catch(err){
        throw err;
    }
}

export async function setAccessTokenManually(token:string){
    accessToken = token;
    kc.setAccessToken(accessToken);
}

export async function placeOrder(symbol:string, transaction_type:"BUY"|"SELL", quantity:number) {
  try {
    const order = await kc.placeOrder("regular",{
        exchange:"NSE",
        tradingsymbol:symbol,
        transaction_type,
        quantity ,
        product:"CNC",
        order_type:"MARKET",
    });
    return order;
  } catch (err) {
    throw err;
  }
}
