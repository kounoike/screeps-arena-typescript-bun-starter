import { Flag } from 'arena/season_beta/capture_the_flag/basic/prototypes'
import { Creep } from 'game/prototypes'
import { getObjectsByPrototype } from 'game/utils'
import { getLogger } from 'loglevel'
import { initializeLog } from '../common/log.ts'
import { myAwesomeLogic } from '../common/sample.ts'
import { moveStoratagy } from './storategy/move.ts'

initializeLog()

const logger = getLogger('main')

export function loop() {
  // biome-ignore lint/style/noNonNullAssertion: which is game rule!
  const enemyFlag = getObjectsByPrototype(Flag).find(object => !object.my)!
  const myCreeps = getObjectsByPrototype(Creep).filter(object => object.my)
  for (const creep of myCreeps) {
    moveStoratagy(creep, enemyFlag)
    logger.info(`#${creep.id} range:${creep.getRangeTo(enemyFlag)}`)
  }
  logger.info(`my creeps hits total: ${myAwesomeLogic(myCreeps)}`)
}
