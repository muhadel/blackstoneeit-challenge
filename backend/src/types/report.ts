export enum EReportState {
  OPEN = 'OPEN',
  BLOCKED = 'BLOCKED',
  CLOSED = 'CLOSED',
}

export enum EReportStateChangeable {
  BLOCKED = 'BLOCKED',
  CLOSED = 'CLOSED',
}
export interface IReport {
  id: string;
  source: string;
  sourceIdentityId: string;
  reference: {
    referenceId: string;
    referenceType: string;
  };
  state: EReportState | EReportStateChangeable;
  payload: {
    source: string;
    reportType: string;
    message: string | null;
    reportId: string;
    referenceResourceId: string;
    referenceResourceType: string;
  };
  created: Date;
}
