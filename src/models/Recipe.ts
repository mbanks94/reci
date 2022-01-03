import { Entity } from "./Entity";

export interface Recipe extends Entity {
  name: string;
  short_description: string;
  long_description: string;
  nutritional_facts: string[];
  ingredients: string[]; //ingredients model?
  steps: string[];
  notes: string[];
}
