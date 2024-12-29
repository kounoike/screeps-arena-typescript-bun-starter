import type { FindPathOptions  } from 'game/path-finder'
import type { Position } from 'game/prototypes'

export type CreepMoveReturnCodeLike = 0 | -1 | -4 | -11 | -12

export interface CreepLike {
  moveTo(target: Position, opts?: FindPathOptions): CreepMoveReturnCodeLike | -2 | -7 | undefined
}
export interface FlagLike {
  x: number
  y: number
}

export function moveStoratagy(creep: CreepLike, flag: FlagLike) {
  creep.moveTo(flag)
}
