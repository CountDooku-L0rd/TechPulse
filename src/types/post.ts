export default interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    category: string;
    imageUrl: string | null;
    createdAt: string;
}