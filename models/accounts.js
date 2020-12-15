var Sequelize = require('sequelize');
var db = require('../db').db();



var AccountsModel = db.define('accounts', {
	
     id: {
        field: 'id',
        type: Sequelize.INTEGER,
        primaryKey:true,
    },
     customerId: {
        field: 'customer_id',
        type: Sequelize.STRING(25),
        allowNull: true,
        defaultValue: null,
    },
    ccCardType: {
        field: 'cc_card_type',
        type: Sequelize.STRING(25),
        allowNull: true,
        defaultValue: null,
    },
    ccNumber: {
        field: 'cc_number',
        type: Sequelize.STRING(25),
        allowNull: true,
        defaultValue: null,
    },
    ccFirstSix: {
        field: 'cc_first_six',
        type: Sequelize.STRING(25),
        allowNull: true,
        defaultValue: null,
    },
    ccLastFour: {
        field: 'cc_last_four',
        type: Sequelize.STRING(25),
        allowNull: true,
        defaultValue: null,
    }

}, {
    tableName: 'customer_accounts'
});


module.exports = AccountsModel;
