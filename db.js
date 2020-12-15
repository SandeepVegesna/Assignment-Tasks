var Sequelize = require('sequelize');

var config = require('./config');
var db = null;

module.exports.db = function() {
    if(config.db){
      db = _getConnection(db,config.db);
      return db;  
    } 
    return;
};




function _getConnection(conn,config){
    if (conn != null) 
        return conn;

    conn = new Sequelize(config.name, config.user, config.pass, {
        host: config.host,
        dialect: 'mysql',
        logging: process.env.NODE_ENV !== 'production' ? console.log : false,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        define: {
            timestamps: false
        }
    });

    return conn;

}