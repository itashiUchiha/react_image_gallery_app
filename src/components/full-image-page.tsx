import { getImageById } from "~/server/queries";
export  default async function FullImageView(props:{id:number}) {
  const image =  await getImageById(props.id);
  return (
    <img src={image.url} className="w-96"/>
);
}