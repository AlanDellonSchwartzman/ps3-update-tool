import styled from '@emotion/styled';
import {
  Box,
  Table as T,
  TableBody as TB,
  TableCell as TC,
  TableContainer as TCO,
  TableHead as TH,
  TableRow as TR,
} from '@mui/material';
import { Download } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 85%;
  padding-bottom: 5px;
`;

export const Button = styled(LoadingButton)`
  :disabled {
    cursor: progress;
  }
`;
Button.defaultProps = {
  color: 'secondary',
};

export const DownloadIcon = styled(Download)``;

export const Table = styled(T)``;
Table.defaultProps = {};

export const TableBody = styled(TB)``;
TableBody.defaultProps = {};

export const TableCell = styled(TC)``;
TableCell.defaultProps = {};

export const TableContainer = styled(TCO)``;
TableContainer.defaultProps = {};

export const TableHead = styled(TH)`

th {
    padding-bottom: 0;
  }
`;
TableHead.defaultProps = {};

export const TableRow = styled(TR)``;
TableRow.defaultProps = {
  sx: { '&:last-child td, &:last-child th': { border: 0 } },
};
