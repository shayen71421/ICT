import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ArtCard from "@/components/ArtCard";
import { getFeaturedArtworks } from "@/data/artworks";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, Palette, Users, Award } from "lucide-react";

const GalleryHome = () => {
  const featuredArtworks = getFeaturedArtworks();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Discover
            <span className="bg-gradient-gold bg-clip-text text-transparent"> Extraordinary </span>
            Art
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
            Explore a curated collection of contemporary masterpieces from talented artists worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/gallery">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Explore Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/artworks">
              <Button variant="gold" size="xl" className="w-full sm:w-auto">
                View All Artworks
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artworks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Artworks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked selections from our most celebrated contemporary artists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArtworks.map((artwork) => (
            <ArtCard
              key={artwork.id}
              id={artwork.id}
              title={artwork.title}
              artist={artwork.artist}
              year={artwork.year}
              image={artwork.image}
              category={artwork.category}
              featured={artwork.featured}
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/artworks">
            <Button variant="gallery" size="lg">
              View All Artworks
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">500+</h3>
                <p className="text-muted-foreground">Artworks</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4">
                  <Users className="h-8 w-8 text-gallery-dark" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">100+</h3>
                <p className="text-muted-foreground">Artists</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-card hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">50+</h3>
                <p className="text-muted-foreground">Awards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our <span className="bg-gradient-hero bg-clip-text text-transparent">Art Community</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Create your account to save favorites, receive updates, and connect with artists
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                Already a Member?
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryHome;