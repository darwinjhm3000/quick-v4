import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Name', width: 100 },
  { field: 'location', headerName: 'Localización', width: 100 },
];

export default function DataTable({ data }) {
  const rows = data.map((item, index) => ({
    id: index,
    name: item.name,
    location: item.location,
  }));

  return (
    <div style={{ height: 400, width: '20%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
