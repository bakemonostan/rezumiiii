export default (jobId) => {
  const {
    pendingGetOne,
    data: job,
    error,
  } = useLazyFetch("/api/JobManager/get-job-By-Id", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    query: { id: jobId },
    baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
    onRequest({ request, options }) {
      // Set the request headers
      console.log(options);
    },
  });
  return {
    pendingGetOne,
    job,
    error,
  };
};
