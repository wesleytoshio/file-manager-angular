export interface FileManagerItem {
    id?: string;
    name?: string;
    parent?: FileManagerItem;
    folder?: boolean,
    children?: FileManagerItem[];
    url?: string;
    thumbnail?: string;
    width?: number;
    height?: number;
    format?: string;
    createdAt?: string;
}
