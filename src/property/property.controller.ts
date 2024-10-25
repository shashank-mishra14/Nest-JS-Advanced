import { Controller, Get, Post, Param, Body, HttpCode, ParseIntPipe,Query, ParseBoolPipe } from '@nestjs/common';


@Controller('property')
export class PropertyController {
    @Get()
    findAll() {
        return "all properties";
    }



    // @Get(":id/:slug")
    // findOne(@Param("id") id: string, @Param("slug") slug: string){
    //     return "property with id " + id + " and slug " + slug;
    // }

    @Get(':id')
    findOne(@Param("id", ParseIntPipe) id, @Query('test', ParseBoolPipe) test) {
        console.log(typeof id);
        console.log(typeof test);
        return id;
    }

    @Post("hehe")
    @HttpCode(202)
    create(@Body('test') test) {
        return test;
    }
}
