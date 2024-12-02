import { sermons, type Sermon } from '../content/sermons/sermons';

export function getUniqueAlbums(): string[] {
  return [...new Set(sermons.map(sermon => sermon.album))];
}

export function getSermonsByAlbum(album: string): Sermon[] {
  return sermons.filter(sermon => sermon.album === album);
}

export function getSermonBySlug(slug: string): Sermon | undefined {
  return sermons.find(sermon => sermon.name.replace('.mp3', '') === slug);
}