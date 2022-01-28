import Mock from "mockjs";

export const getGrade = (garde: number) => {
    if (garde === 1) {
        const score = Mock.mock({
            "number|70-100": 1
        })
        return score.number
    } else if (garde === 2) {
        const score = Mock.mock({
            "number|40-70": 1
        })
        return score.number
    } else {
        const score = Mock.mock({
            "number|1-40": 1
        })
        return score.number
    }
}
