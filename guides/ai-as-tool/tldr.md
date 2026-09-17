# TLDR: AI as a Tool

Build apps by describing them in Google AI Studio, then give it your design so the agent inside behaves the way you intend.

1. **Read what "vibe coding" means.** Instead of writing every line of code yourself, you steer an AI as it writes software: you prompt, test, give feedback and ask it to fix errors. [What vibe coding is](/ai-as-tool/vibe-coding)

   Check: you can say in one sentence how this is like sketching.

2. **Give a model a code prompt.** Send this to a chatbot, such as ChatGPT:

   > I need code for a basic app that draws a blue circle using React and JavaScript, no CSS.

   Check: the reply is text, the code for an app, not a blue circle. [More detail](/ai-as-tool/chatbots-and-vibe-coding)

3. **Look under the hood.** Open the [ChatGPT Canvas example](https://chatgpt.com/canvas/shared/69f802d37b308191be2b850a065790e7) and the [Agent Studio vibe-coding demo](https://agentstudio.aroughidea.com/w/vibe-coding-demo). Switch between the running app and its code.

   Check: you found the code that the running app is made from. [More detail](/ai-as-tool/chatbots-and-vibe-coding#step-3-look-under-the-hood)

4. **Build a basic app in AI Studio.** Open [Google AI Studio](https://aistudio.google.com/) and sign in. Use a personal Google account if your school's account blocks AI Studio. Start a new app and send AI Studio this:

   > Build a simple one-page app that explains how a camera obscura works, for someone who has never heard of one. Use a diagram and a short step-by-step explanation. Don't add any AI features.

   Check: the app runs in AI Studio's preview, and you can change it by asking. [More detail](/ai-as-tool/basic-app)

5. **Ask for a letter-writing assistant with no guidance.** Start a new app and send AI Studio this:

   > Build a letter-writing assistant.

   Check: you've noted what AI Studio decided on its own: the screen, the features and how the agent behaves. [More detail](/ai-as-tool/your-design)

6. **Give AI Studio your design.** Write your design intent, a user journey and a test script first. Then start a new app, fill in the brackets, paste your role card, and send AI Studio this:

   > Build a letter-writing assistant app with an AI agent inside it.
   >
   > Design intent: [what the app is for, who it's for, and what a good result looks like]
   >
   > User journey: [the story of one person using the app, from arriving to leaving with what they came for]
   >
   > System instructions: use the role card below as the agent's system instructions. Don't add behavior it doesn't describe.
   >
   > [paste your role card]
   >
   > Test script: I'll test the agent with these prompts, so make sure the app lets me try each one: [your test prompts]
   >
   > Before you build, tell me in a few sentences how you understood the design, and ask me about anything that's unclear.

   Check: AI Studio's summary matches what you meant. [More detail](/ai-as-tool/your-design#step-6-give-ai-studio-your-design)

7. **Ask for a system diagram.** Send AI Studio this:

   > Add an info button to the app. When someone clicks it, show a simple system diagram of how the app works, including the agent: what the user puts in, what the agent is given, and what comes back. Use everyday words.

   Check: the diagram names your agent and matches how you think the app works. [More detail](/ai-as-tool/your-design#step-7-ask-for-a-system-diagram)

8. **Test and revise at least three times.** Type each prompt from your test script into the app and note the replies. Then describe one change to AI Studio:

   > Change the app: [what you saw, and what you want instead]. Keep everything else the same, and tell me what you changed.

   Check: after three rounds, you can say what each change did to the agent's behavior. [More detail](/ai-as-tool/test-and-revise)

**Next:** keep going with [Practice](/ai-as-tool/practice), and try a different design goal.
