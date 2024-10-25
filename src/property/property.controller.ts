import { Controller, Get, Post, Param, Body, HttpCode, ParseIntPipe,Query, ParseBoolPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';


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

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() body:CreatePropertyDto) {
        return test;
    }
}