import {Context} from "koa";
import Mock from "mockjs"

export default class UserServices {
    /**
     * 模拟数据
     * @param {Context} ctx
     * @memberof UserController
     */

    public static async login(ctx: Context) {
        ctx.body = {
            code: 1,
            data: Mock.mock({
                userName: '@name',
                date:'@date("yyyy-MM-dd")'
            })
        }
    }
}
