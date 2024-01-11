// api/index.js
const axios = require('axios');

const apiUrl = 'https://bsp268.laf.run'; // 你的 API 地址

// 封装 GET 请求
const getData = async (endpoint) => {
  try {
    const response = await axios.get(`${apiUrl}/${endpoint}`);
    return response.data.data[0];
  } catch (error) {
    throw error;
  }
};
module.exports = {
    getData,
    // 其他请求的方法
  };
