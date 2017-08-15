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
    name: 'recipebook',
    path: '../',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
      cleanAfterBuild: true,
      debug: true
    },
    env: {
      ROOT_URL: 'http://localhost',
      MONGO_URL: 'mongodb://localhost/meteor',
      port: 3000
    },
    docker: {
      image: 'abernix/meteord:base'
    },

    //dockerImage: 'kadirahq/meteord'
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