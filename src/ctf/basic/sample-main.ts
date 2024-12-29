import { Flag } from 'arena/season_beta/capture_the_flag/basic/prototypes'
import { Creep } from 'game/prototypes'
import { getObjectsByPrototype } from 'game/utils'
import { getLogger } from 'loglevel'

const logger = getLogger('main')

export function loop() {
  const enemyFlag = getObjectsByPrototype(Flag).find(object => !object.my)
  if (!enemyFlag) {
    logger.error('enemy flag not found')
    return
  }
  const myCreeps = getObjectsByPrototype(Creep).filter(object => object.my)
  for (const creep of myCreeps) {
    logger.info(`creep:${creep.id} moveTo flag:${enemyFlag.id}`)
    creep.moveTo(enemyFlag)
  }
}
