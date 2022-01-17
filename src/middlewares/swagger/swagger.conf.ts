import path from 'path'
import swaggerJSDoc from 'swagger-jsdoc'
import AddressIp from 'ip'
import { PORT } from '../../config/constant'

const swaggerDefinition = {
    info: {
        // API informations (required)
        title: '数据监控平台', // Title (required)
        version: '1.0.0', // Version (required)
        description: '字节前端训练营进阶班项目Mock.js数据模拟', // Description (optional)
    },
    host: `http://${AddressIp.address()}:${PORT}`, // Host (optional)
    basePath: '/', // Base path (optional)
}

const options = {
    swaggerDefinition,
    apis: [path.join(__dirname, '../../routes/*.ts')], // all api
}

const jsonSpc = swaggerJSDoc(options)
export default jsonSpc
