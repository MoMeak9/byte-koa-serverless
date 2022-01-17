import {Context} from "koa";

export default class UserServices {
    /**
     * 模拟数据
     * @param {Context} ctx
     * @memberof UserController
     */

    public static async login(ctx: Context) {
        ctx.status = 200
        ctx.body = {
            code: 1,
            data: {
                id: 'test'
            }
        }
    }
}
