// establishes a connection with the game server
const net = require('net');
const host = "165.227.47.243";
const port = 50541;

const connect = function () {
    const conn = net.createConnection({
        host: host,
        port: port
    });
    conn.setEncoding("utf8");

    conn.on("connect", () => {
        console.log("Connecting ...");
        conn.write("Connection successful!");
    });

    return conn;
};

module.exports = {
    host: host, // stores 42 as myNumber
    port: port, // stores "hello" as myString
    connect: connect
};