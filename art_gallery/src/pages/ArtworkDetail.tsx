import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ArtCard from "@/components/ArtCard";
import { getArtworkById, getSimilarArtworks } from "@/data/artworks";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = id ? getArtworkById(id) : null;

  if (!artwork) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Artwork Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The artwork you're looking for doesn't exist.
          </p>
          <Link to="/artworks">
            <Button variant="gallery">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Artworks
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const similarArtworks = getSimilarArtworks(artwork);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/artworks">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to All Artworks
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-auto rounded-lg shadow-elegant"
            />
            {artwork.featured && (
              <Badge className="absolute top-4 left-4 bg-gradient-gold text-gallery-dark font-medium">
                Featured Artwork
              </Badge>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {artwork.title}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-lg text-muted-foreground">
                  <User className="h-5 w-5" />
                  <span>by {artwork.artist}</span>
                </div>
                <div className="flex items-center gap-2 text-lg text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <span>{artwork.year}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <Tag className="h-4 w-4" />
                <Badge variant="secondary" className="text-sm">
                  {artwork.category}
                </Badge>
              </div>
            </div>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">About This Artwork</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {artwork.description}
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex-1">
                Add to Favorites
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Share Artwork
              </Button>
            </div>
          </div>
        </div>

        {/* Similar Artworks */}
        {similarArtworks.length > 0 && (
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Similar <span className="bg-gradient-primary bg-clip-text text-transparent">Artworks</span>
              </h2>
              <p className="text-muted-foreground">
                Discover more pieces from the same category
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarArtworks.map((similarArtwork) => (
                <ArtCard
                  key={similarArtwork.id}
                  id={similarArtwork.id}
                  title={similarArtwork.title}
                  artist={similarArtwork.artist}
                  year={similarArtwork.year}
                  image={similarArtwork.image}
                  category={similarArtwork.category}
                  featured={similarArtwork.featured}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/artworks">
                <Button variant="gallery" size="lg">
                  View All Artworks
                </Button>
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ArtworkDetail;