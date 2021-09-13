import { Controller, Get, Put, Param, Body } from '@nestjs/common';
import { ApiParam, ApiOperation } from '@nestjs/swagger';
import { ReportService } from './report.service';
import { FindOneParams, UpdateReportReqDTO } from './dto';
import { IReport } from '../../types/report';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get()
  @ApiOperation({ summary: 'Get All Reports' })
  findAll(): Promise<IReport[]> {
    return this.reportService.findAll();
  }

  @Put(':reportId')
  @ApiParam({ name: 'id' })
  @ApiOperation({ summary: 'Update report' })
  updateReport(@Param() { reportId }: FindOneParams,@Body() { ticketState }: UpdateReportReqDTO): any {
    return this.reportService.updateReport(reportId, ticketState);
  }
}
