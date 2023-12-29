import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons"

const DeleteBlock = () => {
  return (
    <FontAwesomeIcon icon={faX} className="text-red-400 hover:text-red-200 cursor-pointer" />
  );
};

export default DeleteBlock;
