const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {

    const dashboardData = {
        projectName: "CloudFlow DevOps Dashboard",
        owner: "Atoyebi Micheal A.",
        role: "Cloud & DevOps Engineer",

        hostname: os.hostname(),
        platform: os.platform(),
        uptime: Math.floor(os.uptime() / 60)
    };

    res.render("index", dashboardData);

});

app.get("/aws", (req, res) => {
    res.render("aws");
});

app.get("/jenkins", (req, res) => {
    res.render("jenkins");
});

app.get("/docker", (req, res) => {
    res.render("docker");
});

app.get("/github", (req, res) => {
    res.render("github");
});

app.get("/deployments", (req, res) => {
    res.render("deployments");
});

app.listen(PORT, () => {
    console.log(`CloudFlow running on port ${PORT}`);
});
