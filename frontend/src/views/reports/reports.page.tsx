// pkgs:
import React, { useEffect } from 'react';
import { Stack, Heading, Container, Spinner, Center, useToast } from '@chakra-ui/react';
// comps:
import ReportBox from '../../components/reports/report-box/box.comp';
import AlertMessage from '../../components/distributed/alert-message/alert-message';

// utils:
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getReports } from '../../redux/slices/reports/reports.actions';
import './style.sass';

// component>>>
const ReportsPage = () => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const { data, failureMsg, isFetching } = useAppSelector((state) => state.ReportsSlice.reports);
  const updateReportsSlice = useAppSelector((state) => state.ReportsSlice.updateReports);
  useEffect(() => {
    dispatch(getReports());
  }, [dispatch]);
  useEffect(() => {
    if (updateReportsSlice.stage === 'fulfilled') {
      toast({
        title: 'Report status has been changed successfully!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } else if (updateReportsSlice.stage === 'rejected') {
      toast({
        title: updateReportsSlice.failureMsg,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  }, [updateReportsSlice.stage, toast, updateReportsSlice.failureMsg]);
  return (
    <main className="page reports-page">
      <Heading fontWeight={500} ml={4} mb={3}>
        Reports
      </Heading>
      <Container maxWidth={'100%'}>
        <Stack spacing={8}>
          {isFetching && (
            <Center h={600}>
              <Spinner size="lg" />
            </Center>
          )}
          {!isFetching && failureMsg && <AlertMessage />}
          {!isFetching && (
            <>
              {data?.map(({ id, source, payload, state }) => (
                <ReportBox
                  key={id}
                  id={id}
                  type={source}
                  state={state}
                  message={payload?.message}
                />
              ))}
              {data && data.length === 0 && <div>No data found!</div>}
            </>
          )}
        </Stack>
      </Container>
    </main>
  );
};

export default ReportsPage;
