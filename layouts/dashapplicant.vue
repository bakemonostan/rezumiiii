<template>
    <div class="relative bg-slate-50">
      <TopBar />
      <SideBarTwo />
      <!-- <div class="flex ml-12 w-11/12 mt-16 justify-center">
        <div class="w-10/12 px-12"><Header /></div>
      </div> -->
      <!-- <div class="ml-12 mt-16"><Header /></div> -->
      <div class="flex lg:ml-32 w-12/12 mt-16 justify-end">
        <div class="w-full lg:w-11/12 px-4 lg:px-16"><slot /></div>
      </div>
    </div>
  </template>
  