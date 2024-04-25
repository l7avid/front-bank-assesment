import { Product } from '../models/product';
import { generateRandomDateFromToday } from './random-date-generator';
import { generateDateOneYearFurther } from './restructure-date-generator';

export function generateProduct(id: string, logo: string, name: string, description: string): Product {
  const releaseDate = generateRandomDateFromToday();
  const restructureDate = generateDateOneYearFurther(releaseDate);

  return { id, logo, name, description, releaseDate, restructureDate };
}