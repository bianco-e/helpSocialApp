import { useState, useEffect } from "react";

const useFetchWithFilter = (functionToFetch) => {
  const [filteredData, setFilteredData] = useState([]);
  const [allData, setAllData] = useState([]);

  const fetchData = async () => {
    setAllData(await functionToFetch());
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(allData);
  }, [allData]);

  return [filteredData, setFilteredData, allData, fetchData];
};

export default useFetchWithFilter;
