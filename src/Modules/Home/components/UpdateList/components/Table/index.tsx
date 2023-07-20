import React from 'react';
import { filesize } from 'filesize';

import IUpdate from '../../../../../../models/IUpdate';

import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  DownloadIcon,
} from './styles';

const TableComponent = ({ updates }: { updates: IUpdate[] }): JSX.Element => {
  const downloadUpdate = (url: string) => {
    const downloadLink = document.createElement('a');
    // downloadLink.href = url;
    downloadLink.href = url.replace('http', 'https');
    downloadLink.target = '_blank';
    downloadLink.rel = 'noopener noreferrer';
    downloadLink.click();
  };

  return (
    <Container>
      <TableContainer>
        <Table stickyHeader aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>VERSION</TableCell>
              <TableCell align='center'>SIZE</TableCell>
              <TableCell align='center' width={'1%'}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {updates.map((update) => (
              <TableRow key={update.version}>
                <TableCell align='center'>{update.version}</TableCell>
                <TableCell align='center'>
                  {`${filesize(update.size)}`}
                </TableCell>
                <TableCell align='center'>
                  <Button onClick={() => downloadUpdate(update.url)}>
                    <DownloadIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableComponent;
