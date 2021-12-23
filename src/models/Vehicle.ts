import { Entity } from "./Entity";

export interface Vehicle extends Entity {
    name: string;
    description: string;
    vehicle_class: string;
    length: string;
    pilot: string;
    films: string[];
}