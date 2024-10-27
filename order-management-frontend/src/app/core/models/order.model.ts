export interface Order {
  id: string;
  customer: string;
  products: string[];
  total: number;
  isActive: boolean;
}
