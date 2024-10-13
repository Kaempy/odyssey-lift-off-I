type TrackModel = {
  id: string;
  title: string;
  authorId: string;
  thumbnail: string;
  length: number;
  modulesCount: number;
};

type AuthorModel = { id: string; name: string; photo: string };

export type { AuthorModel, TrackModel };
