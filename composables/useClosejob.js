import {useCloseModal} from '~~/stores/modal'
import { useToastClose } from '~~/stores/toast';
export default (id) =>{
    const { pendingClose, data: closed,error } = useFetch("/api/JobManager/close-job", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        query: {id},
        baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
        onRequest({ request, options }) {
          // Set the request headers
          console.log(options)
        },
        onResponse({ request, response, options }) {
            // Process the response data
            useCloseModal.value = false
            useToastClose.value = true;
            setTimeout(()=>{
                useToastClose.value = false;
            },2000)
          },
      });
      return {
        pendingClose,
        closed,
        error
      }
}
