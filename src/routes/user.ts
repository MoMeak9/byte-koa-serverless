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
 *           properties:
 *             id:
 *               type: number
 *               title: id
 *             userName:
 *               type: string
 *               title: 用户名
 *             name:
 *               type: string
 *               title: 昵称
 *             email:
 *               type: string
 *               title: 邮箱
 *             phone:
 *               type: number
 *               title: 手机号
 *             accessToken:
 *               type: string
 *               title: sso的token
 *             authToken:
 *               type: string
 *               title: 账号系统的token
 *             menus:
 *               type: array
 *               items:
 *                   $ref: '#/definitions/UserModel1'
 *
 */

routerInit.post('/login', UserService.login)


export default routerInit
