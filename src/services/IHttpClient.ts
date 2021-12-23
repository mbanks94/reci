export interface IHttpClient {
    fetch: <T>(url: string) => T;
    fetchById: <T>(url: string, id: string | number) => T;
}