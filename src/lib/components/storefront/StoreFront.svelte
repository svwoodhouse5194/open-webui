<script lang="ts">
	import { user } from '$lib/stores';
    import { goto } from '$app/navigation';
</script>

<div class="container mx-auto p-10">
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
                                <div class="text-white">
                                    <p>The current knowledge cut-off date is December 2023.</p>
                                </div>
                                <div>
                                    <p>NIPRGPT is a Retrieval Augmented Generation (RAG) system that allows you to chat with your documents. Load up to 20 appropriate CUI IL4 information sources per workspace for the tool to use.</p>
                                </div>
                                <div class="mt-5 p-5 text-blue-200 bg-indigo-900">
                                    <div class="flex">
                                        <p class="ml-5">New to Retrieval Augmented Generation (RAG)? Checkout our RAG guide!</p>
                                        <button class="border-2 border-indigo-300"
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
                <div class="flex mt-16 py-6 px-10 text-yellow-100 bg-yellow-950">
                    <p>Due to performance issues we have disabled chat history.</p>
                </div>
                <div class="flex flex-row mt-16 py-6 px-10 text-blue-200 bg-blue-950">
                    <svg class="fill-current text-blue-400 w-20 h-20 mr-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
                    <p>We are upgrading our production environment to the new environment. This enhancement process will take place over the next few weeks. During this time, users may experience brief periods of intermittent service as we implement the improvements. We appreciate your patience.</p>
                </div>
                <div class="flex mt-16 py-6 px-16 text-yellow-100 bg-yellow-950">
                    <p>Workspace data created prior to 8/31/24 is temporarily unavailable.</p>
                </div>
                <div class="flex mt-16 py-6 px-16 text-blue-200 bg-blue-900">
                    <p>NIPRGPT is developed and maintained by AFRL. If you encounter any issues, contact us at afrl.ri.niprgpt@us.af.milor choose "Feedback and Support" on the left hand navigation menu. We will do our best to respond to you as soon as possible.</p>
                </div>
        </div>
        </div>
    </div>
</div>