export interface Customer {
  id: string;
  name: string;
  email: string;
  address: string;
  password?: string; // Optional for security, only used during registration
  isActive: boolean;
  isAdmin: boolean;
}
