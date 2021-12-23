import { Entity } from "./Entity";

export interface Location extends Entity {
    name: string;
    climate: string;
    terrain: string;
    surface_water: string;
    residents: string[];
    films: string[];
}