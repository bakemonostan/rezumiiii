import { useUser } from "~~/stores/user";

export default () => {
  const { $pinia } = useNuxtApp()
  const {token} = useUser($pinia)
  const { pending:pendingGet, data: jobs,ongoingJobError,refresh:refreshJobs } = useLazyFetch("/api/JobManager/get-all-opened-job", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    params: {},
    baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
    onRequestError:({ request, options, error })=>{

    }
  });
  const { pendingReffered, data: reffered } = useLazyFetch("/api/JobManager/get-all-job-reffered", {
    method: "GET",
    headers: { "Content-Type": "application/json" ,"Authorization":`Bearer ${token}`},
    params: {},
    baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
  });
  const { pendingClosed, data: closed } = useLazyFetch("/api/JobManager/get-all-close-job", {
    method: "GET",
    headers: { "Content-Type": "application/json" ,"Authorization":`Bearer ${token}`},
    params: {},
    baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
  });
  // const { pendingCreate, data:created } = useLazyFetch("/api/Job/create-job", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body:{},
  //   params: {},
  //   baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
  // });  

  return {
    pendingGet,
    jobs,
    refreshJobs,
    ongoingJobError,
    pendingClosed,
    closed,
    reffered,
    pendingReffered,
  };
};
