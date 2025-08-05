// Import all artwork images
import art1 from "@/assets/art1.jpg";
import art2 from "@/assets/art2.jpg";
import art3 from "@/assets/art3.jpg";
import art4 from "@/assets/art4.jpg";
import art5 from "@/assets/art5.jpg";

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: string;
  image: string;
  category: string;
  description: string;
  featured?: boolean;
  similarArtworks?: string[];
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Purple Dreams",
    artist: "Elena Rodriguez",
    year: "2024",
    image: art1,
    category: "Abstract",
    description: "A mesmerizing abstract piece that explores the depths of color and emotion through flowing purple and gold hues. This contemporary work invites viewers to lose themselves in its dynamic composition and vibrant energy.",
    featured: true,
    similarArtworks: ["2", "5"]
  },
  {
    id: "2",
    title: "Mountain Serenity",
    artist: "David Chen",
    year: "2023",
    image: art2,
    category: "Landscape",
    description: "A stunning landscape that captures the majestic beauty of mountains at sunset. The warm colors and peaceful composition evoke a sense of tranquility and connection with nature.",
    featured: true,
    similarArtworks: ["1", "3"]
  },
  {
    id: "3",
    title: "Eternal Form",
    artist: "Maria Volkov",
    year: "2024",
    image: art3,
    category: "Sculpture",
    description: "An elegant minimalist sculpture that embodies the essence of contemporary art. Carved from pristine white marble, this piece represents the timeless beauty of form and space.",
    featured: true,
    similarArtworks: ["2", "4"]
  },
  {
    id: "4",
    title: "Expressive Soul",
    artist: "James Morrison",
    year: "2023",
    image: art4,
    category: "Portrait",
    description: "A bold expressionist portrait that captures the raw emotion and vitality of the human spirit. The dynamic brushstrokes and vibrant colors create a powerful visual narrative.",
    featured: false,
    similarArtworks: ["3", "5"]
  },
  {
    id: "5",
    title: "Geometric Harmony",
    artist: "Yuki Tanaka",
    year: "2024",
    image: art5,
    category: "Abstract",
    description: "A sophisticated geometric abstract work that explores the relationship between color, form, and space. The rich blues and purples create a sense of depth and movement.",
    featured: false,
    similarArtworks: ["1", "4"]
  }
];

export const getFeaturedArtworks = () => artworks.filter(artwork => artwork.featured);

export const getArtworkById = (id: string) => artworks.find(artwork => artwork.id === id);

export const getSimilarArtworks = (artwork: Artwork) => {
  if (!artwork.similarArtworks) return [];
  return artwork.similarArtworks
    .map(id => getArtworkById(id))
    .filter(Boolean) as Artwork[];
};

export const getArtworksByCategory = (category: string) => 
  artworks.filter(artwork => artwork.category === category);