import { createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from '../../apiService';
import { IUpdateReportArgs } from '../../../common/interfaces/slices/reports/reports.interface';

// Actions
export const getReports = createAsyncThunk('reports/get-reports', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/report`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const updateReport = createAsyncThunk(
  'reports/update-report',
  async (args: IUpdateReportArgs, thunkAPI) => {
    const { reportId, ticketState } = args;
    try {
      const response = await axios.put(`/report/${reportId}`, { ticketState });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
