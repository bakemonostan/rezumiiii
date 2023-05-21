import { useDeleteModal } from "~~/stores/modal";
import { useToastDelete } from "~~/stores/toast";
export default (id) => {
  const {
    pendingDelete,
    data: deleted,
    error,
  } = useFetch("/api/JobManager/delete-job", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    query: { id },
    baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
    onRequest({ request, options }) {
      // Set the request headers
      console.log(options);
    },
    onRespoPUTnse({ request, response, options }) {
      // Process the response data
      useDeleteModal.value = false;
      useToastDelete.value = true;
      setTimeout(() => {
        useToastDelete.value = false;
      }, 2000);
    },
  });
  return {
    pendingDelete,
    deleted,
    error,
  };
};
