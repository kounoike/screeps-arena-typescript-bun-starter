import { RESOURCE_SCORE } from 'arena/season_beta/collect_and_control/basic/constants'
import { ScoreCollector } from 'arena/season_beta/collect_and_control/basic/prototypes'
import { CARRY, ERR_NOT_IN_RANGE, MOVE } from 'game/constants'
import { type Creep, StructureContainer, StructureSpawn } from 'game/prototypes'
import { getObjectsByPrototype } from 'game/utils'

let creep: Creep | undefined

export function loop() {
  if (creep) {
    if (creep.store[RESOURCE_SCORE] > 0) {
      const scoreCollector = getObjectsByPrototype(ScoreCollector)[0]
      if (creep.transfer(scoreCollector, RESOURCE_SCORE) === ERR_NOT_IN_RANGE) {
        creep.moveTo(scoreCollector)
      }
    } else {
      const containers = getObjectsByPrototype(StructureContainer)
      const container = creep.findClosestByPath(containers)
      if (container && creep.withdraw(container, RESOURCE_SCORE) === ERR_NOT_IN_RANGE) {
        creep.moveTo(container)
      }
    }
  } else {
    const mySpawn = getObjectsByPrototype(StructureSpawn).find(obj => obj.my)
    const creepBody = [MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY]
    if (mySpawn) {
      creep = mySpawn.spawnCreep(creepBody).object
    }
  }
}
