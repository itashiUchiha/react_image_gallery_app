import Link from "next/link";
import { db } from "~/server/db";
export const dynamic = "force-dynamic"; 

const mockUrls = [
  "https://utfs.io/f/db90a6ff-61e7-448c-b900-f4c3b0e6791f-rer75u.jpg",
  "https://utfs.io/f/2abb2fc9-cbe3-4046-9310-c4ca4a56ac5c-k67s5i.jpg",
  "https://utfs.io/f/e9f738f2-ec61-49b6-bdde-82f293c12bec-6gw3xu.jpg",
  "https://utfs.io/f/b882eeb5-fc46-42d1-9dc7-6bffe8ea1ad0-usx065.jpg",
  "https://utfs.io/f/ab7bc177-5f94-43e0-af47-70ce357a89fd-gqlicj.jpg",
];
const mockimages = mockUrls.map((url,index) => ({ 
  id: index + 1,
  url 
}));
export default  async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post)=>(
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockimages,...mockimages,...mockimages].map((image,index) => (
          <div className="w-48" key={image.id + index}>
            <img src={image.url}  alt="image" />
          </div>
        ))}

      </div>
      hello  gallery in progress
    </main>
  );
}
