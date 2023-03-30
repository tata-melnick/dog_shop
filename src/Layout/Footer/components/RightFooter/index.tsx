import React from "react";
import { Button } from "../../../../components";
import styles from "./rightFooter.module.scss";
import { TelegramIcon, WhatsAppIcon, ViberIcon, InstagramIcon, VkIcon } from "../../../../icons";

const RightFooter: React.FC = () => {
  return (
    <div className={styles.contacts}>
      <h3 className={styles.title}>Мы на связи</h3>
      <Button link="#" className={styles.telephone}>
        8 (999) 00-00-000
      </Button>
      <Button link="#" className={styles.email}>
        dogfood.ru@gmail.com
      </Button>
      <div className={styles.socialLinks}>
        <Button link="#" className={styles.margin}>
          <TelegramIcon />
        </Button>
        <Button link="#" className={styles.margin}>
          <WhatsAppIcon />
        </Button>
        <Button link="#" className={styles.margin}>
          <ViberIcon />
        </Button>
        <Button link="#" className={styles.margin}>
          <InstagramIcon />
        </Button>
        <Button link="#">
          <VkIcon />
        </Button>
      </div>
    </div>
  );
};

export default RightFooter;
