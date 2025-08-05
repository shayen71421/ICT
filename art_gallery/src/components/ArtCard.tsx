import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArtCardProps {
  id: string;
  title: string;
  artist: string;
  year: string;
  image: string;
  category: string;
  featured?: boolean;
}

const ArtCard = ({ id, title, artist, year, image, category, featured }: ArtCardProps) => {
  return (
    <Link to={`/artwork/${id}`} className="group block">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-elegant hover:scale-105 bg-card border-border">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {featured && (
            <Badge className="absolute top-3 left-3 bg-gradient-gold text-gallery-dark font-medium">
              Featured
            </Badge>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-1">by {artist}</p>
          <div className="flex justify-between items-center mt-3">
            <p className="text-sm text-muted-foreground">{year}</p>
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArtCard;