export interface StateTypes {
  data: null | IReport[];
  stage: `idle` | `loading` | `fulfilled` | `rejected`;
  isFetching:Boolean;
  failureMsg: null | string;
}


export interface InitialStateTypes {
  reports: StateTypes;
  updateReports: StateTypes;
}

export enum EReportState {
  OPEN = 'OPEN',
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
  state: EReportState;
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


export interface IUpdateReportArgs {
  reportId: string;
  ticketState: EReportState;
}