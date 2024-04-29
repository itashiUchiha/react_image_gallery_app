import { getImageById } from "~/server/queries";

export  default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const image =  await getImageById(Number(photoId));
  return (
  <div> 
    {<img src={image.url} className="w-96"/>}
  </div>
);}