<script lang="ts">
	import { user, showArchivedChats } from '$lib/stores';
    import { page } from '$app/stores';
	import UserMenu from './Sidebar/UserMenu.svelte';

    let showDropdown = false;

</script>

<div class="flex justify-between items-center bg-gray-900 m-0 text-gray-300 p-2 shadow-gray-500/50">
    <div class="flex flex-row">
        <div class="size-16 content-center mr-5">
            <img src="niprgpt_logo.webp" alt="logo"/>
        </div>
        <div class="text-3xl content-center">NIPRGPT</div>
    </div>
    <div class="text-2xl">{$page.url.pathname.slice(1).toUpperCase()}</div>
    <div class="px-2.5 pb-safe-bottom">
        <!-- <hr class=" border-gray-900 mb-1 w-full" /> -->

        <div class="flex flex-col font-primary">
            {#if $user !== undefined}
                <UserMenu
                    role={$user.role}
                    on:show={(e) => {
                        if (e.detail === 'archived-chat') {
                            showArchivedChats.set(true);
                        }
                    }}
                >
                    <button
                        class=" flex rounded-xl py-3 px-3.5 w-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"
                        on:click={() => {
                            showDropdown = !showDropdown;
                        }}
                    >
                        <div class=" self-center mr-3">
                            <img
                                src={$user.profile_image_url}
                                class=" max-w-[30px] object-cover rounded-full"
                                alt="User profile"
                            />
                        </div>
                        <div class=" self-center font-medium">{$user.name}</div>
                    </button>
                </UserMenu>
            {/if}
        </div>
    </div>
</div>