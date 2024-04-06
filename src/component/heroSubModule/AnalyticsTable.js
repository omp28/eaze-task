import React from "react";

const AnalyticsTable = ({ data }) => {
  return (
    <div className="container mx-auto overflow-x-auto h-[400px] mb-12">
      <table className="min-w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-gray-200 sticky top-0 z-10 bg-white">
            <th className="py-4 px-6 w-2/12">Page</th>
            <th className="py-4 px-6 w-2/12">Pageviews</th>
            <th className="py-4 px-6 w-2/12">Unique pageviews</th>
            <th className="py-4 px-6 w-1/12">Avg. time on page</th>
            <th className="py-4 px-6 w-2/12">Entrances</th>
            <th className="py-4 px-6 w-1/12">% Exit</th>
            <th className="py-4 px-6 w-2/12">Page value</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            data.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-4 px-6 ">{row.page}</td>
                <td className="py-4 px-6">
                  {row.pageviews}
                  <span className=" ml-2 text-gray-500">
                    ({row.pageviewsPercentage})
                  </span>
                </td>
                <td className="py-4 px-6">
                  {row.uniquePageviews}{" "}
                  <span className=" ml-2 text-gray-500">
                    ({row.uniquePageviewsPercentage})
                  </span>
                </td>
                <td className="py-4 px-6">{row.avgTimeOnPage}</td>
                <td className="py-4 px-6">
                  {row.entrances}
                  <span className=" ml-2 text-gray-500">
                    ({row.entrancesPercentage})
                  </span>
                </td>
                <td className="py-4 px-6">{row.exitRate}</td>
                <td className="py-4 px-6">
                  {row.pageValue}
                  <span className=" ml-2 text-gray-500">
                    ({row.pageValuePercentage})
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnalyticsTable;
