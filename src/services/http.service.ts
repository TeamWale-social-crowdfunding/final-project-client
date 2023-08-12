import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { Observable } from "rxjs";

export default abstract class HttpService {
  protected httpClient: AxiosInstance;

  constructor(baseURL: string) {
    if (new.target === HttpService) {
      throw new Error("Cannot instantiate abstract class");
    }

    this.httpClient = axios.create({
      baseURL,
    });
  }

  protected get<T>(url: string, config?: any): Observable<T> {
    return this.request<T>("get", url, config);
  }

  protected post<T>(url: string, data: any, config?: any): Observable<T> {
    return this.request<T>("post", url, config, data);
  }

  protected put<T>(url: string, data: any, config?: any): Observable<T> {
    return this.request<T>("put", url, config, data);
  }

  protected patch<T>(url: string, data: any, config?: any): Observable<T> {
    return this.request<T>("patch", url, config, data);
  }

  protected delete<T>(url: string, config?: any): Observable<T> {
    return this.request<T>("delete", url, config);
  }

  private request<T>(
    method: string,
    url: string,
    config?: any,
    data?: any
  ): Observable<T> {
    return new Observable((observer) => {
      this.httpClient
        .request<T>({ method, url, ...config, data })
        .then((response: AxiosResponse<T>) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error: AxiosError) => {
          observer.error(this.handleError(error));
        });
    });
  }

  protected handleError(error: AxiosError<any>): any {
    console.log(error);
  }
}
