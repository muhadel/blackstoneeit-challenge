import { IsEnum, IsString, IsDefined } from 'class-validator';
import { EReportStateChangeable } from '../../../types/report';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateReportReqDTO {
  @IsDefined()
  @IsString()
  @ApiProperty()
  @IsEnum(EReportStateChangeable, {message: 'Please choose one of [BLOCKED, CLOSED]'})
  ticketState: EReportStateChangeable;
}
