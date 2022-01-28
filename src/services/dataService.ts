import {Context} from "koa";
import Mock from "mockjs";
import {getGrade} from "../utils/getGrade";

export default class DataServices {
    /**
     * 模拟数据
     * @param {Context} ctx
     * @memberof UserController
     */

    public static async getPerformanceDataOfTime(ctx: Context) {
        let res = Mock.mock({
            timePerformanceList: [
                {
                    label: 'First Contentful Paint',
                    "time|1-3.1": 1,
                    "compare|0.1": 1,
                },
                {
                    label: 'Speed Index',
                    "time|0-6.1": 1,
                    "compare|0.1": 1,
                },
                {
                    label: 'Largest Contentful Paint',
                    "time|1-5.1": 1,
                    "compare|0.1": 1,
                },
                {
                    label: 'Time to interactive',
                    "time|0-8.1": 1,
                    "compare|0.1": 1,
                },

                {
                    label: 'Total Blocking Time',
                    "time|0-700": 1,
                    "compare|0.1": 1,
                },
                {
                    label: 'Cumulative Layout Shift',
                    "time|0-3.1": 1,
                    "compare|0.1": 1,
                }
            ],
        })

        for (const resKey in res.timePerformanceList) {
            let item = res.timePerformanceList[resKey]
            if (item.time > 10) {
                if (item.time >= 0 && item.time <= 200) {
                    item.score = getGrade(1)
                } else if (item.time >= 200 && item.time <= 600) {
                    item.score = getGrade(2)
                } else {
                    item.score = getGrade(3)
                }
            } else {
                if (item.time >= 0 && item.time <= 3) {
                    item.score = getGrade(1)
                } else if (item.time > 3 && item.time < 5) {
                    item.score = getGrade(2)
                } else {
                    item.score = getGrade(3)
                }
            }
        }

        const item = res.timePerformanceList
        res.totalTime = ~~(item[0].score * 0.1 + item[1].score * 0.1 + item[2].score * 0.25 + item[3].score * 0.1 + item[4].score * 0.3 + item[5].score * 0.15)

        ctx.body = {
            code: 1,
            data: {
                ...res
            }
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
