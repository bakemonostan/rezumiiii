import { useUser } from "~~/stores/user";

export default (id) => {
  const { $pinia } = useNuxtApp()
  const {token} = useUser($pinia)
    const { pendingGetOne, data: job,error } = useFetch("/api/JobManager/get-all-job-reffered-by-id-hr", {
        method: "GET",
        headers: { "Content-Type": "application/json" ,"Authorization":`Bearer ${token}`},
        query: {id},
        baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
        onRequest({ request, options }) {
          // Set the request headers
          console.log(options)
        },
      });
      return {
        pendingGetOne,
        job,
        error
      }
}
