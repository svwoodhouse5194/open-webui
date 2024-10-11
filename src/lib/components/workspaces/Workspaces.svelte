<script>
// @ts-nocheck

   let showForm = false
   import { Label, Input, Modal, Button, Radio, Select, Textarea, MultiSelect, Tooltip, Card, Dropdown, DropdownItem } from 'flowbite-svelte';
   import { ChevronDownOutline, ChevronUpOutline, SearchOutline } from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';
    import { createWorkspace, getWorkspaces, ownerID, workspaces, sharedWorkspaces, getSharedWorkspaces } from '$lib/stores';
	import Placeholder from '../chat/Messages/Placeholder.svelte';
	import { dissemination, disseminationLabels } from '../../../helper/information-contols';

   /**
	 * @type {never[]}
	 */
   let selected = [];
   let selectedSensitivity = ""
   let selectedVisibility = "private"
   let selectedModality = "text"
   let selectedModel = ""
   let selectedDissemination = ""
   let workspaceDescription = ""
   let workspaceName = ""
   let showsharedWorkspaces = false
   let descending = true;
   let sortDescending = true;

    let embeddingModels = [
        { value: 'jinaai', name: 'jinaai/jina-embeddings-v2-base-en' },
    ];

    let dataSensitivity = [
        { value: 'PUBLIC', name: 'Public Domain Information' },
        { value: 'NONCRIT', name: 'Non-Critical Information' },
        { value: 'CUI', name: 'Controlled Unclassified Information' },
    ];

    const sensitivityDescriptions = {
        PUBLIC:
            "Information that has been approved to be released to the public or information from the public domain.",
        NONCRIT:
            "Non-controlled unclassified information that still requires some level of protection and must be protected using Impact Level 2 protocols.",
        CUI: "Controlled unclassified information such as FOUO, operational, proprietary, or technical information that must be protected by Impact Level 5 standards and protocols.",
    };

    const submitForm = async () => {
        let params = {
            name: {workspaceName},
	        description: {workspaceDescription},
	        data_sensitivity: {selectedSensitivity},
	        dissemination_control: {selectedDissemination}
        }
        let result = await createWorkspace(params)
        console.log(result)
	}
    
    const getsharedWorkspaces = async () => {
        let data = await getSharedWorkspaces();
        sharedWorkspaces.set(data.results)
    }

    const refreshWorkspaces = async () => {
        if(showsharedWorkspaces){
            let refreshedSharedWorkspaces = await getSharedWorkspaces();
            sharedWorkspaces.update(()=> [...refreshedSharedWorkspaces])
        } else {
            let refreshedWorkspaces = await getWorkspaces();
            workspaces.update(() => [...refreshedWorkspaces.results])
        }
    }

    // Gets the current list of workspaces
    //TODO: Change the URL to https://niprgpt.mil/api/chroma/collections?owner_id=${ownerID}&page=1&page_size=10&type=user&name=&sort_by=createdAt&sort_order=DESC
    //TODO: Extract the base URL
    onMount(async () => {
        let data = await getWorkspaces();
        workspaces.set(data.results);
    });

</script>

<div class="container mx-auto">
    <div class="flex flex-col">
        <div class="flex flex-row justify-between mx-10">
            <h1 class="text-3xl">{showsharedWorkspaces ? 'Shared Workspaces' : 'My Workspaces'}</h1>
            <div class="flex flex-row space-x-4">
                <button 
                    on:click={() => {
                    showForm = !showForm
                }}>
                    <svg class="fill-current text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/></svg>
                </button>
                <Tooltip>Create Workspace</Tooltip>
                <button on:click={refreshWorkspaces}>
                    <svg class="fill-current text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z"/></svg>
                </button>
                <Tooltip>Refresh Workspaces</Tooltip>
                <button class="text-black bg-white outline p-2 rounded uppercase"
                    on:click={() => {
                        showsharedWorkspaces = !showsharedWorkspaces
                    }}>{showsharedWorkspaces ? 'Shared Workspaces' : 'My Workspaces'}</button>
            </div>
        </div>
        <div class="bg-blue-900 flex flex-row mx-10 border-2 border-blue-200 p-5 mt-5 mb-5 bg-opacity-25 items-center">
            <svg class="fill-current text-blue-400 w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
            <a class="text-blue-100 underline" href="/rag">For more detailed information about workspaces and RAG, see Retrieval Augmented Generation.</a>
        </div>
        <div class="flex flex-col mx-10">
            <p>Workspaces in NIPRGPT's Retrieval Augmented Generation (RAG) system allow you to upload and query documents. You can create up to 10 workspaces, each with a maximum of 20 documents. There are two types of workspaces:</p>
            <ol class="list-decimal list-inside pl-4
            ">
                <li>Private Workspaces: Only accessible to you.</li>
                <li>Shared Workspaces: Visible to all NIPRGPT users but cannot be modified by them.</li>
            </ol>
            <p>Currently, the creation of Shared workspaces is restricted, but this feature will be made available to all users in the future. Ensure you appropriately tag your workspaces, as the tags determine who can access the content within them.</p>
        </div>
        <div>
            <div class="flex flex-row justify-end">
                <div class="content-center">
                    <!-- TODO: Add Search Workspaces Functionality -->
                    <Input id="email" type="email" placeholder="Search Workspaces">
                      <SearchOutline slot="left" class="text-gray-500 dark:text-gray-400" />
                    </Input>
                  </div>
                <!-- TODO: Need to add functionality for sorting ascending/ descending -->
                <div class="mx-2">
                    <Button
                        color="light" 
                        on:click={() => descending = !descending}>Sort By
                        {#if descending} 
                            <ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /> 
                        {:else} <ChevronUpOutline class="w-6 h-6 ms-2 text-white dark:text-white" />
                        {/if}
                    </Button>
                    <Dropdown>
                        <DropdownItem>Created At</DropdownItem>
                        <DropdownItem>Files</DropdownItem>
                        <DropdownItem>Names</DropdownItem>
                    </Dropdown>
                </div>
                <div class="flex">
                    <button on:click={() => sortDescending = !sortDescending}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z"/></svg>
                    </button>
                    {#if sortDescending}
                        <Tooltip>Sort Ascending</Tooltip>
                    {:else}
                        <Tooltip>Sort Descending</Tooltip>
                    {/if}
                </div>
            </div>
        </div>
        <div class="flex flex-wrap justify-around my-5">
                <!-- TODO: Will need to change this to display correct information -->
                <!-- TODO: Will need to fix UX -->
                <!-- TODO: Add onclick function to Cards to go to Workspace Detail page -->
                 {#if showsharedWorkspaces}
                 {#if $sharedWorkspaces.length == 0}
                    {getsharedWorkspaces()}
                 {/if}
                 {#each $sharedWorkspaces as sharedWorkspace}
                    <div class="m-2">
                        <Card href="/cards">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{sharedWorkspace.name}</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt esse repudiandae eos ipsa.</p>
                        </Card>
                    </div>
                 {/each}
                 {:else}
                    {#each $workspaces as workspace}
                    <div class="m-2">
                        <Card href="/cards">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{workspace.name}</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt esse repudiandae eos ipsa.</p>
                        </Card>
                    </div>
                    {/each}
                 {/if}
        </div>
    </div>
    <Modal title="Create Workspace" bind:open={showForm} autoclose>
        <form>
          <div class="mb-6 flex flex-row space-x-4">
            <Label for="Visibility" class="mb-2">Visibility</Label>
            <Radio name="private" value="private" bind:group={selectedVisibility}>Private</Radio>
            <Radio name="shared" value="shared" disabled bind:group={selectedVisibility}>Shared</Radio>
          </div>
          <div class="mb-6 flex flex-row space-x-4">
            <Label for="Modality" class="mb-2">Modality</Label>
            <Radio name="text" value="text" bind:group={selectedModality}>Text</Radio>
            <Radio name="imagery" value="imagery" bind:group={selectedModality} disabled>Imagery</Radio>
            <Radio name="both" value="both" bind:group={selectedModality} disabled>Both</Radio>
          </div>
          <div class="mb-6 flex flex-row space-x-4">
            <Label for="select-embedding-model" class="mb-2">Embedding Model</Label>
            <Select id="select-embedding-model" items={embeddingModels} bind:value={selectedModel} placeholder='Embedding Model' />
          </div>
          <div class="mb-6 flex flex-row space-x-4">
            <Label for="select-data-sensitivity" class="mb-2">Data Sensitivity</Label>
            <Select id="select-data-sensitivity" items={dataSensitivity} bind:value={selectedSensitivity} placeholder='Data Sensitivity'/>
          </div>
          {#if selectedSensitivity === 'CUI'}
            <div class="mb-6 flex flex-row space-x-4">
                <MultiSelect bind:value={selectedDissemination}>
                    {#each dissemination as dissemination}
                        <option value={dissemination}></option>
                    {/each}
                </MultiSelect>
            </div>
          {/if}
          <div class="mb-6 flex flex-row space-x-4">
            <Input type="text" id="workspace-name" placeholder="Workspace Name*" required bind:value={workspaceName}/>
          </div>
          <div class="mb-6 flex flex-row space-x-4">
            <Textarea id="workspace-description" placeholder="Workspace Description" rows={4} name="message" bind:textContent={workspaceDescription}/>
          </div>
        <div class="mb-6 flex flex-row space-x-4">
          <Button on:click={() => showForm = !showForm}>Close</Button>
          <Button color="alternative" on:click={submitForm()}>Create</Button>
        </div>
    </form>
      </Modal>
</div>
