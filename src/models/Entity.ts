import { Identifiable } from "./Identifiable";

export interface Entity extends Identifiable {
    url: string;
}