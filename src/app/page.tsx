import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
export const dynamic = "force-dynamic"; 

async function Images(){
  const images = await db.query.images.findMany({
    orderBy:  (model,{desc}) => desc(model.id),
  });
  return(
  <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div className="flex w-48 flex-col" key={image.id}>
            <img src={image.url}  alt="image" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    );
}
export default  async function HomePage() {
  
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center"> Please signin above</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
