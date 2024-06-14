import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { envs } from './config';
import { Logger, RequestMethod, ValidationPipe } from "@nestjs/common";
import { RpcCustomExceptionFilter } from "./common";


async function bootstrap() {

	const logger = new Logger('Main-Gateway')


	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api',{
		exclude: [{
			path:'',
			method: RequestMethod.GET // excluse el path del health-check de verse obligado a usar /api
		}]
	})

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true
		}
	));

	app.useGlobalFilters(new RpcCustomExceptionFilter)

	
	await app.listen(envs.port)

	logger.log(`Gateway Running on ${envs.port}`)
	console.log('Hola mundo - segundo cambio')

}
bootstrap()