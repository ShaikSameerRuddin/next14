type StringRecord = Record<string, string>;

const version = "/v1";

export const apiUrls: StringRecord = {
  //auth
  login: `${version}/login`,
  register: `${version}/register`,
};
