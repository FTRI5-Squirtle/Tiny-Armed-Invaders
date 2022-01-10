const config = {
    verbose: true,
    silent: false,
  };
  
//module.exports = config;
  
  // Or async function
  module.exports = async () => {
    global.testServer = await require('./src/server/server.js');
    return {
    verbose: true,
  };
};

   // "test": "concurrently \"node ./src/server/server.js\" \"jest --verbose --silent==false\""


// module.exports = async (globalConfig) => {
//   testServer.close();
// };

// "jest": {
//   "globalSetup": "./jest.config.js",
//   "globalTeardown": "./jest.config.js"
// },