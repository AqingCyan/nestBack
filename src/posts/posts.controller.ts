import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common'
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { CreatePostDto, UpdatePostDto } from './type'

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
	create(@Body() body: CreatePostDto) {
		return {
			body,
		}
	}

	@Get(':id')
	@ApiOperation({ summary: '获取指定博客详情' })
	detail(@Param('id') id: string) {
		return {
			id,
			title: 'aaaaa',
		}
	}

	@Put(':id')
	@ApiOperation({ summary: '编辑博客' })
	update(@Param('id') id: string, @Body() body: UpdatePostDto) {
		return {
			success: true,
		}
	}

	@Delete(':id')
	@ApiOperation({ summary: '删除指定博客' })
	remove(@Param('id') id: string) {
		return {
			success: true,
		}
	}
}
