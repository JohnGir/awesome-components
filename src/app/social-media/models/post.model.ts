export class Post {
  id: number;
  userId: number;
  title: string;
  createdDate: string;
  imageUrl: string;
  content: string;
  comments: Comment[];
}
