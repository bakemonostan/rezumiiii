// const config = useRuntimeConfig()
import { useUser } from "~~/stores/user";

export default () => {
  const { $pinia } = useNuxtApp();
  const { token } = useUser($pinia);
  const {
    pending: pendingTotal,
    data: total,
    error,
  } = useLazyFetch("/api/AnalyticsAndReport/get-total-job-created", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    query: {},
    baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
    onRequest({ request, options }) {
      // Set the request headers
      console.log(options);
    },
  });
  const { pending: pendingOngoing, data: totalOngoing } = useLazyFetch(
    "/api/AnalyticsAndReport/get-total-job-open",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {},
      baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
    }
  );
  const { pending: pendingClosed, data: totalClosed } = useLazyFetch(
    "/api/AnalyticsAndReport/get-total-job-close",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {},
      baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
    }
  );
  const { pending: pendingChart, data: chart } = useLazyFetch(
    "/api/AnalyticsAndReport/get-chart-job",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {},
      baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
    }
  );
  const { pending: pendingClosedJobs, data: closedJobs } = useLazyFetch(
    "/api/AnalyticsAndReport/get-list-close-job",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {},
      baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
      onRequest({ request, options }) {
        // Set the request headers
        console.log(options);
      },
    }
  );
  const { pending: pendingNewJobs, data: newJobs } = useLazyFetch(
    "/api/AnalyticsAndReport/get-list-open-job",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {},
      baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
      onRequest({ request, options }) {
        // Set the request headers
        console.log(options);
      },
    }
  );
  const { pending: pendingTopApplied, data: topApplied } = useLazyFetch(
    "/api/AnalyticsAndReport/get-topapplied-job",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {},
      baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
      onRequest({ request, options }) {
        // Set the request headers
        console.log(options);
      },
    }
  );
  const { pending: pendingTotalJobPosted, data: totalJobPosted } = useLazyFetch(
    "/api/AnalyticsAndReport/get-total-job-company-post",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {},
      baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
      onRequest({ request, options }) {
        // Set the request headers
        console.log(options);
      },
    }
  );
  const { pending: pendingTotalApplication, data: totalApplication } =
    useLazyFetch("/api/AnalyticsAndReport/get-total-applicant-by-company", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {},
      baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
      onRequest({ request, options }) {
        // Set the request headers
        console.log(options);
      },
    });

  const { pending: pendingCompany, data: totalCompanyApplication } =
    useLazyFetch("/api/AnalyticsAndReport/get-total-applicant-by-company", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {},
      baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
      onRequest({ request, options }) {
        // Set the request headers
        console.log(options);
      },
    });

  const { pending: pendingFB, data: totalFacebook } = useLazyFetch(
    "/api/AnalyticsAndReport/get-total-job-shared-facebook",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {},
      baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
      onRequest({ request, options }) {
        // Set the request headers
        console.log(options);
      },
    }
  );
  const { pending: pendingTwitter, data: totalTwitter } = useLazyFetch(
    "/api/AnalyticsAndReport/get-total-job-shared-facebook",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {},
      baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
      onRequest({ request, options }) {
        // Set the request headers
        console.log(options);
      },
    }
  );
  const { pending: pendingLinkedin, data: totalLinkedin } = useLazyFetch(
    "/api/AnalyticsAndReport/get-total-job-shared-facebook",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {},
      baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
      onRequest({ request, options }) {
        // Set the request headers
        console.log(options);
      },
    }
  );
  const { pending: pendingSocialChart, data: socialChart } = useLazyFetch(
    "/api/AnalyticsAndReport/get-chart-job-social-medial",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {},
      baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
      onRequest({ request, options }) {
        // Set the request headers
        console.log(options);
      },
    }
  );
  const { pending: pendinglistApplicant, data: listApplicant } = useLazyFetch(
    "/api/AnalyticsAndReport/get-list-applicant-and-total-count-job",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {},
      baseURL: "https://rezumii-jobmanagement.azurewebsites.net",
      onRequest({ request, options }) {
        // Set the request headers
        console.log(options);
      },
    }
  );

  return {
    chart,
    pendingChart,
    pendingTotal,
    total,
    pendingOngoing,
    totalClosed,
    pendingClosed,
    totalOngoing,
    closedJobs,
    pendingClosedJobs,
    newJobs,
    pendingNewJobs,
    pendingTopApplied,
    topApplied,
    pendingTotalJobPosted,
    totalJobPosted,
    pendingTotalApplication,
    totalApplication,
    pendingCompany,
    totalCompanyApplication,
    pendingFB,
    totalFacebook,
    pendingTwitter,
    totalTwitter,
    pendingLinkedin,
    totalLinkedin,
    pendingSocialChart,
    socialChart,
    pendinglistApplicant,
    listApplicant,
  };
};
