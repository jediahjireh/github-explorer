// server.js

// import the configured Express app from app.js
import app from './app.js';
// import configuration settings
import { port } from './config/config.js';

// use the port from the config file
const PORT = port;

// start the server and listen on the configured port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});