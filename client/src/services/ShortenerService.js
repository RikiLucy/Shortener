import config from '../config/config.json';

class ShortenerService {
  static async createUrl(data) {
    try {
      let response = await fetch(`${config.API_URL}url`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      response = await response;
      if (response.status !== 200) return false;
      response = await response.json();
      
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  
  static async getUrl(data) {
    try {
      let response = await fetch(`${config.API_URL}url/?code=${data}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      
      response = await response;
      if (response.status !== 200) return false;
      response = await response.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  
  static async getVisitors(data) {
    try {
      let response = await fetch(`${config.API_URL}visitors/?code=${data}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      
      response = await response;
      response = await response.json();
      
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  
  static async getUniqueVisitors(data) {
    try {
      let response = await fetch(`${config.API_URL}unique_visitors/?code=${data}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      
      response = await response;
      response = await response.json();
      
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default ShortenerService;
