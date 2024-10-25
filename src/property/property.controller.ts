import { Controller, Get, Post, Param, Body, HttpCode } from '@nestjs/common';


@Controller('property')
export class PropertyController {
    @Get()
    findAll() {
        return "all properties";
    }

    @Get(":id/:slug")
    findOne(@Param("id") id: string, @Param("slug") slug: string){
        return "property with id " + id + " and slug " + slug;
    }

    @Post("hehe")
    @HttpCode(202)
    create(@Body('test') test) {
        return test;
    }
}
