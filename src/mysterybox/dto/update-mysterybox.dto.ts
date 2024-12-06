import { PartialType } from '@nestjs/mapped-types';
import { CreateMysteryboxDto } from './create-mysterybox.dto';

export class UpdateMysteryboxDto extends PartialType(CreateMysteryboxDto) {}
