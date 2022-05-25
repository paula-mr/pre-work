/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-use-before-define */
declare global {
  interface Window {
    cacheTeste?: any;
  }
}

export default class AxiosCache {
  constructor(private readonly data: any = {}) {
    window.cacheTeste = this;
  }

  put(key: any, value: any) {
    this.data[key] = value;
  }

  get(key: string) {
    return this.data[key];
  }

  getKey(url: string, method: any, params: any) {
    return method + ' ' + url + stringifyQueryString(params);
  }
}

function stringifyQueryString(params: any) {
  if (!params) return '';
  const querystringParts = [];

  for (const p in params) {
    if (params[p] !== null && params[p] !== undefined) {
      querystringParts.push(p + '=' + params[p]);
    }
  }

  if (querystringParts.length === 0) return '';

  return '?' + querystringParts.sort().join('&');
}
