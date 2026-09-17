# Deploying to Vercel

*This guide covers steps 3 and 4 of the [TLDR](/sharing-prototypes/tldr), with more explanation.*

*Accurate as of September 2026. If a button looks different, look for one with a similar name.*

---

## What This Is

This is the second half of the pipeline: GitHub → Vercel → the world. Vercel reads your repository, turns its files into a working website, and gives it an address. From then on, Vercel watches your repository. Each time you push a change to the `main` branch, Vercel builds and publishes the site again.

---

## Words You'll See

- **Import:** tell Vercel to use a GitHub repository for a new project.
- **Build:** the step where Vercel turns your project's files into a working website.
- **Deploy:** put a version of your app online. Each version is a **deployment**.
- **Preset:** the type of project Vercel detects, such as Vite. It tells Vercel how to build your app. You don't need to change it.
- **Domain:** your site's web address.
- **Signed out:** not signed in to any account. This is how most visitors will see your app.

---

## Before You Start

- Your app is on GitHub. See [Publishing from AI Studio to GitHub](/sharing-prototypes/publish-to-github).
- You can sign in to Vercel. See [Creating Your Accounts](/sharing-prototypes/accounts).

---

## Step 3: Deploy to Vercel

1. **Add a project.** On your Vercel dashboard, press **Add New…**, then **Project**.
2. **Import your repository.** Under **Import Git Repository**, find your repository and press **Import**.
3. **Deploy.** Check the project name. It becomes part of your address, so keep it short. Vercel detects the preset, for example **Vite**; leave it as it is. Press **Deploy**, and wait while Vercel builds your app. This usually takes a minute or two.
4. **Continue.** Vercel says "Congratulations!" and shows a preview of your app. Press **Continue to Dashboard**.
5. **Find your address.** On the project page, under **Domains**, is your site's address. It looks like `your-project-name.vercel.app`, with the status **Ready**.

To update the site from now on, push to the `main` branch. You never need to press Deploy again.

---

## Step 4: Open Your Address Signed Out

You're signed in to Vercel, so your browser may show you things a visitor can't see. Check what everyone else sees:

1. Open a **private** or **incognito** window. In most browsers, it's in the File menu or the menu with three dots.
2. Paste your address and open it.
3. Try the app: the page, the navigation, the buttons and anything else you can click.
4. Send the address to at least one other person, and ask them to try the same things.

---

## Checkpoint

- Your project page in Vercel shows an address ending in `.vercel.app`, with the status **Ready**.
- The address opens your app in a private window.
- Someone else can open it too.

---

## If Something Goes Wrong

**My repository isn't listed.** Vercel may not have access to it yet. Look for a link near the list to adjust your GitHub permissions, such as **Configure GitHub App**, and allow Vercel to see the repository. Then return to Vercel and refresh.

**The build failed.** Vercel shows an error log. Copy the error, paste it into AI Studio, and ask it to explain and fix the problem. Then push the fix to GitHub. Vercel tries again on its own.

**A visitor sees a Vercel sign-in page instead of my app.** They may have a preview address, which Vercel can keep private. Send them the address listed under **Domains**. If that one also asks them to sign in, look in your project's **Settings** under **Deployment Protection**.

**The app works in AI Studio but not on Vercel.** Tell AI Studio what you expected, what happened instead, and where the app is deployed. [Changing and Sharing Your Prototype](/sharing-prototypes/change-and-share) has an example.

---

## Reflect

- How long did it take from pressing Deploy to having a working address?
- Did the app look or behave any differently at the Vercel address than in AI Studio?
- What did the other person try first? Was it what you expected?

---

## Next

[Changing and Sharing Your Prototype](/sharing-prototypes/change-and-share) sends a change through the whole pipeline.
