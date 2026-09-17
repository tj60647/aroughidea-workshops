# Publishing from AI Studio to GitHub

*This guide covers step 2 of the [TLDR](/sharing-prototypes/tldr), with more explanation.*

*Accurate as of September 2026. If a button looks different, look for one with a similar name.*

---

## What This Is

This is the first half of the pipeline: AI Studio → GitHub. AI Studio creates a new repository on GitHub and copies your app's files into it. After that, the two stay connected. When you change the app in AI Studio, you can send the change to GitHub with one button.

---

## Words You'll See

- **Repository:** a project's folder of files on GitHub, with its history.
- **Push:** send changes to GitHub.
- **Sync:** keep two copies the same. When AI Studio and GitHub are in sync, they hold the same files.
- **Branch:** a line of work in a repository. Yours is called `main`, and it's the one Vercel will publish.
- **Public / Private:** who can see a repository. Anyone on GitHub can see a public one. Only you, and people you invite, can see a private one.

---

## Before You Start

- You have a GitHub account. See [Creating Your Accounts](/sharing-prototypes/accounts).
- You have a basic app in AI Studio, such as the one from Workshop 3's practice. **Start with an app that doesn't need an API key.** Keys come later, in [Getting an API Key](/sharing-prototypes/api-key).

---

## Step 2: Publish from AI Studio to GitHub

1. **Start publishing.** Open your app in AI Studio. Find **Publish** at the top right and press it.
2. **Choose GitHub.** In the panel that opens, press **GitHub**. The first time, AI Studio asks you to sign in to GitHub and approve the connection.
3. **Press Create new repository.** The panel explains that AI Studio will create a new GitHub repository, and that changes will sync both ways between AI Studio and GitHub.
4. **Name it.** Give the repository a short name and a description. For example, `camera-obscura-explainer` and "Explains camera obscuras". Use lowercase letters and hyphens, with no spaces.
5. **Choose the visibility.** Set it to **Public**. Private is the default. A public repository lets others see how the app is made, and anyone on GitHub can read its files. That's a good reason never to put a key or password in your app's code.
6. **Press Create GitHub repository.** Wait while AI Studio sets it up. You'll see "Syncing your changes".
7. **Push your files.** The panel now shows your repository's name, such as `your-username/camera-obscura-explainer`, and the branch `main`. It says "Changes in Google AI Studio are ready to be pushed". Press **Push changes to GitHub**, and wait while it says "Pushing changes to GitHub".
8. **Check the sync.** The panel says "GitHub & Google AI Studio are currently in sync". Press the arrow next to the repository name to open it on GitHub.
9. **Look at GitHub.** You'll see your repository with its files: a `src` folder, `index.html`, `package.json` and others. That's your project on GitHub.

You don't need to understand the files. They're the app AI Studio built for you, written out as code.

---

## Checkpoint

- The AI Studio panel says "GitHub & Google AI Studio are currently in sync".
- Your repository opens on GitHub, at an address like `github.com/your-username/camera-obscura-explainer`, and lists your app's files.

---

## If Something Goes Wrong

**I can't find Publish.** Make sure you've opened an app you built, not the chat. Look along the top right of the screen.

**AI Studio says the name is taken.** You already have a repository with that name. Choose a different name.

**The push is stuck.** Wait a minute, then close the panel and open it again. If it still hasn't finished, refresh the page and check whether the files have reached GitHub.

---

## Reflect

- You chose Public. Is there anything in your app you'd rather people didn't see?
- Open one file on GitHub, such as `index.html`. What can you recognize from your app?

---

## Next

[Deploying to Vercel](/sharing-prototypes/deploy-to-vercel) puts your app online.
