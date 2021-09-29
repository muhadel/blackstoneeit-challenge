import { createSlice } from '@reduxjs/toolkit';
import { getReports, updateReport } from './reports.actions';
import {
  InitialStateTypes,
  IReport,
  EReportState,
} from '../../../common/interfaces/slices/reports/reports.interface';

const initialState: InitialStateTypes = {
  reports: {
    data: null,
    stage: `idle`,
    isFetching: true,
    failureMsg: null,
  },
  updateReports: {
    data: null,
    stage: `idle`,
    isFetching: true,
    failureMsg: null,
  },
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get-reports
    builder.addCase(getReports.pending, (state, action) => {
      state.reports.stage = 'loading';
      state.reports.isFetching = true;
    });
    builder.addCase(getReports.fulfilled, (state, action) => {
      const data: IReport[] = action.payload;
      const filteredData = data.filter((report) => report.state === EReportState.OPEN);
      state.reports.stage = 'fulfilled';
      state.reports.isFetching = false;
      state.reports.data = filteredData;
    });
    builder.addCase(getReports.rejected, (state, action) => {
      state.reports.isFetching = false;
      state.reports.stage = 'rejected';
      state.reports.failureMsg = "Can't fetch data";
    });
    // update-report
    builder.addCase(updateReport.pending, (state, action) => {
      state.updateReports.stage = 'loading';
      state.updateReports.isFetching = true;
    });

    builder.addCase(updateReport.fulfilled, (state, { meta, payload }) => {
      const { reportId } = meta.arg;
      const filteredData: any = state.reports.data?.filter((report) => report.id !== reportId);
      // update state
      state.updateReports.stage = 'fulfilled';
      state.updateReports.isFetching = false;
      state.reports.data = filteredData;
    });
    builder.addCase(updateReport.rejected, (state, action) => {
      const { message }: any = action.payload;
      state.updateReports.isFetching = false;
      state.updateReports.stage = 'rejected';
      state.updateReports.failureMsg = message;
    });
  },
});
export default reportsSlice.reducer;
