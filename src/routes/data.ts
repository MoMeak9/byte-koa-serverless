import Router from 'koa-router'
import DataServices from '../services/dataService'

const routerInit = new Router({prefix: '/data'})

/**
 * @swagger
 * /data/getTimePerformance:
 *   get:
 *     description: 性能耗时数据模拟
 *     tags: [性能数据展示]
 *     responses:
 *       200:
 *         description: 成功
 *         schema:
 *           type: object
 */
routerInit.get('/getTimePerformance', DataServices.getPerformanceDataOfTime)

/**
 * @swagger
 * /data/getWeekPV:
 *   get:
 *     description: 一周性能消耗对比
 *     tags: [性能数据展示]
 *     responses:
 *       200:
 *         description: 成功
 *         schema:
 *           type: object
 */
routerInit.get('/getWeekPV', DataServices.getWeekPV)
export default routerInit
