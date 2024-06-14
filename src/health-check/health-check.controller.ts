import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthCheckController {

	@Get()
	healcheck(){
		return 'Client Gateway is up and RUNING!'
	}
}
