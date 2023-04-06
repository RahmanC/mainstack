import style from "./Legend.module.scss";

const LegendComponent = (props: any) => {
  const { flag, source, percent, color } = props;
  return (
    <div key={source} className={style.legend}>
      {flag}

      <div>
        {source} {percent}%{" "}
      </div>
      <span style={{ background: color }} className={style.legend_color}></span>
    </div>
  );
};

export default LegendComponent;
