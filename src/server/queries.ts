import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { eq, and} from "drizzle-orm";
import { images } from "./db/schema";
import { redirect } from "next/navigation";
import analyticsServerClient from "./analytics";

export async function getMyImages(){
    const user=auth();
    if(!user.userId) throw new Error("Unauthorized");
    const images = await db.query.images.findMany({
        where:  (model, {eq})=> eq(model.userId, user.userId),
        orderBy:  (model,{desc}) => desc(model.id),
      });
      return images;
}
export async function getImageById(id: number){
    const user=auth();
    if(!user.userId) throw new Error("Unauthorized");
    const images = await db.query.images.findFirst({
        where:  (model, {eq})=> eq(model.id, id),
      });
      if(!images) throw new Error("Image not found");
      if(images.userId !== user.userId) throw new Error("Unauthorized");
      return images;
}
export async function deleteImage(id: number){
    const user=auth();
    if(!user.userId) throw new Error("Unauthorized");
    await db
      .delete(images)
      .where(and(eq(images.id, id),eq(images.userId, user.userId)));
    analyticsServerClient.capture({
      distinctId: user.userId,
      event: 'delete image',
      properties: {
        imageId: id,
      },
    });

    redirect("/");
}