const credentials = require('./credentials');
const dbuser = credentials.dbuser;
const dbpassword = credentials.dbpassword;

module.exports = {
    url : 'mongodb://' + `${dbuser}` + ':' + `${dbpassword}` + '@ds125048.mlab.com:25048/qamarmirza',
};