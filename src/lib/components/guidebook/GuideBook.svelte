<script>
    import { Heading, Span } from 'flowbite-svelte';
  </script>

  <div class="container mx-auto p-10 h-[calc(100vh-74px)] overflow-auto">
    <div class="flex flex-col">
        <div>
            <Heading tag="h1">Generative AI and Guidance for Use</Heading>
            <div class="flex flex-row py-6 px-10 text-red-100 bg-red-950 my-5">
                <div class="flex flex-row">
                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f03e16"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                    <div>
                        <p class="content-center">NIPRGPT is NOT authorized for use with</p>
                        <ul class="list-disc p-2">
                            <li>Information protected by the Privacy Act of 1974, as amended (PII); or</li>
                            <li>Information protected by the Health Insurance Portability and Accountability Act (HIPAA/PHI)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex flex-row py-6 px-10 text-green-100 bg-green-950">
                <div class="flex flex-row">
                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#34ab05"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/></svg>
                    <div>
                        <a>AFRL is encouraging safe, responsible experimentation with Generative AI and Large Language Models (LLMs) throughout the entire Department of the Air Force (DAF) enterprise. Please read the Rules for Use carefully.</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="m-5">
            <ul class="list-disc list-outside p-2">
                <li>Rules for Use</li>
                <li>About Generative AI</li>
                <li>The DoD and Generative AI</li>
                <li>Prompt Engineering and Best Practices</li>
                <li>Keep In Mind</li>
                <li>Provide Feedback</li>
            </ul>
        </div>
        <div>
            <Heading tag="h1" class="mb-4">
                <Span gradient>Rules</Span> for use
            </Heading>
            <div>
                <ul class="list-decimal p-2 list-outside">
                    <li class="p-2"><b>Prohibited Use</b>: The use of AI tools to create deceptive, misleading, or content that violates law or Executive Branch, DoD, DAF, For Service direction or policy is expressly prohibited.</li>
                    <li class="p-2"><b>Existing Processes</b>: Use NIPRGPT to aid in the execution of existing processes. Do not use NIPRGPT to undertake new activities or mission areas without first consulting your servicing legal office.</li>
                    <li class="p-2"><b>Ethical Use</b>: Use these tools in a manner that is ethical and in line with DoD AI ethical principles and AFRL and DAF values.</li>
                    <li class="p-2">Chat data is used for research purposes within AFRL. No other normal user can see your chats, but researchers, system administrators and program owners will use this research platform to understand the general use and value that users are finding with LLMs.</li>
                    <li class="p-2"><b>Device Access</b>: Access using your work-issued device at the Unclassified level.</li>
                    <li class="p-2"><b>Appropriate Purpose</b>: NIPRGPT should not be asked or used to make decisions, exercise judgment, or used to inform decisions around fairness, safety, equity, or rights.</li>
                    <li class="p-2"><b>Appropriate Citation</b>: When formal citations are expected or required, or as otherwise appropriate, consider citing “Assisted by NIPRGPT” on documents, it might be important for readers to understand that you used a GenAI capability to develop your product.</li>
                    <li class="p-2"><b>Total Accountability</b>: Users are responsible and accountable for any information obtained via a NIPRGPT query. Always fact-check and curate the results. AI is simply a tool to help you access appropriate information at speed and scale. The accuracy of such knowledge is not guaranteed, and responsible review is required.</li>
                    <li class="p-2"><b>Update Dates are Variable</b>: Do not assume the most immediate and recent information is necessarily available.</li>
                    <li class="p-2"><b>Uploaded Files</b>: Only upload approved files from a work-issued device that have been scanned by an antivirus software prior to uploading.</li>
                    <li class="p-2"><b>No Personal Use</b>: Do not use the tool for personal activities. Do not try to “break” the AI.</li>
                    <li class="p-2"><b>Report Any Issues</b>: Report any issues or suspected privacy violations to the product's support team, via the Feedback & Support feature.</li>
                </ul>
            </div>
        </div>
        <div>
            <Heading tag="h1" class="mb-4">
                <Span gradient>About </Span> Generative AI
            </Heading>
            <p>
                Generative Artificial Intelligence (Generative AI) is type of artificial intelligence (AI) that uses machine learning models to generate content, such as text, images, videos, or music. Generative AI models learn patterns and structures from large sets of data and use that knowledge to generate new content. Generative AI models that solely take text as input and generate text as output are commonly referred to as Large Language Models (LLMs). Models that take both text and images and/or video as input are known as Vision Large Large Models (VLLMs) or Multi-Modal Large Language Models (MLLMs). As you interact and experiment with Generative AI models, be aware of and consider their shortcomings.
            </p>
            <div>
                <Heading tag="h2" class="mb-4">
                    <Span gradient>Lack of </Span> Control
                </Heading>
                <p>
                    Because Generative AI models are trained on vast amounts of data and generate content based on learned patterns, they can be difficult to control. They may not follow explicit instructions in their entirety; generated content may not always meet specific criteria or produce the desired output. Minor variations between input prompts have the potential to drastically affect the generated output.
                </p>
                <a>For more information on how to mitigate this issue, see Prompt Engineering.</a>
            </div>
            <div>
                <Heading tag="h2" class="mb-4">
                    <Span gradient>Outdated and Inaccurate </Span> Information
                </Heading>
                <p>
                    Generative AI models can generate out-of-date or false information if the data they were trained on was not current or contained factual errors. The information the models were trained on and can answer questions about is known as its parametric knowledge. By themselves, Generative AI models do not have access to real-time information through their parametric knowledge and cannot answer questions regarding events that occurred after they were last trained, commonly referred to as a “knowledge cut-off” date. When interacting with a LLM, be aware of its knowledge cut-off date. The knowledge cut-off date can usually be obtained by interrogating the LLM. Techniques such as Retrieval Augmented Generation (RAG), which allow the model to access up-to-date information from external data sources, help combat this issue but do not eliminate it entirely. Always fact-check generated content with reliable external sources.
                </p>
            </div>
            <div>
                <Heading tag="h2" class="mb-4">
                    <Span gradient>Hallucinations </Span>
                </Heading>
                <p>
                    Generative AI models may generate or “hallucinate” nonsensical output that is unrelated to the input prompt. This occurs when the model generates output using learned patterns and parametric knowledge, ignoring specific instructions or information provided within the input prompt. Always carefully review generated content for accuracy and relevancy. Specific references and citations generated by the model such as websites, news articles, or documents may not be real and/or relevant to the generated content, even when using RAG. Use caution when accessing a URL generated by a model. The safety of the external resource is not guaranteed.
                </p>
            </div>
            <div>
                <Heading tag="h2" class="mb-4">
                    <Span gradient>Bias </Span>
                </Heading>
                <p>
                    Generative AI models can learn harmful human biases and stereotypes present within their training data, perpetuating and amplifying them through their generated content.
                </p>
            </div>
            <div>
                <Heading tag="h2" class="mb-4">
                    <Span gradient>Misinformation </Span>
                </Heading>
                <p>
                    Generative AI content can be difficult to distinguish between human-generated content and can be used to deliberately spread harmful misinformation. Usage of NIPRGPT for this purpose is expressly prohibited.
                </p>
            </div>
            <div>
                <Heading tag="h2" class="mb-4">
                    <Span gradient>Evaluation </Span>
                </Heading>
                <p>
                    Evaluating the quality and accuracy of the output of Generative AI models is challenging and subject to human judgment. Standard evaluation metrics such as accuracy, precision, and recall are generally not appropriate or meaningful.
                </p>
            </div>
        </div>
        <div>
            <Heading tag="h1" class="mb-4">
                <Span gradient>The DoD and </Span> Generative AI
            </Heading>
            <p>
                Ethical use of AI in the DoD is a complex evolving topic.
            </p>
            <div>
                <Heading tag="h2" class="mb-4">
                    <Span gradient>Task Force  </Span>Lima
                </Heading>
                <p>
                    Deputy Secretary of Defense Kathleen H. Hicks released a memo on August 10th, 2023 regarding the usage of Generative Artificial Intelligence (GenAI) capabilities, including Large Language Models (LLMs), within the Department of Defense (DoD). This memo outlines the establishment of a task force, Task Force Lima, focused on exploring and responsibly implementing usage within DoD. These AI capabilities can create detailed content without human input, presenting both opportunities and risks. The task force, led by the Chief Digital and Artificial Intelligence Officer (CDAO), will evaluate, recommend, and oversee the use of generative AI technologies across the DoD to ensure responsible and secure implementation. It will collaborate closely with key DoD offices and agencies to address policy, acquisition, intelligence, and cybersecurity aspects. The task force aims to accelerate innovation, promote responsible implementation, and engage with partners to ensure the safe and effective use of Generative AI in national security efforts. The Task Force aims to accelerate promising AI initiatives, federate research efforts, evaluate solutions, drive education and culture change, and ensure coordinated engagement with partners. Lessons learned will be shared through the Responsible AI Working Council to inform policy and initiatives across the DoD. The memorandum emphasizes responsible adoption and use of generative AI to advance national security. Responsible AI usage refers to the ethical and sustainable deployment of artificial intelligence systems. It involves ensuring that AI technologies are developed, implemented, and managed in ways that are fair, transparent, and accountable. Overall, responsible AI usage requires a holistic approach that considers the social, ethical, and environmental implications of AI technologies and seeks to maximize their benefits while minimizing their risks and harms.
                </p>
                <a>To read Deputy Secretary of Defense Kathleen H. Hicks' memo, click here.</a>
            </div>
            <div>
                <Heading tag="h2" class="mb-4">
                    <Span gradient>Responsible AI (RAI)  </Span> Toolkit
                </Heading>
                <p>
                    The Responsible Artificial Intelligence (RAI) Toolkit is a key deliverable of the RAI Strategy & Implementation Pathway, adopted by the Deputy Secretary of Defense in June 2022. It provides a voluntary process for identifying, tracking, and improving alignment of AI projects to RAI best practices and the DoD AI Ethical Principles, while promoting innovation. The Toolkit is built upon proven RAI/AI Ethical frameworks, assessments, and toolkits, and offers an intuitive flow with tailorable and modular assessments, tools, and artifacts throughout the AI product lifecycle. The CDAO has made the Toolkit accessible to the public to bring transparency to the DoD's approach to Responsible AI.                
                </p>
                <a>For more information on the RAI Toolkit, click here.</a>
                <a>To view Deputy Secretary of Defense, Implementing Responsible Artificial Intelligence in the Department of Defense, 26 May 2021, click here.</a>
            </div>
        </div>
        <div>
            <Heading tag="h1" class="mb-4">
                <Span gradient>Prompt Engineering and Best Practices</Span>
            </Heading>
            <Heading tag="h4" class="mb-4">
                <Span gradient>To Achieve Effective and Accurate Results</Span>
            </Heading>
            <div>
                <Heading tag="h2" class="mb-4">
                    <Span gradient>Prompt Engineering  </Span>
                </Heading>
                <p>
                    Prompt engineering is the process of designing and curating an optimal input (prompt) to a Generative AI model to elicit a specific response. Due to the nature of Generative AI models, minor perturbations within input prompts can significantly affect model output. Effective prompts should provide sufficient context, examples, and clear and concise instructions to guide the model to accurately produce the desired output. Experimenting with different prompts is essential to get the most benefit from using Generative AI models. Prompt engineering is a continuous process.
                </p>
            </div>
            <div>
                <Heading tag="h2" class="mb-4">
                    <Span gradient>Best Practices </Span>
                </Heading>
                <ul class="list-disc list-outside p-2">
                    <li>Define Clear Objectives: Know what you want to achieve with the AI tool to provide precise inputs.</li>
                    <li>Use Detailed Prompts: Provide detailed and specific prompts to get more accurate and relevant outputs.</li>
                    <li>Iterative Process: Treat interactions as iterative, refining prompts based on previous outputs.</li>
                    <li>Cross-Verify Information: Always cross-check AI-generated information with reliable sources.</li>
                    <li>Understand the Limits: Recognize the limitations of AI and do not expect it to perform beyond its capabilities.</li>
                    <li>Be Specific: The more specific the information requested, the more accurate the AI’s response will be.</li>
                    <li>Use Structured Data: When possible, provide data in a structured format to improve processing accuracy.</li>
                    <li>Bias Awareness: Be aware of and actively mitigate biases in AI responses.</li>
                    <li>Consistent Review: Regularly review AI-generated content for relevance and accuracy.</li>
                    <li>Use Multiple Tools: Utilize different AI tools when necessary to benefit from various strengths.</li>
                </ul>
            </div>
        </div>
        <div>
            <Heading tag="h1" class="mb-4">
                <Span gradient>Keep In Mind</Span>
            </Heading>
            <div>
                <Heading tag="h2" class="mb-4">
                    <Span gradient>Watch Out for Hallucinations & Manage Expectations</Span>
                </Heading>
                <ul class="list-disc list-outside p-2">
                    <li>LLMs are not foolproof: They can make mistakes, generate nonsensical text, or produce inaccurate or offensive content.</li>
                    <li>Fact-check: Do not take an LLM's output as absolute truth, especially for sensitive topics. Always verify information with reliable sources.</li>
                </ul>
            </div>
            <div>
                <Heading tag="h2" class="mb-4">
                    <Span gradient>LLMs are not Sentient</Span>
                </Heading>
                <ul class="list-disc list-outside p-2">
                    <li>LLMs are patterns, not people: LLMs are powerful tools, but they do not have their own thoughts, feelings, or consciousness. They process and generate text based on massive amounts of data they've been trained on.</li>
                    <li>Avoid anthropomorphizing: Don't attribute human-like motivations or emotions to the model. It is a complex algorithm, not a person.</li>
                </ul>
            </div>
            <div>
                <Heading tag="h2" class="mb-4">
                    <Span gradient>Be Aware of Biases</Span>
                </Heading>
                <ul class="list-disc list-outside p-2">
                    <li>Data reflects the world: LLMs are trained on massive amounts of real-world text data, which includes human biases and stereotypes. Be mindful that these biases can be reflected in the model's output.</li>
                    <li>Challenge assumptions: Actively look for potential biases in generated responses. Consider the source of the LLM's training data and how it might be influencing the output.</li>
                </ul>
            </div>
            <div>
                <Heading tag="h2" class="mb-4">
                    <Span gradient>Input Matters</Span>
                </Heading>
                <ul class="list-disc list-outside p-2">
                    <li>The quality of your prompts and inputs directly influences the quality of the LLM's response. Workspaces and Retrieval Augmented Generation (RAG) help you refine your data that feeds the model to increase the potential confidence in the results.</li>
                    <li>Be specific and clear: Provide context and well-defined instructions to get the best results.</li>
                </ul>
            </div>
            <div>
                <Heading tag="h2" class="mb-4">
                    <Span gradient>Use Responsibly</Span>
                </Heading>
                <ul class="list-disc list-outside p-2">
                    <li>Be transparent about when you are using an LLM, especially in situations where people might expect human interaction.</li>
                </ul>
            </div>
        </div>
        <div>
            <Heading tag="h1" class="mb-4">
                <Span gradient>Provide Feedback</Span>
            </Heading>
            <div>
                <ul class="list-disc list-outside p-2">
                    <li>Report Harmful Content: Flag offensive or dangerous responses for review and improvement.</li>
                    <li>Iterate and Improve: Help the LLM learn by providing feedback on its responses. This contributes to the ongoing development of these models. Ask for new features. This is an “ALPHA” or early release for research purposes, that will constantly be improved.</li>
                    <li><a>Submit feedback to afrl.ri.niprgpt@us.af.mil</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
