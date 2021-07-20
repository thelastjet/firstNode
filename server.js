let image = `<img src="https://images.westend61.de/0001251432pw/happy-male-and-female-computer-programmers-doing-high-five-over-computer-at-desk-in-creative-office-MASF13780.jpg" width="1000" height="600" />`;
let html = `<!DOCTYPE html><html lang="en">
<h1>Hello World!</h1>
<h2>I will be getting a job soon</h2>
<h2>Hopefully by the end of August</h2>
${image}
</html>`;

//import http from 'http'
const http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();
})
.listen(3000, function() {
    console.log("Server listening...");
});
