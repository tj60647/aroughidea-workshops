# TLDR: Sharing AI Prototypes

Do one step at a time. Each step links to a guide with more explanation if you get stuck.

1. **Create your accounts.** Sign up for [GitHub](https://github.com/) and [Vercel](https://vercel.com/) with the **Sign up** button at the top right. Sign up for Vercel with your GitHub account; it's the easiest way to connect the two. You already have AI Studio from Workshop 3.

   Check that you can sign in to both. [Accounts help](/sharing-prototypes/accounts)

2. **Publish from AI Studio to GitHub.** Open your basic app in AI Studio. Press **Publish** (top right), then **GitHub**, then **Create new repository**. Give it a name and a short description, set the visibility to **Public** (anyone can then see your code), and press **Create GitHub repository**. Then press **Push changes to GitHub**.

   Check that the panel says "GitHub & Google AI Studio are currently in sync", and that your repository on GitHub lists files such as `src`, `index.html` and `package.json`. [GitHub help](/sharing-prototypes/publish-to-github)

3. **Deploy to Vercel.** On your Vercel dashboard, press **Add New…**, then **Project**. Find your repository under **Import Git Repository** and press **Import**. Check the project name, then press **Deploy**.

   Check that Vercel says "Congratulations!". Press **Continue to Dashboard**, and find your address under **Domains**. It ends in `.vercel.app`. [Vercel help](/sharing-prototypes/deploy-to-vercel)

4. **Open your address signed out.** Open the address in a private or incognito window, where you aren't signed in to anything. Then send it to someone else and ask them to try it.

   Check that the app loads for both of you. [Vercel help](/sharing-prototypes/deploy-to-vercel)

5. **Change it and watch it update.** Send AI Studio a change, for example:

   > Change the tone of this app to deadpan. Keep the content and the way it works the same.

   Try the change in AI Studio, then open the GitHub panel again and press **Push changes to GitHub**. Vercel redeploys on its own.

   Check that, after a minute or two, refreshing your address shows the change. [Change help](/sharing-prototypes/change-and-share)

6. **Swap and share.** Swap addresses with someone and try each other's apps. Tell them your design intention, one thing the AI did surprisingly well, and one thing you'd change next.

   Check that you have one piece of feedback to act on. [Sharing help](/sharing-prototypes/change-and-share)

7. **Get an API key.** An app that uses AI needs a key to work on Vercel. Choose a path: the free tier, or a small prepaid balance with automatic reload turned off. Create the key in AI Studio and keep it private. A student or consumer Gemini subscription doesn't include an API key.

   Check that you've copied your key and saved it somewhere private. [API key help](/sharing-prototypes/api-key)

8. **Add your key to Vercel and redeploy.** Publish your agent to GitHub and Vercel, the same way as steps 2 and 3. Then ask AI Studio which variable name to use:

   > What do I need to deploy this app on Vercel? Tell me the exact name of the environment variable the app uses for the Gemini API key.

   In your Vercel project, add an environment variable with that name and your key as its value, then redeploy. A Vercel variable alone doesn't always keep a key private; see [Protecting Your API Keys](https://prototypingtoolkit.aroughidea.com/protect-your-keys).

   Check that your agent responds at your Vercel address the way it does in AI Studio. [Key help](/sharing-prototypes/key-on-vercel)

When you're done, do the [Practice](/sharing-prototypes/practice) before the next workshop.
