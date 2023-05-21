<template>
  <div
    class="flex flex-row w-full justify-end border-b border-gray-200 drop-shadow-md fixed z-20 top-0 bg-white"
  >
    <Menu>
      <div class="lg:px-12 py-2">
        <div
          class="flex flex-row content-center border p-2 border-gray-200 rounded-md"
        >
          <div class="rounded-full mr-2">
            <img src="~/assets/lock.png" alt="" />
          </div>
          <div class="self-center mr-2">
            <MenuButton>
              <span>{{ username || mail || "Admin" }}</span
              ><Icon name="heroicons:chevron-down-20-solid" class="self-center"
            /></MenuButton>
            <MenuItems
              class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <MenuItem class="px-2 py-2 cursor-pointer">
                <div>Profile</div>
              </MenuItem>
              <MenuItem class="px-2 py-2 cursor-pointer" @click="logout">
                <div>logout</div>
              </MenuItem>
            </MenuItems>
          </div>
        </div>
      </div>
    </Menu>
  </div>
</template>
<script setup>
import { useUser } from "~~/stores/user";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
const username = ref("");
const mail = ref("");
const router = useRouter();
const logout = () => {
  const user = useUser();
  user.$reset();
  router.push({
    path: "login",
  });
};
onBeforeMount(() => {
  const user = useUser();
  const { name, email } = user;
  username.value = name.value;
  mail.value = email;
});
</script>
