import {Context} from "koa";
import Mock from "mockjs";

export default class DataServices {
    /**
     * 模拟数据
     * @param {Context} ctx
     * @memberof UserController
     */

    public static async getPerformanceDataOfTime(ctx: Context) {
        ctx.body = {
            code: 1,
            data: Mock.mock({
                timePerformanceList: [
                    {
                        label: 'First Contentful Paint',
                        "time|1-2.1": 1,
                        "compare|0.1": 1,
                    },
                    {
                        label: 'Time to interactive',
                        "time|1-3": 1,
                        "compare|0.1": 1,
                    },
                    {
                        label: 'Speed Index',
                        "time|100-400": 1,
                        "compare|0.1": 1,
                    },
                    {
                        label: 'Total Blocking Time',
                        "time|1-2.1": 1,
                        "compare|0.1": 1,
                    },
                    {
                        label: 'Largest Contentful Paint',
                        "time|1-4.1": 1,
                        "compare|0.1": 1,
                    },
                    {
                        label: 'Cumulative Layout Shift',
                        "time|0-2.1": 1,
                        "compare|0.1": 1,
                    }
                ],
                "totalTime|90-100": 1
            })
        }
    }

    public static async getWeekPV(ctx: Context) {
        ctx.body = {
            code: 1,
            data: Mock.mock({
                "lastWeekData|7": [
                    function () {
                        return ~~(Math.random() * 10 + 90)
                    }
                ],
                "thisWeekData|7": [
                    function () {
                        return ~~(Math.random() * 10 + 90)
                    }
                ],
                "WeekTimes|1": function () {
                    let category = [];
                    let dottedBase = +new Date();
                    for (let i = 7; i > 0; i--) {
                        let date = new Date((dottedBase -= 1000 * 3600 * 24));
                        category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-"));
                    }
                    return category;
                }
            })
        }
    }
}
