import axios from 'axios';

export async function getAllCity () {
  try {
    let { data } = await axios.get('https://thhxxx.github.io/cities.json');
    return data.cities;
  } catch (e) {
    console.log(e);
  }
}

export async function getAllDistrict () {
  try {
    let { data } = await axios.get('https://thhxxx.github.io/districts.json');
    return data.districts;
  } catch (e) {
    console.log(e);
  }
}

export async function getAllWard () {
  try {
    let { data } = await axios.get('https://thhxxx.github.io/wards.json');
    return data.wards;
  } catch (e) {
    console.log(e);
  }
}