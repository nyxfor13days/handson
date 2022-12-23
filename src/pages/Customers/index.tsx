import "handsontable/dist/handsontable.full.min.css";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { useEffect, useState } from "react";

registerAllModules();

const Customers = () => {
  const [data, setData] = useState([]);
  const [columnHeaders, setColumnHeaders] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:3001/customers");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setColumnHeaders(Object.keys(data[0]));
    }
  }, [data]);

  return (
    <div className="h-screen w-screen">
      <HotTable
        data={data}
        dataSchema={{
          id: null,
          name: null,
          email: null,
          phone: null,
          address: null,
          city: null,
          state: null,
          zip: null,
        }}
        colHeaders={[
          "Customer ID",
          "Name",
          "Email",
          "Phone",
          "Address",
          "City",
          "State",
          "Zip",
        ]}
        minSpareRows={1}
        rowHeaders
        stretchH="all"
        dropdownMenu
        multiColumnSorting
        filters
        manualRowMove
        licenseKey="non-commercial-and-evaluation"
      />
    </div>
  );
};

export default Customers;
