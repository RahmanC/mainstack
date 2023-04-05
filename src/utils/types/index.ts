type ObjectProps = {
  title: string;
  icon: JSX.Element;
}

export type TLink = {
    title: string;
    icon?: JSX.Element;
    heading?: string;
    subRoutes?: ObjectProps[];
  };