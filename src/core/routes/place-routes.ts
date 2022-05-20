import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makePlaceController } from '../factories/place'

export default (router: Router): void => {
  router.get('/place', adaptRoute(makePlaceController()))
}