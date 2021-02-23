export class RestService {
  static GET = async (url, headers) => {
    let options = {
      method: "GET"
    };

    const request = new Request(url, options);
    return await fetch(request);
  };

  static POST = async (url, params) => {
    let options = {
      method: "POST",
      body: params ? JSON.stringify(params) : ""
    };

    const request = new Request(url, options);
    return await fetch(request);
  };

  static PUT = async (url, params) => {
    let options = {
      method: "PUT",
      body: params ? JSON.stringify(params) : ""
    };
    const request = new Request(url, options);
    return await fetch(request);
  };

  static DELETE = async (url) => {
    let options = {
      method: "DELETE"
    };
    const request = new Request(url, options);
    return await fetch(request);
  };
}

export default RestService;
