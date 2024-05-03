import FullImageView from "~/components/full-image-page";
export  default  function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
      <FullImageView id={Number(photoId)}/>
);}