import { PartialType } from '@nestjs/mapped-types';
import { CreateErrorCodeDto } from './create-error_code.dto';

export class UpdateErrorCodeDto extends PartialType(CreateErrorCodeDto) {}
