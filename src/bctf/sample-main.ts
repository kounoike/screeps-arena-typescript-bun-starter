import { Flag } from 'arena/season_beta/capture_the_flag/basic/prototypes'
import { Creep } from 'game/prototypes'
import { getObjectsByPrototype } from 'game/utils'

export function loop() {
  const enemyFlag = getObjectsByPrototype(Flag).find(object => !object.my)
  if (!enemyFlag) {
    return
  }
  const myCreeps = getObjectsByPrototype(Creep).filter(object => object.my)
  for (const creep of myCreeps) {
    creep.moveTo(enemyFlag)
  }
}
