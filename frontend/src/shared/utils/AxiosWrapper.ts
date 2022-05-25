/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable prefer-spread */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import AxiosCache from './AxiosCache';

export default class AxiosWrapper {
  private readonly defaultErrorHandler: any;
  private readonly axios: any;
  private readonly cache: AxiosCache;

  constructor(axiosInstance: any, options: any) {
    this.axios = axiosInstance;
    this.defaultErrorHandler = options && options.defaultErrorHandler;
    this.cache = new AxiosCache();
  }

  public async request(config: any) {
    // @ts-ignore:2522
    return this.doRequest(config, 'request', arguments);
  }

  public async get(url: string, config?: any) {
    // @ts-ignore:2522
    return this.doRequest(config, 'get', arguments);
  }

  public async post(url: string, data: any, config?: any) {
    // @ts-ignore:2522
    return this.doRequest(config, 'post', arguments);
  }

  public async put(url: string, data: any, config: any) {
    // @ts-ignore:2522
    return this.doRequest(config, 'put', arguments);
  }

  public async delete(url: string, config: any) {
    // @ts-ignore:2522
    return this.doRequest(config, 'delete', arguments);
  }

  public async head(url: string, config: any) {
    // @ts-ignore:2522
    return this.doRequest(config, 'head', arguments);
  }

  public async options(url: string, config: any) {
    // @ts-ignore:2522
    return this.doRequest(config, 'options', arguments);
  }

  public async patch(url: string, data: any, config: any) {
    // @ts-ignore:2522
    return this.doRequest(config, 'patch', arguments);
  }

  private async doRequest(config: any, method: any, params: any) {
    const shouldCache =
      method === 'get' &&
      config &&
      config.hasOwnProperty('cache') &&
      config.cache === true;
    const cacheKey = !!shouldCache && this._getCacheKey(method, params);
    const cachedValue = this._getCachedValue(shouldCache, cacheKey as any);

    const shouldNotHandleError =
      config &&
      config.hasOwnProperty('handleError') &&
      config.handleError === false;
    let promisse;

    if (cachedValue) return cachedValue;

    if (shouldNotHandleError) {
      promisse = this.axios[method].apply(this.axios, params);
      return this._cacheRequest(shouldCache, cacheKey as any, promisse);
    }

    try {
      promisse = this.axios[method].apply(this.axios, params);
      return await this._cacheRequest(shouldCache, cacheKey as any, promisse);
    } catch (e) {
      this.defaultErrorHandler(e);
    }
  }

  private _cacheRequest(shouldCache: any, key: any, promisse: any) {
    if (shouldCache) {
      promisse.then((response: any) => {
        if (response.status === 200 && response.data)
          this.cache.put(key, response.data);
      });
    }

    return promisse;
  }

  private _getCachedValue(shouldCache: any, key: any) {
    if (!shouldCache) return;

    const cachedValue = this.cache.get(key);

    if (cachedValue) return { status: 200, data: cachedValue };
  }

  private _getCacheKey(method: any, params: any) {
    return this.cache.getKey(params[0], method, params[1] && params[1].params);
  }
}
