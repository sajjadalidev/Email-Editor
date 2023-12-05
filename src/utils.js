// Convert API key to base64 first
const token = Buffer.from(process.env.API_KEY).toString("base64");

// Your http options should be like this
const httpOptions = {
  headers: {
    authorization: `Basic ${token}`,
  },
};
