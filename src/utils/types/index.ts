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

  export type LocationProps = {
    country: string;
    count: number;
    percent: number;
  };

  export type ReferralProps = {
    source: string;
    count: number;
    percent: number;
  };