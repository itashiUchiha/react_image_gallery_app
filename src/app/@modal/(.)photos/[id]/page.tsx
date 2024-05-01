import { Modal } from './model';
import FullImageView from "~/components/full-image-page";
export  default  function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullImageView id={Number(photoId)}/>
    </Modal>
);}