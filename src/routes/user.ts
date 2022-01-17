import Router from 'koa-router'
import UserController from '../services/user'

const routerInit = new Router({prefix: '/user'})

/**
 * @swagger
 * definitions:
 *   Success:
 *     properties:
 *       code:
 *         type: integer
 *         title: 成功的状态码
 *       msg:
 *         type: string
 *         title: 提示语
 */

routerInit.post('/login', UserController.login)


export default routerInit
