import type { BareCache, BareHeaders, BareMethod, BareResponse } from './BareTypes.js';
import { Client } from './Client.js';
import type { ReadyStateCallback, MetaCallback, GetRequestHeadersCallback } from './Client.js';
export default class ClientV3 extends Client {
    ws: URL;
    http: URL;
    constructor(server: URL);
    connect(remote: URL, protocols: string[], getRequestHeaders: GetRequestHeadersCallback, onMeta: MetaCallback, onReadyState: ReadyStateCallback): WebSocket;
    request(method: BareMethod, requestHeaders: BareHeaders, body: BodyInit | null, remote: URL, cache: BareCache | undefined, duplex: string | undefined, signal: AbortSignal | undefined): Promise<BareResponse>;
    private readBareResponse;
    createBareHeaders(remote: URL, bareHeaders: BareHeaders, forwardHeaders?: string[], passHeaders?: string[], passStatus?: number[]): Headers;
}
