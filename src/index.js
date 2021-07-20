import app from './app'
import './database'
app.listen(process.env.ROOT || 5000);
console.log("Server listen on port",5000)