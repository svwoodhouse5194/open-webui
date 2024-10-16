<script lang="ts">
	import { user } from '$lib/stores';
    import { goto } from '$app/navigation';
</script>

<div class="container mx-auto p-10 h-[calc(100vh-74px)] overflow-auto">
    <div class="flex flex-row justify-center">
        <div class="flex flex-col">
            <div class="mx-20">
                <div class="bg-gray-800 border-2 border-white rounded">
                    <div class="m-8 flex items-center gap-5">
                        <div class="basis-1/4">
                            <img src="niprgpt_logo.webp" alt="logo"/>
                        </div>
                        <div class="basis-2/3">
                            <div class="flex flex-col gap-4">
                                <div>
                                    <span class="font-medium text-4xl">NIPRGPT</span>
                                </div>
                                <div class="font-medium text-2xl grow">
                                    <a href="/">https://chat.niprgpt.mil/</a>
                                </div>
                                <div class="w-20 flex">
                                    <p class="border-2 border-yellow-600 p-3 rounded">Beta</p>
                                </div>
                                <div class="text-white">
                                    <p>The current knowledge cut-off date is December 2023.</p>
                                </div>
                                <div>
                                    <p>NIPRGPT is a Retrieval Augmented Generation (RAG) system that allows you to chat with your documents. Load up to 20 appropriate CUI IL4 information sources per workspace for the tool to use.</p>
                                </div>
                                <div class="mt-5 p-1 text-blue-200 bg-indigo-900">
                                    <div class="flex justify-around">
                                    <div class="content-center m-2"> 
                                        <svg class="fill-current text-blue-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg> 
                                    </div>
                                        <p class="content-center">New to Retrieval Augmented Generation (RAG)? Checkout our RAG guide!</p>
                                        <button class="border-2 border-indigo-300 p-2 m-2"
                                            on:click={async () => {
                                            await goto('/rag');
                                        }}
                                        >RAG Quick Guide</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-green-500 rounded-full self-start text-green-500">
                            acti
                        </div>
                </div>
            </div>
                <div class="flex mt-16 py-6 px-10 text-yellow-100 bg-yellow-950 ">
                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EAC452"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"/></svg>
                    <p class="content-center">Due to performance issues we have disabled chat history.</p>
                </div>
                <div class="flex mt-16 py-6 px-10 text-blue-200 bg-blue-950">
                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#5084C1"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                    <p class="content-center">We are upgrading our production environment to the new environment. This enhancement process will take place over the next few weeks. During this time, users may experience brief periods of intermittent service as we implement the improvements. We appreciate your patience.</p>
                </div>
                <div class="flex mt-16 py-6 px-10 text-yellow-100 bg-yellow-950">
                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EAC452"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"/></svg>
                    <p>Workspace data created prior to 8/31/24 is temporarily unavailable.</p>
                </div>
                <div class="flex mt-16 py-6 px-10 text-blue-200 bg-blue-950">
                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#5084C1"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                    <p class="content-center">NIPRGPT is developed and maintained by AFRL. If you encounter any issues, contact us at afrl.ri.niprgpt@us.af.mil or choose "Feedback and Support" on the left hand navigation menu. We will do our best to respond to you as soon as possible.</p>
                </div>
            </div>
        </div>
    </div>
</div>