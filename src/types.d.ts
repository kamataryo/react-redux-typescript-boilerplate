export interface Point {
  x: number,
  y: number,
}

export interface WeightPoint extends Point {
  weight: number,
}

export interface Event { target: { value: string } }
