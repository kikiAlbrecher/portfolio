export interface LenormandCard {
  id: number;
  name: string;
  keywords: string[];
  image?: string;
  position?: { x: number; y: number };
  zodiacInfluence?: string[];
}