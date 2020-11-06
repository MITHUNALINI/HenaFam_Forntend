import axios from 'axios';
import authHeader from './auth-header';

const ORDER_API_BASE_URL = 'http://localhost:8080/Order';

class Orderservice {

    getAllOrder() {
        return axios.get(ORDER_API_BASE_URL,{ headers:authHeader() });
    }
    createOrder(product){
        return axios.post(ORDER_API_BASE_URL , product,{ headers:authHeader() });
    }
  
    deleteById(PoultryId) {
        return axios.delete(ORDER_API_BASE_URL + '/' + PoultryId, { headers:authHeader() });
    }
   
    
    getAllOrderInPage(pageNo,pageSize,sortBy){
        return axios.get(ORDER_API_BASE_URL + '/' + 'page?pageNo='+pageNo+'&pageSize='+pageSize+'&sortBy='+sortBy,{ headers:authHeader() } );
    }
    
    
}



export default new Orderservice();

