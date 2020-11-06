import axios from 'axios';

const POULTRY_API_BASE_URL = 'http://localhost:8080/poultry';

class poultryservice {

    getAllPoultry() {
        return axios.get(POULTRY_API_BASE_URL);
    }
    createPoultry(product){
        return axios.post(POULTRY_API_BASE_URL , product);
    }
    getPoultryById(PoultryId) {
        console.log("getPoultryById");
        return axios.get(POULTRY_API_BASE_URL + '/' + PoultryId);
    }
    deletePoultry(PoultryId) {
        return axios.delete(POULTRY_API_BASE_URL + '/' + PoultryId);
    }
    updatePoultry(PoultryBody) {
        return axios.put(POULTRY_API_BASE_URL + '/' + PoultryBody.id,PoultryBody );
    }
    getAllPoultryInPage(pageNo,pageSize,sortBy){
        return axios.get(POULTRY_API_BASE_URL + '/' + 'page?pageNo='+pageNo+'&pageSize='+pageSize+'&sortBy='+sortBy );
    }
    searchPoultry(Searched,pageNo){
        return axios.get(POULTRY_API_BASE_URL  + '/page/serachedPages?searched='+Searched+'&pageNo='+pageNo+'&pageSize=3' );
    }
    getPoultrytByPriceBB(minPrice,ratting,pageNo){
        return axios.get(POULTRY_API_BASE_URL +  '/page/fillter?minPrice='+minPrice+'&ratting='+ratting+'&pageNo='+pageNo +'&pageSize=3');
    }
    
}

export default new poultryservice();

