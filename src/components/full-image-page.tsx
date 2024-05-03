import { getImageById } from "~/server/queries";
export  default async function FullImageView(props:{id:number}) {
  const image =  await getImageById(props.id);
  return (
    <div className="flex w-full h-full ">
        <div className="flex flex-col ">
            <img src={image.url} className="object-contain  overflow-hidden"/>
        </div>
        <div className="flex flex-col w-48 border-l">{image.name}</div>
    </div>
    
);
} 