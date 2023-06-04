const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require("node-fetch");

async function main() {
    try {
        // `city` input defined in action metadata file
        const city = core.getInput('city');
        console.log(`Checking weather for: ${city}`);
        const weather = await fetch(`https://wttr.in/${city}?format=3`);
        const weatherText = await weather.text();
        core.setOutput("weather", weatherText.trim());
        console.log(weatherText);
        // Get the JSON webhook payload for the event that triggered the workflow
        const payload = JSON.stringify(github.context.payload, undefined, 2)
        console.log(`The event payload: ${payload}`);
      } catch (error) {
        core.setFailed(error.message);
      }
}

main();