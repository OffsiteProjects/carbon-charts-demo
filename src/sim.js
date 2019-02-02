const simulation = {};
const DATA_RATE = 1000;

simulation.ondata = () => {};

function getTemperature() {
  return 18 + Math.random() / 10;
}
function getPressure() {
  return 101.325 + Math.random();
}
function getAxis() {
  return Math.floor(Math.random() * 4);
}

setTimeout(() => {
  simulation.ondata({
    temperature: getTemperature(),
    pressure: getPressure(),
    axis: getAxis()
  });
}, DATA_RATE);

export default simulation;
