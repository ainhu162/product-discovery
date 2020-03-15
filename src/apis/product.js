import axiosService from './../services/axiosService';

const SEARCH_URL = '/search/?saleCategories=613&channel=pv_online&terminal=phongvu&saleStatuses=hang_ban,hang_dat_truoc,hang_sap_het,hang_moi,hang_trung_bay,hang_thanh_ly&_limit=20&publishStatus=true';
const DETAIL_URL = '/products';
export const fetchList = (query='', page=1) => {
  return axiosService.get(`${SEARCH_URL}&_page=${page}&q=${query}`);
};
export const getDetail = id => {
  return axiosService.get(`${DETAIL_URL}/${id}?channel=pv_online&terminal=phongvu`);
}