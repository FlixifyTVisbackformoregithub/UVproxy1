import type { BareCache, BareHeaders, BareMethod, BareResponse, BareWebSocketMeta } from './BareTypes.js';
export declare const statusEmpty: number[];
export declare const statusRedirect: number[];
export interface BareErrorBody {
    code: string;
    id: string;
    message?: string;
    stack?: string;
}
export declare class BareError extends Error {
    status: number;
    body: BareErrorBody;
    constructor(status: number, body: BareErrorBody);
}
export declare type MetaCallback = (meta: BareWebSocketMeta) => void;
export declare type ReadyStateCallback = (readyState: number) => void;
export declare type WebSocketImpl = {
    new (...args: ConstructorParameters<typeof WebSocket>): WebSocket;
};
export declare type GetRequestHeadersCallback = () => Promise<BareHeaders>;
export declare abstract class Client {
    abstract connect(remote: URL, protocols: string[], getRequestHeaders: GetRequestHeadersCallback, onMeta: MetaCallback, onReadyState: ReadyStateCallback, webSocketImpl: WebSocketImpl): WebSocket;
    abstract request(method: BareMethod, requestHeaders: BareHeaders, body: BodyInit | null, remote: URL, cache: BareCache | undefined, duplex: string | undefined, signal: AbortSignal | undefined): Promise<BareResponse>;
    protected base: URL;
    /**
     *
     * @param version Version provided by extension
     * @param server Bare Server URL provided by BareClient
     */
    constructor(version: number, server: URL);
}
