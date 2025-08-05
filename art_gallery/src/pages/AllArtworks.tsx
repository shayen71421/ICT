import { useState } from "react";
import ArtCard from "@/components/ArtCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { artworks } from "@/data/artworks";
import { Search, Filter } from "lucide-react";

const AllArtworks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(artworks.map(artwork => artwork.category)))];

  const filteredArtworks = artworks.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || artwork.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            All <span className="bg-gradient-primary bg-clip-text text-transparent">Artworks</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our complete collection of contemporary masterpieces
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search artworks or artists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedCategory === category 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredArtworks.length} of {artworks.length} artworks
          </p>
        </div>

        {/* Artworks Grid */}
        {filteredArtworks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtworks.map((artwork) => (
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
        ) : (
          <div className="text-center py-16">
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No artworks found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or filters
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllArtworks;