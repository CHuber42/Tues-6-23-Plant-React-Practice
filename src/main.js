// This function stores our state.

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const plantOne = storeState();
const plantTwo = storeState();
// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// We create two functions using our function factory. We could easily create many more.

// const feed = changeState("soil");
const blueFood = changeState("soil")(5);
const giveLight = changeState("light")(5);
const hydrate = changeState("water")(5);


$(document).ready(function() {

// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
  $('#feed').click(function() {
    const newState = plantOne(blueFood);
    $('#soil-value').text(newState.soil);
  });
  $('#water').click(function() {
    const newState = plantOne(hydrate);
    $('#water-value').text(newState.water);
  });
  $('#light').click(function() {
    const newState = plantOne(giveLight);
    $('#light-value').text(newState.light);
  });
  $('#feed2').click(function() {
    const newState = plantTwo(blueFood);
    $('#soil-value2').text(newState.soil);
  });
  $('#water2').click(function() {
    const newState = plantTwo(hydrate);
    $('#water-value2').text(newState.water);
  });
  $('#light2').click(function() {
    const newState = plantTwo(giveLight);
    $('#light-value2').text(newState.light);
  });
});