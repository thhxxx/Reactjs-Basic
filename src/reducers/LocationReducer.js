import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCities = createAsyncThunk('LocationReducer/getCities', async () => {
  try {
    let { data } = await axios.get('https://thhxxx.github.io/cities.json');
    return data.cities;
  } catch (e) {
    console.log(e);
  }
});

export const getDistricts = createAsyncThunk('LocationReducer/getDistricts', async () => {
  try {
    let { data } = await axios.get('https://thhxxx.github.io/districts.json');
    return data.districts;
  } catch (e) {
    console.log(e);
  }
});

const LocationReducer = createSlice({
  name: 'LocationReducer',
  initialState: {
    location: {
      id_city: '',
      name_city: '',
      id_district: '',
      name_district: ''
    },
    cities: [],
    districts: []
  },
  reducers: {
    handleIDCity: (state, action) => {
      const { idCity, cityName } = action.payload;
      state.location.id_city = idCity;
      state.location.name_city = cityName;
    },
    handleIDDistrict: (state, action) => {
      const { idDistrict, districtName } = action.payload;
      state.location.id_district = idDistrict;
      state.location.name_district = districtName;
    }
  },
  extraReducers: {
    [getCities.fulfilled]: (state, action) => {
      state.cities = action.payload;
    },
    [getDistricts.fulfilled]: (state, action) => {
      state.districts = action.payload;
    }
  }
});

export const { handleIDCity, handleIDDistrict } = LocationReducer.actions;

export default LocationReducer.reducer;