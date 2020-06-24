import {storeState, blueFood, depriveLight, giveLight, greenFood, hydrate, dehydrate, erosion} from '../src/main.js';
import $ from "jquery";

describe ('plantOne', () => {

  test('should create a new plant object, set its food to 5', () =>{
    const plantOne = storeState();
    const newState = plantOne(blueFood);
    expect(newState.soil).toEqual(5);
  })
  
  test('should create a new plant object, and feeding it should decrease its light by 2', () =>{
    const plantOne = storeState();
    const newState = plantOne(greenFood);
    expect(newState.soil).toEqual(10);
  })

  test('should create a new plant object, and feeding it should decrease its light by 2', () =>{
    const plantOne = storeState();
    const newState = plantOne(depriveLight);
    expect(newState.light).toEqual(-2);
  })

  test('should create a new plant object, and giving light should increase light by 5', () =>{
    const plantOne = storeState();
    const newState = plantOne(giveLight);
    expect(newState.light).toEqual(5);
  })

  test('should create a new plant object, and hydrate increases water by 5', () =>{
    const plantOne = storeState();
    const newState = plantOne(hydrate);
    expect(newState.water).toEqual(5);
  })

  test('should create a new plant object, and dehydrating it should decrease its water by 2', () =>{
    const plantOne = storeState();
    const newState = plantOne(dehydrate);
    expect(newState.water).toEqual(-2);
  })

  test('should create a new plant object, and eroding it should decrease its soil by 2', () =>{
    const plantOne = storeState();
    const newState = plantOne(erosion);
    expect(newState.soil).toEqual(-2);
  })

})