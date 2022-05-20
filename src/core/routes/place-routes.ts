import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeCreatePlaceController } from '../factories/place'

export default (router: Router): void => {
  router.post('/place', adaptRoute(makeCreatePlaceController()))
}