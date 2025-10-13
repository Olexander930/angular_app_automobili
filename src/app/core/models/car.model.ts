export interface Automobil {
  id: number;
  brand: string;
  model: string;
  year: number;
  engine: string;
  transmission: string;
  fuelConsumption: string;
  color: string;
  price: number;
  imageUrl: string;
  isAvailable: boolean;
  discountPrice?: number;
}
