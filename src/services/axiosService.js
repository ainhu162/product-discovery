import axios from 'axios';

class AxiosService {
  constructor() {
    const instance = axios.create({
      baseURL: 'https://listing.services.teko.vn/api',
    });
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response.data;
  }
  handleError(error) {
    return Promise.reject(error);
  }
  get(url, param = this.param) {
    return this.instance.get(url, { params: { ...param } });
  }
}

export default new AxiosService();
