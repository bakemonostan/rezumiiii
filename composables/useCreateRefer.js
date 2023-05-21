export default (reff) =>{
    const { pendingreffer, data: reffer,error } = useLazyFetch("/api/JobManager/create-job-refferal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {...reff},
        baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
        onRequest({ request, options }) {
          // Set the request headers
          console.log(options)
        },
      });
      return {
        pendingreffer,
        reffer,
        error
      }
}
