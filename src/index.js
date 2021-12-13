import app from './app';
import './database';
const host = '0.0.0.0';
const port = process.env.PORT || 5000;
app.listen(port, host);
console.log("Server listen on port", port)