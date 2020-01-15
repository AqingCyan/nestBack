import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@Controller()
@ApiTags('根结点')
export class AppController {

	@Get()
	getHello(): string {
		return 'index'
	}
}
