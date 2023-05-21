<template>
  <div class="flex flex-col">
    <dashboard
      ref="dash"
      :uppy="uppy"
      :props="{
        metaFields: [{ id: 'JobId', name: 'JobId' }],
        proudlyDisplayPoweredByUppy: false,
        height: 350,
        dropHint: 'Upload CV here',
        dropPaste: 'Upload CV here, paste or %{browse}',
        note: 'Doc, png or jpeg only',
        hideUploadButton: true,
      }"
    />
    <div>
      <button
        @click="upload"
        class="bg-bgreen text-white px-4 py-3 rounded-lg mt-3 font-medium"
      >
        Upload
      </button>
    </div>
    <a href=""></a>
    <!-- <DragDrop :uppy="uppy"/> -->
  </div>
</template>

<script setup>
import { Dashboard, DragDrop } from "@uppy/vue";

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

import Uppy from "@uppy/core";
import XHRUpload from "@uppy/xhr-upload";
import { useUser } from "~~/stores/user";
const user = useUser();
const uploadData = ref(null);
const uppy = new Uppy({
  onBeforeFileAdded: (file) => {
    const name = Date.now() + "_" + file.name;
    Object.defineProperty(file.data, "name", {
      writable: true,
      value: name,
    });
    return { ...file, name, meta: { ...file.meta, name } };
  },
  proudlyDisplayPoweredByUppy: false,
  dropHint: "Upload CV here",
  restrictions:{
    allowedFileTypes:['.doc','.docx','.png'],
    maxNumberOfFiles:1

  },
});
async function upload() {
  let formD = new FormData();
  formD.append("File",uploadData.value);
  formD.append("JobId",user.profileId)
  const { data, error } = await useFetch("/api/JobManager/UploadCv", {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: formD,
    params: {},
    baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
    onRequest({ request, options }) {
      // Set the request headers
      console.log(options);
      console.log({Udata:uploadData.value})
    },
    onRequestError({ request, error }) {
      console.log(error.message);
      console.log({ error });
    },
    onResponse({ request, response, options, error }) {
      console.log({ response, request });
    },
    onResponseError({ request, response, options, error }) {
      // Handle the response errors
      console.log({resErr:error})
    },
  });
  console.log({data});
  // console.log({error})
  console.log("clicked");
}
uppy.use(XHRUpload, {
  endpoint:
    "https://rezumii-jobmanagement.azurewebsites.net/api/JobManager/UploadCv",
  formData: true,
  fieldName: "File",
  getResponseData: (responseText, response) => {
    console.log({ response, responseText: responseText.data });
  },
});

uppy.on("file-added", (file) => {
  console.log("Added file", file);
  uploadData.value = file;
  console.log({ UD: uploadData.value });
});

onBeforeUnmount(() => {
  uppy.close();
});
</script>
