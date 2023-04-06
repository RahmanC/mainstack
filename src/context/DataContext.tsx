import * as React from "react";
import { getViews } from "services";

// type DataProps = {
//   graph_data: {views: {
//     [key: string]: string
//   }}

// }

export const DataContext = React.createContext({} as any);

export const DataProvider = (props: any) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [records, setRecords] = React.useState({});
  const [locations, setLocations] = React.useState([]);
  const [sources, setSources] = React.useState([]);

  const fetchRecord = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await getViews();
      setRecords(res?.graph_data);
      setLocations(res?.top_locations);
      setSources(res?.top_sources);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchRecord();
  }, []);

  return (
    <DataContext.Provider
      value={{ loading, error, records, locations, sources }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
