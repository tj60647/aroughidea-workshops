# Practice: Sharing AI Prototypes

Do this before the next workshop. Part 1 uses your basic app. Part 2 uses your agent, and needs an API key.

---

## Part 1: Publish and Test a Basic App

1. Publish your basic app from AI Studio to GitHub, then deploy it with Vercel. See [Publishing from AI Studio to GitHub](/sharing-prototypes/publish-to-github) and [Deploying to Vercel](/sharing-prototypes/deploy-to-vercel).
2. Open your Vercel address in a private window, where you aren't signed in, and check that the app loads.
3. Share the address with at least one other person. Ask them to check the page, the navigation, the buttons and anything else they can click.
4. If something doesn't work, tell AI Studio what you expected, what happened instead, and where the app is deployed. Use simple, direct language. For example:

   > I am deploying this app on Vercel. I expected the button to open the next page, but nothing happens after deployment. Please identify and fix the problem.

5. Keep changing, publishing and testing until the basic experience works.

---

## Part 2: Publish and Deploy Your Agent

1. Choose an API key path, and get your key. See [Getting an API Key](/sharing-prototypes/api-key).
2. Ask AI Studio what your agent needs to run on Vercel:

   > What do I need to deploy this app on Vercel? Tell me the exact name of the environment variable the app uses for the Gemini API key.

3. Publish your agent from AI Studio to GitHub, then import it into Vercel.
4. In Vercel, add an environment variable with the name AI Studio gave you, and your key as its value. See [Adding Your Key to Vercel](/sharing-prototypes/key-on-vercel).
5. Redeploy. Vercel offers to do this after you add the variable.
6. Open your Vercel address and check that the agent loads.
7. Test the agent with the same prompts or script you used in AI Studio.
8. If something doesn't work, tell AI Studio the same way. For example:

   > I am deploying this app on Vercel. I expected the agent to respond after I submitted the form, but nothing happens after deployment. Please identify and fix the problem.

9. Keep going until the basic experience works.
10. Share the address with at least one other person.

---

## Journal

Add an entry to your [process journal](/practice/journal). Never include your API key.

- **Your Vercel addresses:** one for the basic app, one for the agent.
- **Your key path:** free tier or prepaid, and why.
- **What worked, and what broke:** and how you fixed it.
- **AI Studio and Vercel:** any differences between how your agent behaved in each.
- **Other people:** what the people who tried your apps did, and what surprised you.
