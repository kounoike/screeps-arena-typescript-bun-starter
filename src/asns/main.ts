import { Creep } from "game/prototypes"
import { getObjectsByPrototype } from "game/utils"
import _ from "lodash"
import { getLogger } from "loglevel"

const logger = getLogger("main")

export function loop(){
  logger.info("loop")

  const [myCreeps, enemyCreeps] = _.partition(getObjectsByPrototype(Creep), c => c.my)
  logger.info(`total hits:${_.sumBy(myCreeps, c => c.hits)}`)
}
