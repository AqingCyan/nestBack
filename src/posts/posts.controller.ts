import { Controller, Get, Post } from '@nestjs/common'
import { ApiTags, ApiOperation } from '@nestjs/swagger'

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
	@Get()
	@ApiOperation({ summary: '显示博客列表' })
	index() {
		return [
			{
				id: 1,
			},
		]
	}

  @Post()
  @ApiOperation({ summary: '创建博客' })
	create() {
		return {
			success: true,
		}
	}

  @Get(':id')
  @ApiOperation({ summary: '获取指定博客' })
	detail() {
		return {
			id: 1,
			title: 'aaaaa',
		}
	}
}
