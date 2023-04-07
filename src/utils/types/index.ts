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

  export type PillProps = {
    value: string;
    label: string;
  };
  
  export type StateProps = {
    active: string;
    setActive: (value: string) => void;
  };

  export type Props = {
    data: Record<string, number>;
    color?: string;
    filteredData?: { [key: string]: number };
  }

  export type DoughnutChartProps<T> = {
    data: T[];
    countKey: string;
    labelKey: string;
    sourceKey: string;
  }

  export type DateProps = {
  startDate: string;
  setStartDate: (value: string) => void;
  endDate: string;
  setEndDate: (value: string) => void;
}