import { IsNumber, IsString, IsDefined } from 'class-validator';

export class FindOneParams {
  @IsDefined()
  @IsString()
  reportId: string;
}
