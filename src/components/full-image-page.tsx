import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImageById } from "~/server/queries";
import { Button } from "./ui/button";

export  default async function FullImageView(props:{id:number}) {
  const image =  await getImageById(props.id);
  const uploaderInfo= await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex w-full h-full ">
        <div className="flex flex-col items-center justify-center">
            <img src={image.url} className="object-contain flex-shrink overflow-hidden"/>
        </div>
        <div className="flex flex-col  flex-shrink-0 w-48 border-l ">
            <div className="border-b text-lg text-center p-2 ">{image.name}</div>
            <div className="flex flex-col p-2">
                <span>Uploaded by</span>
                <span className="text-lg">{uploaderInfo.fullName}</span>
            </div>
            <div className="flex flex-col p-2">
                <span>created at </span>
                <span className="text-lg">{image.createdAt.toLocaleDateString()}</span>
            </div>
            <div className="p-2">
                <form action= {async ()=>{
                    "use server";
                    await deleteImage(props.id);
                }}>
                <Button type="submit" variant="destructive">
                    Delete
                </Button>
                </form>
            </div>
        </div>
    </div>
    
);
} 