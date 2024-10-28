export interface Customer {
  id: string;
  name: string;
  email: string;
  address: string;
  password?: string;
  isActive: boolean;
  isAdmin: boolean;
}
