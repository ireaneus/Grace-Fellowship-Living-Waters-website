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
      coverImage: "/images/albums/openbible-read.jpg",
      description: "A study through First Corinthians"
    },
    {
        id: "1TIM",
        title: "1 Timothy",
        coverImage: "/images/albums/openbible-glasses.jpg",
        description: "A study through First Timothy"
      },
    {
      id: "Acts",
      title: "Book of Acts",
      coverImage: "/images/albums/openbible-leaves.jpg",
      description: "A study through the Book of Acts - Writer:Luke"
    },
    {
        id: "BibleSurvey",
        title: "Bible Survey",
        coverImage: "/images/albums/bible-glory.jpg",
        description: "A Bible Survey"
      },
      {
        id: "Daniel",
        title: "Book of Daniel",
        coverImage: "/images/albums/revisedbible.jpg",
        description: "A study through the Book of Daniel"
      }
  ];