export interface FileManagerEvent {
    target?: FileManagerEventTarget;
    type?: FileManagerEventType;
    data?: any;
}

export enum FileManagerEventType {
    UPLOAD = "UPLOAD",
    DROP = "DROP",
    CROP = "CROP",
    DRAG_OVER = "DRAG_OVER",
    DRAG_LEAVE = "DRAG_LEAVE",
    CLICK_TO_UPLOAD = "CLICK_TO_UPLOAD"
}

export enum FileManagerEventTarget {
    TO_CROP = "TO_CROP",
    TO_LIST_FILES = "TO_LIST_FILES",
    TO_SEARCH = "TO_SEARCH",
    TO_FOLDERS = "TO_FOLDERS",
    TO_PREVIEW = "TO_PREVIEW"
}