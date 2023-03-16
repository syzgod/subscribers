import React, { useEffect, useState } from 'react';
import { Pagination, Box } from '@mui/material';
import { fetchSubscribersData } from './../services/index';

const ITEMS_PER_PAGE = 7;

const AppPagination = ({ setData }: any) => {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: ITEMS_PER_PAGE,
  });

  useEffect(() => {
    fetchSubscribersData(pagination.from, pagination.to).then((response) => {
      setPagination({
        ...pagination,
        count: Math.ceil(response.count / ITEMS_PER_PAGE),
      });
      setData(response.data);
    });
  }, [pagination.from, pagination.to]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    const from = (page - 1) * ITEMS_PER_PAGE;
    const to = (page - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE;

    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Box
      justifyContent={'center'}
      alignItems={'center'}
      display={'flex'}
      sx={{ margin: '20px 0px' }}
    >
      <Pagination
        count={pagination.count}
        onChange={handlePageChange}
        color='primary'
      />
    </Box>
  );
};

export default AppPagination;
