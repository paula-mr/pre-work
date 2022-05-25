export interface IAxiosResponse<T> {
  status?: number;
  data?: T;
}

export interface IAxiosResult {
  status?: number;
}
