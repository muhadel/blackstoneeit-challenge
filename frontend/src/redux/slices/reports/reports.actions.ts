import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUpdateReportArgs } from '../../../common/interfaces/slices/reports/reports.interface'

const BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

// Actions
export const getReports = createAsyncThunk('reports/get-reports', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/report`);
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
      const response = await axios.put(`${BASE_URL}/report/${reportId}`, { ticketState });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
