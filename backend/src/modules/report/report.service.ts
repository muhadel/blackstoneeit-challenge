import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ReportRepository } from './report.repository';
import { IReport, EReportStateChangeable } from '../../types/report';

@Injectable()
export class ReportService {
  constructor(private readonly reportRepository: ReportRepository) {}

  async findAll(): Promise<IReport[]> {
    return this.reportRepository.findAll();
  }

  async updateReport(reportId: string,ticketState: EReportStateChangeable): Promise<IReport> {
    const report = this.reportRepository.findOne(reportId);
    if (!report) {
      throw new HttpException('Report is not exists', HttpStatus.BAD_REQUEST);
    }
    if (report.state === ticketState) {
      throw new HttpException(`Report already has ${report.state} state`,HttpStatus.BAD_REQUEST);
    }
    await this.reportRepository.updateOne(reportId, ticketState);
    return report;
  }
}
