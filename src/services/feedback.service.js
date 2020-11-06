import axios from 'axios';

const FEEDBACK_API_BASE_URL = 'http://localhost:8080/feedbacks';

class feedbackservice {

    getAllFeedback() {
        return axios.get(FEEDBACK_API_BASE_URL);
    }
    createFeedback(Feedback){
        return axios.post(FEEDBACK_API_BASE_URL , Feedback);
    }
    getFeedbackByProductId(ProductId) {
        return axios.get(FEEDBACK_API_BASE_URL + '?productId=' + ProductId);
    }
    deleteFeedbackByfeedbackId(FeedbackId) {
        return axios.delete(FEEDBACK_API_BASE_URL + '/' + FeedbackId);
    }
    getAllFeedbackInPage(pageNo,pageSize,sortBy){
        return axios.get(FEEDBACK_API_BASE_URL + '/' + 'page?pageNo='+pageNo+'&pageSize='+pageSize+'&sortBy='+sortBy );
    }
    
    



}

export default new feedbackservice();

