export interface FileManagerItemInterface {
    id?: string;
    name?: string;
    parent?: FileManagerItemInterface;
    folder?: boolean,
    children?: Array<FileManagerItemInterface>;
    url?: string;
    thumbnail?: string;
    width?: number;
    height?: number;
    format?: string;
    createdAt?: string;
}
