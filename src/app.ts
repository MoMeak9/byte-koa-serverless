import Koa from 'koa'
// import Cors from 'koa2-cors'
import BodyParser from 'koa-bodyparser'
import AddressIP from 'ip'
// import KoaBody from 'koa-body'
// import { corsHandler } from './middlewares/cors'
import {koaSwagger} from 'koa2-swagger-ui'
import {PORT} from './config/constant'

const app = new Koa()


// ctx.body
app.use(BodyParser())


// app.use(Cors(corsHandler))

// 静态资源
app.use(
    koaSwagger({
        routePrefix: '/swagger',
        swaggerOptions: {
            url: '/docs',
        },
    })
)

app.listen(PORT, () => {
    console.log(`http://${AddressIP.address()}:${PORT} 已启动`)
})
