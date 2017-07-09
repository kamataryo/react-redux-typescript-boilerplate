import { IWeightPoint, IPoint } from '../types'

export const gravityCenter = (p1: IWeightPoint, p2: IWeightPoint): IPoint => {
  return ({
    x: (p1.x + p2.x) * (p1.weight) / (p1.weight + p2.weight),
    y: (p1.y + p2.y) * (p1.weight) / (p1.weight + p2.weight),
  })
}
