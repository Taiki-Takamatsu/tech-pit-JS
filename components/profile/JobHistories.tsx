const jobHistories = [
  "xx株式会社 (2000年4月〜2010年12月)",
  "yy株式会社 (2011年1月〜2025年1月)",
];

const JobHistories = () => (
  <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
      経歴
    </h2>
    <div className="mt-2 flex flex-col gap-2">
      {jobHistories.map((jobHistory, index) => (
        <span
          key={index}
          className="self-start bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-200 text-sm px-3 py-1 rounded-full"
        >
          {jobHistory}
        </span>
      ))}
    </div>
  </div>
);

export default JobHistories;
