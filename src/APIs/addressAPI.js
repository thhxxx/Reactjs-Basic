import axios from 'axios';

export async function getAllCity () {
  try {
    let { data } = await axios.get('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1');
    return data.data.data;
  } catch (e) {
    console.log(e);
  }
}

export async function getAllDistrict (cityCode) {
  try {
    let { data } = await axios.get(`https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${cityCode}&limit=-1`);
    return data.data.data;
  } catch (e) {
    console.log(e);
  }
}