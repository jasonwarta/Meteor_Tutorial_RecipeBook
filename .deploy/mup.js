module.exports = {
  servers: {
    one: {
      host: 'warta.recipes',
      username: 'jason',
      pem: '/Users/jasonwarta/.ssh/DO_webserver'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'recipedb',
    path: '../',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    nodeVersion: "0.10.40",
    env: {
      ROOT_URL: 'warta.recipes',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    //dockerImage: 'kadirahq/meteord'
    dockerImage: 'abernix/meteord:base',
    //dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
