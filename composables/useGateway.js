const runtimeConfig = useRuntimeConfig();
const gateway = ref(runtimeConfig.public.apiAddress);
export default async () =>{
    return {
        gateway
    }
}