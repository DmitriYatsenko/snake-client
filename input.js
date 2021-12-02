let connection;
const { w, a, s, d } = require("./constants");

const handleUserInput = function (key) {
    if (key === "\u0003") {
        process.exit();
    }
    else if (key === "w") {
        connection.write(w);
    }
    else if (key === "a") {
        connection.write(a);
    }
    else if (key === "s") {
        connection.write(s);
    }
    else if (key === "d") {
        connection.write(d);
    }
    else if (key === " ") {
        connection.write('Say: Hello');
    }
};

const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", (key) => {
        handleUserInput(key);
    });
    return stdin;
};


module.exports = { setupInput };