export declare type BareMethod = 'GET' | 'POST' | 'DELETE' | 'OPTIONS' | 'PUT' | 'PATCH' | 'UPDATE' | string;
export declare type BareCache = 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached' | string;
export interface BareWebSocketMeta {
    protocol: string;
    setCookies: string[];
}
export declare type BareHTTPProtocol = 'blob:' | 'http:' | 'https:' | string;
export declare type BareWSProtocol = 'ws:' | 'wss:' | string;
export declare type urlLike = URL | string;
export declare const maxRedirects = 20;
export declare type BareHeaders = Record<string, string | string[]>;
/**
 * A Response with additional properties.
 */
export interface BareResponse extends Response {
    rawResponse: Response;
    rawHeaders: BareHeaders;
}
/**
 * A BareResponse with additional properties.
 */
export interface BareResponseFetch extends BareResponse {
    finalURL: string;
}
export interface BareMaintainer {
    email?: string;
    website?: string;
}
export interface BareProject {
    name?: string;
    description?: string;
    email?: string;
    website?: string;
    repository?: string;
    version?: string;
}
export declare type BareLanguage = 'NodeJS' | 'ServiceWorker' | 'Deno' | 'Java' | 'PHP' | 'Rust' | 'C' | 'C++' | 'C#' | 'Ruby' | 'Go' | 'Crystal' | 'Shell' | string;
export interface BareManifest {
    maintainer?: BareMaintainer;
    project?: BareProject;
    versions: string[];
    language: BareLanguage;
    memoryUsage?: number;
}
