export interface Subscribers {
  name: string;
  country: string;
  city: string;
  address: string;
  avatar: string;
  id: string;
  accounts: Account[];
  calls: Account[];
}

interface Account {
  created: string;
  name: string;
  balance: number;
  id: string;
  subscriberId: string;
}

export interface ListResponse<T> {
  data: T[];
  page: number;
  limit: string;
  totalPages: number;
  totalItems: number;
  isSuccess: boolean;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  error: Error;
}
