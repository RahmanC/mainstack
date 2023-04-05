import { Link } from "react-router-dom";
import style from "./Page404.module.scss";

const Page404 = () => {
  return (
    <div className={style.page_not_found}>
      <p className={style.page_not_found_text}>
        This screen is in development. Please go to dashboard
      </p>
      <Link to='/' className={style.page_not_found_home_btn}>
        Dashboard
      </Link>
    </div>
  );
};

export default Page404;
