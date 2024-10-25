import { ArgumentMetadata, BadRequestException, PipeTransform, Injectable } from "@nestjs/common";

@Injectable()
export class ParseIdPipe implements PipeTransform <string, number>{
    transform(value: string, metadata: ArgumentMetadata): number {
        const val = parseInt(value, 10);
        if(isNaN(val)){
            throw new BadRequestException(`id must be a number`);
        }
        if(val <= 0) throw new BadRequestException(`id must be a number greater than 0`);

        return val;
    }
}