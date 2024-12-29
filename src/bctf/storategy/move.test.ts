import { expect, mock, test } from 'bun:test'
import type { FindPathOptions } from 'game/path-finder'
import type { Position } from 'game/prototypes'
import { moveStoratagy } from './move.ts'

test('moveStoratagy', () => {
  const moveTo = mock((_target: Position, _opts?: FindPathOptions): 0 => 0)
  const creep = { moveTo }
  const flag = { x: 1, y: 1 }
  moveStoratagy(creep, flag)

  expect(moveTo).toHaveBeenCalledTimes(1)
  expect(moveTo).toHaveBeenCalledWith(flag)
})
