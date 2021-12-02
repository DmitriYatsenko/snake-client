const net = require('net');
const { IP, PORT } = require("./constants");
// const host = "165.227.47.243";
// const port = 50541;

const connect = function () {
    const conn = net.createConnection({
        host: 'localhost', //IP,
        port: PORT
    });
    conn.on("connect", () => {
        console.log("Connection successful!");
        conn.write('Name: DY');
/*
        setTimeout(() => {
            conn.write('Move: up');
        }, 1000);

        setTimeout(() => {
            conn.write('Move: down');
        }, 2000);

        setTimeout(() => {
            conn.write('Move: left');
        }, 3000);

        setTimeout(() => {
            conn.write('Move: right');
        }, 4000);
*/
    });
    conn.on("data", (data) => {
        console.log(data);
    });
    conn.setEncoding("utf8");

    return conn;
};

module.exports = { connect };