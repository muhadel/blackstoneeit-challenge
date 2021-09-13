export interface AlertPropsTypes {
  status?: 'error' | 'success' | 'warning' | 'info';
  title?: string;
  message?: string;
  hasCloseBtn?: Boolean;
}
