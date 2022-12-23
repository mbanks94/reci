export interface Page<T> {
    next?: number;
    prev?: number;
    data: T;
    count: number;
};