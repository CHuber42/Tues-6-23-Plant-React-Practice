import $ from "jquery";
// This function stores our state.

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const plantOne = storeState();
export const plantTwo = storeState();
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
export const blueFood = changeState("soil")(5);
export const giveLight = changeState("light")(5);
export const hydrate = changeState("water")(5);
export const greenFood = changeState("soil")(10);
export const depriveLight = changeState("light")(-2);
export const erosion = changeState("soil")(-2);
export const dehydrate = changeState("water")(-2);


$(document).ready(function() {

// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
  $('#feed').click(function() {
    const newState = plantOne(blueFood);
    const nextState = plantOne(depriveLight);
    $('#soil-value').text(nextState.soil);
    $('#light-value').text(nextState.light);
  });
  $('#water').click(function() {
    const newState = plantOne(hydrate);
    const nextState = plantOne(erosion);
    $('#soil-value').text(nextState.soil);
    $('#water-value').text(nextState.water);
  });
  $('#light').click(function() {
    const newState = plantOne(giveLight);
    const nextState = plantOne(dehydrate);
    $('#water-value').text(nextState.water);
    $('#light-value').text(nextState.light);
  });
  $('#feed2').click(function() {
    const newState = plantTwo(blueFood);
    const nextState = plantTwo(depriveLight);
    $('#light-value2').text(nextState.light);
    $('#soil-value2').text(nextState.soil);
  });
  $('#feed3').click(function() {
    const newState = plantTwo(greenFood);
    const nextState = plantTwo(depriveLight);
    $('#light-value2').text(nextState.light);
    $('#soil-value2').text(nextState.soil);
  });
  $('#water2').click(function() {
    const newState = plantTwo(hydrate);
    const nextState = plantTwo(erosion);
    $('#soil-value2').text(nextState.soil);
    $('#water-value2').text(nextState.water);
  });
  $('#light2').click(function() {
    const newState = plantTwo(giveLight);
    const nextState = plantOne(dehydrate);
    $('#water-value2').text(nextState.water);
    $('#light-value2').text(nextState.light);
  });
});