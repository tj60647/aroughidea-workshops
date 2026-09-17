# Adding Your Key to Vercel

*This guide covers step 8 of the [TLDR](/sharing-prototypes/tldr), with more explanation.*

*Accurate as of September 2026. If a button looks different, look for one with a similar name.*

---

## What This Is

Your agent needs your API key to reach Gemini on Vercel. You don't put the key in your code, because your repository is public. Instead, you store it in Vercel as an **environment variable**. When Vercel builds and runs your app, the app can read the key from there.

---

## Words You'll See

- **Environment variable:** a setting kept outside your code, with a name and a value. Here, the name is the one your app looks for, and the value is your key.
- **Redeploy:** build and publish the app again. Vercel only uses a new environment variable after a redeploy.
- **Server:** the computer that runs your app's hidden parts. Visitors can't see what's on it.
- **Browser:** the program your visitors use to open the app. Anything sent to the browser, a visitor can read.

---

## Before You Start

- You have an API key. See [Getting an API Key](/sharing-prototypes/api-key).
- You know how to publish from AI Studio and deploy with Vercel. See [Publishing from AI Studio to GitHub](/sharing-prototypes/publish-to-github) and [Deploying to Vercel](/sharing-prototypes/deploy-to-vercel).

---

## Step 8: Add Your Key to Vercel and Redeploy

1. **Publish your agent.** Open your agent in AI Studio, and publish it to a new GitHub repository. Then import that repository into Vercel. The steps are the same as for your basic app.

2. **Ask for the variable name.** Your app looks for the key under an exact name, and the name must match. Send AI Studio:

   > What do I need to deploy this app on Vercel? Tell me the exact name of the environment variable the app uses for the Gemini API key.

   Write down the name exactly, including capital letters and underscores.

3. **Add the variable.** In your Vercel project, open **Settings**, then **Environment Variables**. Enter the name from AI Studio as the key, and paste your API key as the value. Leave all environments selected, and press **Save**.

   Vercel may hide the value after you save it. That's normal. If you need the key again, copy it from AI Studio.

4. **Redeploy.** Vercel offers to redeploy after you save. Accept it. If you missed it, open **Deployments**, open the menu next to the newest deployment, and choose **Redeploy**.

5. **Open your address.** When the new deployment is **Ready**, open your address in a private window. Check that the agent loads.

6. **Test it.** Use the same prompts or script you used in AI Studio. Check that the agent responds, and notice anything it does differently.

### Is your key really private?

A key stored in Vercel stays on the server only if your app's code keeps it there. Some AI Studio app templates copy the key into the code sent to the browser when Vercel builds the app. Then any visitor can find it. Ask AI Studio:

> When this app is deployed on Vercel, does my Gemini API key stay on the server, or is it built into the code that the browser downloads? Explain in plain language, and don't show me the key.

To check properly, and to fix it, see [Protecting Your API Keys](https://prototypingtoolkit.aroughidea.com/protect-your-keys). Until then, share your address only with people you trust, and keep automatic reload off.

---

## Checkpoint

- Your Vercel project lists an environment variable with the name AI Studio gave you.
- The newest deployment is **Ready** and was made after you added the variable.
- Your agent responds at your Vercel address, in a private window, the way it does in AI Studio.

---

## If Something Goes Wrong

### It works in AI Studio but not on Vercel

Check these first:

- **Did you redeploy?** A deployment made before you added the variable doesn't have the key.
- **Is the name exact?** Compare it with AI Studio's answer, letter by letter. `GEMINI_API_KEY` and `GEMINI_KEY` are different names.
- **Did you paste the whole key,** with no spaces before or after it?
- **Have you hit a rate limit?** Wait a few minutes and try again. See [Getting an API Key](/sharing-prototypes/api-key).

If none of these is the problem, tell AI Studio what you expected, what happened instead, and where the app is deployed. For example:

> I am deploying this app on Vercel. I expected the agent to respond after I submitted the form, but nothing happens after deployment. Please identify and fix the problem.

Push the fix to GitHub, wait for Vercel, and test again. Keep going until the basic experience works.

### The page is blank or shows an error

Open your project in Vercel and check whether the newest deployment failed. If it did, copy the error, paste it into AI Studio, and ask it to explain and fix the problem.

---

## Reflect

- Did your agent behave differently on Vercel than in AI Studio? What might explain the difference?
- AI Studio's answer about the variable name: was it right the first time?
- Who would you share this address with now, and who would you wait to share it with?

---

## Next

Do the [Practice](/sharing-prototypes/practice) before the next workshop. Then continue with [Workshop 5: The Prototyping Toolkit](https://prototypingtoolkit.aroughidea.com/), which uses the same GitHub and Vercel steps with a coding assistant.
