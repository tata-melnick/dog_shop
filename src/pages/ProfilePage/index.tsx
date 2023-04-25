import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./profilePage.module.scss";
import { Loader, Input, Button } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store";
import { setUserData } from "../../store/user/actions";
import { API, UserType } from "../../api";
import { BackIcon } from "../../icons";

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { data } = useAppSelector((state) => state.user);
  const [name, setName] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSetName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleSetAvatar = (e: ChangeEvent<HTMLInputElement>) => setAvatar(e.target.value);
  const handleSetAbout = (e: ChangeEvent<HTMLInputElement>) => setAbout(e.target.value);

  const goBack = () => navigate(-1);
  const edit = async () => {
    setIsLoading(true);
    let userInfo: UserType;
    if (data?.name !== name || data?.about !== about) {
      const newUserInfo = await API.EditUserInfo({ name, about });
      userInfo = { ...newUserInfo };
    }
    if (data?.avatar !== avatar) {
      const newUserInfo = await API.EditUserAvatar(avatar);
      userInfo = { ...newUserInfo };
    }
    dispatch(setUserData({ data: userInfo }));
    setIsLoading(false);
  };

  useEffect(() => {
    if (data) {
      setName(data.name);
      setAbout(data.about);
      setAvatar(data.avatar);
    }
  }, [data]);

  const disable =
    (!name || data?.name === name) &&
    (!avatar || data?.avatar === avatar) &&
    (!about || data?.about === about);

  return (
    <div className={styles.wrapper}>
      {!data || isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <div className={styles.wrap}>
            <BackIcon />
            <Button onClick={goBack} className={styles.btn}>
              Назад
            </Button>
          </div>
          <h1 className={styles.title}>Мои данные</h1>
          <div className={styles.form}>
            <img src={avatar} alt="avatar" className={styles.avatar} />
            <div className={styles.inputs}>
              <Input type="email" placeholder="Email" place="modal" value={data.email} />
              <Input
                type="name"
                placeholder="Имя"
                value={name}
                place="modal"
                onChange={handleSetName}
              />
              <Input
                type="name"
                placeholder="О бо мне"
                value={about}
                place="modal"
                onChange={handleSetAbout}
              />
              <Input
                type="name"
                placeholder="Аватар"
                value={avatar}
                place="modal"
                onChange={handleSetAvatar}
              />
              <Button type="filled" disabled={disable} onClick={edit} className={styles.save}>
                Сохранить изменения
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
