import * as fs from 'fs';
import { IReport, EReportStateChangeable } from '../../types/report';
const DB_PATH = 'src/data/reports.json';

export class ReportRepository {
  findAll(): IReport[] {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    const parsed = JSON.parse(data);
    return parsed['elements'];
  }

  findOne(reportId: string): IReport {
    const reports = this.findAll();
    const report = reports.find((report) => report.id === reportId);
    return report;
  }

  findIndex(reportId: string): number {
    const reports = this.findAll();
    return reports.findIndex((report) => report.id === reportId);
  }

  updateOne(reportId: string, state: EReportStateChangeable) {
    return new Promise((resolve, reject) => {
      // read the file
      fs.readFile(DB_PATH, 'utf8', (err, data) => {
        if (err) {
          console.log(`Error reading file from disk: ${err}`);
        } else {
          // parse JSON string to JSON object
          const result: IReport[] = JSON.parse(data);
          const reportIdx = this.findIndex(reportId);
          result['elements'][reportIdx].state = state;

          // write new data back to the file
          fs.writeFile(DB_PATH, JSON.stringify(result, null, 4), (err) => {
            if (err) {
              console.log(`Error writing file: ${err}`);
              reject();
            } else {
              resolve(result['elements'][reportIdx]);
            }
          });
        }
      });
    });
  }
}
