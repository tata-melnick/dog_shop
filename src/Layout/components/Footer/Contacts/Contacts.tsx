import React from "react";
import Button from "../../../../components/Button/Button";
import styles from "./contacts.module.scss";
import IconTelegram from "../../../../icons/IconTelegram";
import IconWhatsApp from "../../../../icons/IconWhatsApp";
import IconViber from "../../../../icons/IconViber";
import IconInstagram from "../../../../icons/IconInstagram";
import IconVk from "../../../../icons/IconVk";

interface IContactsProps {
  children?: React.ReactNode;
}

const Contacts: React.FC<IContactsProps> = () => {
  return (
    <div className={styles.contacts}>
      <h3 className={styles.title}>Мы на связи</h3>
      <Button link="#" className={styles.telephone}>
        8(999)00-00-000
      </Button>
      <Button link="#" className={styles.email}>
        dogfood.ru@gmail.com
      </Button>
      <div className={styles.socialLinks}>
        <Button link="#" className={styles.margin}>
          <IconTelegram />
        </Button>
        <Button link="#" className={styles.margin}>
          <IconWhatsApp />
        </Button>
        <Button link="#" className={styles.margin}>
          <IconViber />
        </Button>
        <Button link="#" className={styles.margin}>
          <IconInstagram />
        </Button>
        <Button link="#">
          <IconVk />
        </Button>
      </div>
    </div>
  );
};

export default Contacts;
