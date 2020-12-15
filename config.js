
switch(process.env.NODE_ENV){
case 'development':
    module.exports.db = {
        name: 'cb360',
        host: '127.0.0.1',
        user: 'root',
        pass: ''
    };
    break;
default:
    module.exports.db = {
        name: 'cb360',
        host: '127.0.0.1',
        user: 'root',
        pass: ''
    };
}