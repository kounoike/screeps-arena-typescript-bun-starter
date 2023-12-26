import { expect, mock, test } from 'bun:test'
import type { MoveToOpts } from 'game/path-finder'
import type { RoomPosition } from 'game/prototypes'
import { type CreepLike, moveStoratagy } from './move'

test('moveStoratagy', () => {
  const moveTo = mock((_target: RoomPosition, _opts?: MoveToOpts): 0 => 0)
  const creep = { moveTo }
  const flag = { x: 1, y: 1 }
  moveStoratagy(creep, flag)

  expect(moveTo).toHaveBeenCalledTimes(1)
  expect(moveTo).toHaveBeenCalledWith(flag)
})
