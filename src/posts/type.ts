import { ApiProperty } from '@nestjs/swagger'

export class CreatePostDto {
	@ApiProperty({ description: '博客标题' })
	title: string
	@ApiProperty({ description: '博客详情' })
	content: string
}

export class UpdatePostDto {
	@ApiProperty({ description: '博客标题' })
	title: string
	@ApiProperty({ description: '博客详情' })
	content: string
}
