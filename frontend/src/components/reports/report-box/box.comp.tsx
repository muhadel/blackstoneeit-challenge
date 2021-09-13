// pkgs:
import React, { useState } from 'react';
import { Box, Text, Button, Grid, GridItem, Tag, Fade, Spinner, Link } from '@chakra-ui/react';
import { AiOutlineBorderlessTable } from 'react-icons/ai';

// utils:
import { useAppDispatch } from '../../../redux/hooks';
import { updateReport } from '../../../redux/slices/reports/reports.actions';
import { EReportState } from '../../../common/interfaces/slices/reports/reports.interface';
// comps:
import { ReportBoxPropsTypes } from '../../../common/interfaces/comps/report-box.interface';

const ReportBox: React.VFC<ReportBoxPropsTypes> = ({ id, type, state, message }) => {
  const dispatch = useAppDispatch();
  const [isBlockBtnLoading, setIsBlockBtnLoading] = useState(false);
  const [isResolveBtnLoading, setIsResolveBtnLoading] = useState(false);
  const handleClick = (ticketState: EReportState) => {
    if (ticketState === EReportState.BLOCKED) setIsBlockBtnLoading(true);
    if (ticketState === EReportState.CLOSED) setIsResolveBtnLoading(true);
    dispatch(updateReport({ reportId: id, ticketState }));
  };
  return (
    <Fade in={true}>
      <Box p={5} shadow="md" borderWidth="1px">
        <Grid templateColumns="repeat(5, 1fr)">
          <GridItem colSpan={4}>
            <div className="m-2" style={{ display: 'flex', lineHeight: 'initial' }}>
              <AiOutlineBorderlessTable style={{ marginRight: '5' }} />
              <Text fontWeight={500} mr={3}>
                ID:
              </Text>
              {id}
            </div>

            <div className="m-2" style={{ display: 'flex', lineHeight: 'initial' }}>
              <AiOutlineBorderlessTable style={{ marginRight: '5' }} />
              <Text fontWeight={500} mr={3}>
                Type:
              </Text>
              <Tag>{type}</Tag>
            </div>

            <div className="m-2" style={{ display: 'flex', lineHeight: 'initial' }}>
              <AiOutlineBorderlessTable style={{ marginRight: '5' }} />
              <Text fontWeight={500} mr={3}>
                State:
              </Text>
              <Tag>{state}</Tag>
            </div>

            <div className="m-2" style={{ display: 'flex', lineHeight: 'initial' }}>
              <AiOutlineBorderlessTable style={{ marginRight: '5' }} />
              <Text fontWeight={500} mr={3}>
                Message:
              </Text>
              {message ? message : <span style={{ color: 'gray', fontWeight: 500 }}>NULL</span>}
            </div>
            <div className="m-2"  style={{ display: 'flex', lineHeight: 'initial' }}>
              <Text as='u' color={'blue.500'}><Link href="#">Details</Link></Text>
            </div>

          </GridItem>
          <GridItem colStart={5} colEnd={6} display={'inherit'}>
            <Button
              onClick={() => handleClick(EReportState.BLOCKED)}
              mb={2}
              float="right"
              colorScheme="red"
              isLoading={isBlockBtnLoading}
              loadingText="Loading"
              spinner={<Spinner size="sm" />}
            >
              Block
            </Button>
            <Button
              float="right"
              colorScheme="blue"
              onClick={() => handleClick(EReportState.CLOSED)}
              isLoading={isResolveBtnLoading}
              loadingText="Loading"
              spinner={<Spinner size="sm" />}
            >
              Resolve
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </Fade>
  );
};

export default ReportBox;
