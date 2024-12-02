import { sermons, type Sermon } from '../content/sermons/sermons';
import { albums, type Album } from '../content/sermons/albums';

export function getUniqueAlbums(): string[] {
  return [...new Set(sermons.map(sermon => sermon.album))].sort();
}

export function getSermonsByAlbum(album: string): Sermon[] {
  return sermons.filter(sermon => sermon.album === album);
}

export function getSermonBySlug(slug: string): Sermon | undefined {
  return sermons.find(sermon => sermon.name.replace('.mp3', '') === slug);
}

export function getPdfUrl(sermon: Sermon): string | null {
  if (!sermon.pdf) return null;
  return `/${sermon.path}${sermon.pdf}`;
}

export function getAudioUrl(sermon: Sermon): string {
  return `/${sermon.path}${sermon.name}`;
}

export function getImageUrl(sermon: Sermon): string | null {
  if (!sermon.jpg) return null;
  return `/${sermon.path}${sermon.jpg}`;
}

export function getAlbumInfo(albumId: string): Album | undefined {
  return albums.find(album => album.id === albumId);
}

export function getAllAlbums(): Album[] {
  return albums;
}