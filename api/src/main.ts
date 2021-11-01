import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import * as config from 'config'
import * as sqlite3 from 'sqlite3'
import * as fs from 'fs'
import * as path from 'path'
const dbConfig = config.get('db')


function createDatabase() {
  const databaseFolder = path.join(__dirname, '..', 'database')
  console.log(databaseFolder)
  if (!fs.existsSync(databaseFolder)){
    console.info('Criando pasta database')
    fs.mkdirSync(databaseFolder)
  }
  const dbPath = path.join(__dirname, '..', 'database', dbConfig.storage)
  console.info(`Verificando necessidade de criar DB: ${dbPath}`)
  new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE)
}

async function bootstrap() {
  createDatabase()
  const serverConfig = config.get('server')
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api/v1')
  const port = process.env.PORT || serverConfig.port
  app.enableCors()
  if (process.env.NODE_ENV !== 'production') {
    const APP_VERSION = process.env.npm_package_version
    const options = new DocumentBuilder().setTitle('Crud - Pessoa').setVersion(APP_VERSION).build()
    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('api-docs', app, document, {
      swaggerOptions: {
        tagsSorter: 'alpha',
        operationsSorter: 'alpha',
      },
    })
  }
  await app.listen(port)
}
bootstrap()
