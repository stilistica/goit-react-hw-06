import s from "./Contact.module.css";
import { GrUserManager } from "react-icons/gr";
import { RiPhoneLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice.js";

function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.container}>
      <div className={s.info}>
        <p>
          <GrUserManager /> {name}
        </p>
        <p>
          <RiPhoneLine /> {number}
        </p>
      </div>
      <button onClick={handleDelete} className={s.btn}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
