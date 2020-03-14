import axiosService from './../services/axiosService';

const url = '/search/?saleCategories=613&channel=pv_online&terminal=phongvu&saleStatuses=hang_ban,hang_dat_truoc,hang_sap_het,hang_moi,hang_trung_bay,hang_thanh_ly&_limit=20&publishStatus=true';

export const fetchList = (query='', page=7) => {
  return axiosService.get(`${url}&_page=${page}&q=${query}`);
};
