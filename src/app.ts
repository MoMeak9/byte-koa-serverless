import Koa from 'koa'
// import Cors from 'koa2-cors'
import BodyParser from 'koa-bodyparser'
import AddressIP from 'ip'
// import KoaBody from 'koa-body'
// import { corsHandler } from './middlewares/cors'
import User from './routes/user'
import Swagger from './routes/swagger'
import {koaSwagger} from 'koa2-swagger-ui'
import {PORT} from './config/constant'

const app = new Koa()


// ctx.body
app.use(BodyParser())


// app.use(Cors(corsHandler))

// 静态资源

//swagger
app.use(
    koaSwagger({
        routePrefix: '/swagger',
        swaggerOptions: {
            url: '/docs',
        },
    })
)

// 路由
app.use(User.routes()).use(User.allowedMethods())
app.use(Swagger.routes()).use(Swagger.allowedMethods())

app.listen(PORT, () => {
    console.log(`http://${AddressIP.address()}:${PORT} 已启动`)
})
