# TLDR: AI as a Material

Learn where a model's behavior comes from, then design an agent's behavior by acting it out, writing it down and testing it.

1. **Learn how a model is made.** A language model is made in three steps: pretraining on huge amounts of text, fine-tuning on examples of prompts and responses, and learning from human feedback. Look at one real dataset for each step: [FineWeb](https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1), [Stanford Alpaca](https://huggingface.co/datasets/tatsu-lab/alpaca) and [Anthropic HH-RLHF](https://huggingface.co/datasets/Anthropic/hh-rlhf). [More detail](/ai-as-material/how-a-model-gets-made)

   **Check:** you can say which step turns a text predictor into a helpful assistant. (Fine-tuning.)

2. **Compare other kinds of models.** Reasoning, world, embodied and action models all learn from examples. What changes is what they're shown and what they learn to predict. [The comparison table](/ai-as-material/how-a-model-gets-made#step-2-compare-other-kinds-of-models)

   **Check:** you can name what a world model learns to predict. (What happened next.)

3. **Bodystorm a letter-writing assistant.** In a group of 3 or 4, one person is the user, one is the Letter Writing Assistant, and the others observe. Pick a goal card from the [Bodystorming Kit](/ai-as-material/bodystorming-kit) and act it out for 10 minutes. At minute 5, the user reveals one more note. At minute 8, the user adds a new constraint.

   Working alone? You play the assistant, and ChatGPT plays the user. Send ChatGPT this, with the brackets filled in from a goal card:

   > Play a user who wants help writing a letter. I'll play a letter-writing assistant. Here is your goal card and your rough notes: [paste the goal card and notes]. Behave like a real person: answer my questions honestly, but don't volunteer information, don't organize your thoughts for me, and don't work out what I need. After my fifth reply, reveal this extra note: [paste the reveal note]. After my eighth reply, add this new constraint: [paste the new constraint]. Stay in character until I say "stop".

   [More detail](/ai-as-material/bodystorming)

   **Check:** the observers have sticky notes of what happened, or you have a saved chat to read back.

4. **Debrief.** Take 3 minutes to reflect as a group. Then share: the assistant speaks first, then the user, then the observers. Discuss: how did you know you were done? How did you manage scope? Did you act like an assistant, or like a chatbot? Who "owned" the assistant? [The full question list](/ai-as-material/bodystorming#step-4-debrief)

   **Check:** you've written down where the assistant struggled, and where it needed judgment.

5. **Write a role card.** Describe the assistant: role name, purpose, behavioral rules, boundaries, what it does not do, knowledge, required inputs and outputs. It doesn't need to be perfect. [More detail](/ai-as-material/role-card)

   **Check:** every field has at least one line.

6. **Test the role in Agent Studio.** Open [Agent Studio](https://agentstudio.aroughidea.com/) and set up a new agent. Paste this into its system instructions, with the brackets replaced from your role card:

   > Role name: [the role's name]
   >
   > Purpose: [what the assistant is for, in one or two sentences]
   >
   > Behavioral rules: [how it behaves: what it asks, how it sets its tone, when it stops]
   >
   > Boundaries: [what it stays within]
   >
   > Does not do: [what it never does]
   >
   > Required inputs: [what it must learn from the user before it writes]
   >
   > Outputs: [what it produces]

   Paste your knowledge into its knowledge, up to one page. Then play the user from a goal card, and send the agent your first message, for example:

   > I need to write to my landlord. The heater is broken.

   Judge its replies, change your role card, and try again. [More detail](/ai-as-material/agent-studio)

   **Check:** you can point to one reply you'd change, and the line of your role card that caused it.

7. **Sort each sentence into the right place.** Use the checklist to decide whether each sentence belongs in the system instructions, the knowledge base, or your design documentation. [The checklist](/ai-as-material/right-place)

   **Check:** your system instructions contain no "because", "so that" or "we decided".

**Next:** keep iterating on your agent with the [Practice](/ai-as-material/practice) page.
