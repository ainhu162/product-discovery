import mockAxios from "jest-mock-axios";
mockAxios.interceptors = mockAxios.interceptors || {};
mockAxios.interceptors.response = mockAxios.interceptors.response || {};
mockAxios.interceptors.response.use = jest.fn();
mockAxios.create = () => {
  return mockAxios;
};

export default mockAxios;