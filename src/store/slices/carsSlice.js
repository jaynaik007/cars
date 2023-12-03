import { createSlice, nanoid } from "@reduxjs/toolkit";

const CarsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    // action.payload === { name : 'Urus', cost : 1456666}
    addCar(state, action) {
      state.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    // action.payload === id of the car we want to remove
    removeCar(state, action) {
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = CarsSlice.actions;
export const carsReducer = CarsSlice.reducer;
