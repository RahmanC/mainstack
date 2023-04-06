import style from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={style.custom_loader}>
      <div className={style.custom_loader__dot}></div>
      <div className={style.custom_loader__dot}></div>
      <div className={style.custom_loader__dot}></div>
      <div className={style.custom_loader__dot}></div>
    </div>
  );
};

export default Loader;
