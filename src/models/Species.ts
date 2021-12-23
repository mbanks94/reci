import { Entity } from "./Entity";

export interface Species extends Entity {
    name: string;
    classification: string;
    eye_colors: string;
    hair_colors: string;
    people: string[];
    films: string[];
}