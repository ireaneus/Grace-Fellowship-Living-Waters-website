export interface Album {
    id: string;
    title: string;
    coverImage: string;
    description?: string;
  }
  
  export const albums: Album[] = [
    {
      id: "1Corinthians",
      title: "1 Corinthians",
      coverImage: "/images/albums/1corinthians.jpg",
      description: "A study through First Corinthians"
    },
    {
      id: "2TIM",
      title: "2 Timothy",
      coverImage: "/images/albums/2timothy.jpg",
      description: "A study through Second Timothy"
    }
  ];