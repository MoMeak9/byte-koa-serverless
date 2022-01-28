import Router from 'koa-router'
import UserService from '../services/userService'

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

/**
 * @swagger
 * /user/login:
 *   post:
 *     description: 用户基本信息
 *     tags: [授权模块]
 *     responses:
 *       200:
 *         description: 成功
 *         schema:
 *           type: object
 */

routerInit.post('/login', UserService.login)


export default routerInit
