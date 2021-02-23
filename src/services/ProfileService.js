import RestService from "./RestService";

export class ProfileService {
  //Private properties
  #headers = {};

  constructor() {
    this.#headers["Content-Type"] = "application/json";
  }

  getProfiles = () => {
    const url =
      "https://gist.githubusercontent.com/uktcmtt/d7a193a8cc6c6eaf1611cbec88d83649/raw/3ff5de98600e6b90b5585d7c38f57074927bc5fd/mh-coding-challenge-data.json";

    return RestService.GET(url, this.#headers);
  };
}

export default ProfileService;
