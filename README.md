## Lunar Veggie Farmer

Simple NodeJS server that registers as a DISCO service to registry in `discovery-settings.js` and returns the stock of a lunar veggie farmer.

### Usage
A simple GET returns the stock:

`http://<server-url>/`


### Notes
Returns a plain string (`text/plain`) response:


* `200 OK` plus a JSON object
* `400 Invalid` plus an empty body

