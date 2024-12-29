import type { CreepMoveResult } from 'game/constants'
import type { FindPathOptions } from 'game/path-finder'
import type { Position } from 'game/prototypes'

export interface CreepLike {
  moveTo(target: Position, opts?: FindPathOptions): CreepMoveResult
}
export interface FlagLike {
  x: number
  y: number
}

export function moveStoratagy(creep: CreepLike, flag: FlagLike) {
  creep.moveTo(flag)
}
