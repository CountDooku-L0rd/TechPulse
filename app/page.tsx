import {TypographyH2} from "@/src/components/ui/TypographyH2";
import Post from "@/src/types/post";
async function getPosts() {
    const res = await fetch('http://localhost:3000/api/posts', {
        cache: 'no-store'
    });

    if (!res.ok) throw new Error('Ошибка');
    return res.json();
}
export default async function Home() {
    const posts = await getPosts();
  return (
      <>
        <TypographyH2 text={'Новости по всем категориям'}/>
        <section>
            {posts.map((post: Post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                </div>
            ))}
        </section>
      </>
  );
}
