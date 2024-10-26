import { Controller, Get, Post, Param, Body, Delete, HttpCode, ParseIntPipe, Query, ParseBoolPipe, UsePipes, ValidationPipe, Patch, Headers } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';
import { updatePropertyDto } from './dto/updateProperty.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller('property')
export class PropertyController {

    constructor(private propertyService: PropertyService) { }

    @Get()
    findAll( @Query() paginationDto: PaginationDto) {
        return this.propertyService.findAll(paginationDto);
    }



    // @Get(":id/:slug")
    // findOne(@Param("id") id: string, @Param("slug") slug: string){
    //     return "property with id " + id + " and slug " + slug;
    // }

    @Get(':id')
    findOne(@Param("id", ParseIntPipe) id) {
        return this.propertyService.findOne(id);
    }

    @Post()
    // @UsePipes(new ZodValidationPipe(createPropertySchema))
    create(@Body() dto: CreatePropertyDto) {
        return this.propertyService.create(dto);
    }

    @Patch(":id")

    update(
        @Param('id', ParseIdPipe) id,
        @Body() body: updatePropertyDto,


    ) {
        return this.propertyService.update(id, body);
    }

    @Delete(":id")

    delete(
        @Param('id', ParseIdPipe) id,
        @Body() body: updatePropertyDto,


    ) {
        return this.propertyService.delete(id);
    }
}
