import { Controller, Get, Post, Param, Body, HttpCode, ParseIntPipe, Query, ParseBoolPipe, UsePipes, ValidationPipe, Patch, Headers } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {

    constructor(private propertyService: PropertyService) {}

    @Get()
    findAll() {
        return this.propertyService.findAll();
    }



    // @Get(":id/:slug")
    // findOne(@Param("id") id: string, @Param("slug") slug: string){
    //     return "property with id " + id + " and slug " + slug;
    // }

    @Get(':id')
    findOne(@Param("id", ParseIntPipe) id, @Query('test', ParseBoolPipe) test) {
        console.log(typeof id)
        console.log(typeof test);;
        return this.propertyService.findOne(id);
    }

    @Post()
    @UsePipes(new ZodValidationPipe(createPropertySchema))
    create(@Body() body: CreatePropertyZodDto) {
        return this.propertyService.create();
    }

    @Patch(":id")

    update(
        @Param('id', ParseIdPipe) id,
        @Body() body: CreatePropertyDto,
        @RequestHeader(new ValidationPipe({whitelist:true, validateCustomDecorators:true})) header:HeadersDto 
    ) {
        return this.propertyService.update();
    }
}
