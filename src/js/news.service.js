import { ENV } from "../js/environment.config";
import { HttpClient } from "../js/httpClient";


const httpClient = new HttpClient();

export class NewsService {
    /**
     * 
     * @param {String} category 
     * @param {String} country 
     * @param {Function} callback
     * @param {String} keyword
      */

    getTopHeadlinesNews(category = '', country = '', keyword = '', endpoint = 'top-headlines') {
        return httpClient.get(`${ENV.apiUrl}/${endpoint}?${keyword}${category}${country}apiKey=${ENV.apiKey}`);
    }
}