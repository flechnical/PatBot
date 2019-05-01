# PatBot - Discord.js-powered bot

![PatBot Logo](https://user-images.githubusercontent.com/3502217/57027656-48b2e800-6c3d-11e9-8c8e-6cc652437328.png)

## Why PatBot?

The users on my Discord Server (me included) always used the "general" text chat to share links and send out-of-context texts while in a group voice call. I set up text channels for these off-topic messages, but no-one was using them. So I had to think of a way to disable the "general" chat for someone when they join a voice channel. After trying out a few different pre-made and hosted-for-you bots, I realized that they all lack this functionality and learned how to code and host it myself.

### But why "Pat"Bot?

I'm a fan of memes and just like Patrick watching over Spongebob for his own good, I want PatBot to watch over my cube-headed users (me included). Also this:

> We should take unrelated voice-channel text-chat from _general_ and push it somewhere else (pat = private automatic text-chats)!

---

## How does a Discord bot work?

A Discord bot essentially acts like a Discord user 👤. It has to be invited to and usually requires admin privileges on your Discord Server to be able to manage user permissions, send chat messages, create/rename/delete channels, join voice channels to play music, ...you get the idea.

For the moment just imagine a little robot 🤖 in front of you, who could just walk over to your second PC or laptop 💻, log into his own Discord account and send you text messages over the Internet (just like normal humans with a healthy relationship would do). The robot stands for our PatBot code (🤖=📄) in this GitHub repository.

For the robot to be able to login you first have to set up his/her user account (this is always the first step to creating a Discord bot). You can do this in the Developer Portal online 👩‍💻 (more on this below). It makes you feel like a proud parent signing up their kid for adop... \*_cough_\* for kindergarten.

Now imagine strapping a rocket to the robot 🚀🤖 and sending it up to a cloud ☁ in the sky. Then the little robot transforms (the TV show not the movie adaptation) and plugs into a server 🖥🔌 standing on top of this cloud. Our bot is now hosted by the server, but the server (usually) does not respond to http-requests like a normal web server. Instead it acts like a computer with Discord installed and access to the Internet. Our bot can now use this PC to interact with us on Discord.

The only difference is that our bot is logged in with a bot account not a normal Discord user account. From what I've gathered, there used to be a time when Discord did not provide a programming interface for bots and people coded their own programs that acted like "real" Discord users and ran on real computers using the Discord desktop client to run commands. This is not that. Our bot is 💯% organic 🐄 (it runs as a node.js process on the server in case you were wondering).

### What is Discord.js?

Discord.js is a JavaScript library that provides simple functions that can be run by the server. These functions communicate with the Discord api so our bot code can login and send instructions to the Discord Server, just like you when you click into the `input` field in a text channel, enter text and press `Submit`.

---

## Installation Instructions

The bot in this repository is not a .exe file you can download on your computer and install. It is a script that has to run on a server. So for testing and configuration, we will set up a server on our own PC. We will then download the source code and tell our server to run it. The code will connect to the Internet from our PC and will log into the bot account we will create.

In summary these are the necessary steps to set up our bot:

1. Be an administrator on the Discord Server we want to add the bot to
1. Create a new bot account on Discord and add it to our Discord Server
1. Download software to create a server on our local PC
1. Download the code from this repository
1. Edit and test the code locally
1. Host the bot on a server on the Internet (so it can be online forever and does not go offline when you turn off your PC)

### 1. Discord Server setup

You can't just add a bot to any server you are a member of. You have to either create your own or be an administrator on a server. I will create a new Discord Server for this tutorial. You can skip this step if you already have a server.

First we log into Discord with our normal user account and click on the plus button to add a new server:

![Add a Server](https://user-images.githubusercontent.com/3502217/57023769-3338c080-6c33-11e9-8c84-aac70cf3d0aa.gif)

Then we choose "Create":

![Create a Server](https://user-images.githubusercontent.com/3502217/57013226-d1fcf700-6c0a-11e9-9525-2454dea49efe.png)

We give it a name:

![Give it a name](https://user-images.githubusercontent.com/3502217/57013229-d3c6ba80-6c0a-11e9-9243-979449301f4b.png)

And we have our new server:

![We have a new Server](https://user-images.githubusercontent.com/3502217/57013238-d6c1ab00-6c0a-11e9-8f98-50850e5c0df3.png)

### 2. Creating and adding the bot's account

Now open this link in your browser: [Discord Developer Portal](https://discordapp.com/developers/applications/)

First we have to create a new "Application":

![New Application](https://user-images.githubusercontent.com/3502217/57013524-3a98a380-6c0c-11e9-877f-81abfcb72f98.png)

![Give it a name](https://user-images.githubusercontent.com/3502217/57013527-3ec4c100-6c0c-11e9-9c89-a9df7cd6ac4e.png)

Then we add a bot in the "Bot"-tab:

![Add a Bot 1](https://user-images.githubusercontent.com/3502217/57013529-3ff5ee00-6c0c-11e9-99eb-1ed08cb3f107.png)

![Add a Bot 2](https://user-images.githubusercontent.com/3502217/57013531-41bfb180-6c0c-11e9-90dd-16ac7fb75298.png)

We can change the bot's username and disable the public option:

![Give it a username and disable public setting](https://user-images.githubusercontent.com/3502217/57013532-43897500-6c0c-11e9-9d6b-c47b34cc5822.png)

Then we switch to the "OAuth2"-tab to create an invite link. We choose "bot" and add the "Administrator"-permission:

![Generate an invite link](https://user-images.githubusercontent.com/3502217/57013535-44baa200-6c0c-11e9-9550-fd44c8e1dd94.png)

Copy the link and open it in a new tab to add the bot to our server:

![Choose our server and allow the permissions](https://user-images.githubusercontent.com/3502217/57013543-48e6bf80-6c0c-11e9-816a-ca552544d3ec.png)

When you see this message, you can close the tab:

![Success 1](https://user-images.githubusercontent.com/3502217/57013545-4ab08300-6c0c-11e9-8674-7cf7ee04e228.png)

![Success 2](https://user-images.githubusercontent.com/3502217/57013548-4be1b000-6c0c-11e9-8ebc-9017a2d7ccb7.png)

The bot is now a member of our server. Because we chose the "Administrator"-permission a new role has been created on our server automatically. This role can only be assigned to the bot.

> In summary we just created a reddit account for our unborn child. The hard part will be to give birth to it and teach it how to contribute memes to society.

### 3. Creating a local server for testing and configuration

Download and install the following software on your Windows PC:

1. [Node.js](https://nodejs.org/en/download/)
1. [Git for Windows](https://git-scm.com/download/win)
1. [Visual Studio Code](https://code.visualstudio.com/download)

You can just leave everything on the default settings in the installation wizards. Just make sure to pick the second option in this screen during the Git installation (although this should be the default anyways):

![Git Installation PATH Setup](https://user-images.githubusercontent.com/3502217/57014975-b695ea00-6c12-11e9-83a4-0dd845cca481.png)

Next create a new folder somewhere on your PC. I created a "projects" folder in my Downloads, but you can put it anywhere you want:

![Projects Folder](https://user-images.githubusercontent.com/3502217/57015402-01186600-6c15-11e9-88bd-2f9a3cc7f099.PNG)

> That is all we have to do for our PC setup to be able to run the server.

### 4. Downloading the code

Now (inside our new folder) hold the Shift-key on your keyboard and right-click with your mouse. You can let go of the Shift-key and click on "Open PowerShell window here":

![Open PowerShell](https://user-images.githubusercontent.com/3502217/57015535-87cd4300-6c15-11e9-97e4-a07b24023197.PNG)

This will open a command line window where we can insert this line and press `Enter`:

```
git clone https://github.com/flechnical/patbot.git
```

![PowerShell](https://user-images.githubusercontent.com/3502217/57015751-ba2b7000-6c16-11e9-9b91-bb231c10aa06.PNG)

![Git Clone Success 1](https://user-images.githubusercontent.com/3502217/57015755-bef02400-6c16-11e9-9d32-4adf1488c2db.PNG)

This will create a new folder inside our projects folder and download all the code files from the repository:

![Git Clone Success 2](https://user-images.githubusercontent.com/3502217/57015757-c0b9e780-6c16-11e9-95da-a8187f2c9d3e.PNG)

### 5. Configuring and testing the code locally

To make the bot log into the bot account we created and do stuff on our Discord Server, we have to edit a few files. Inside the automatically created "patbot"-folder, right-click and choose "Open with Code":

![Open with Code](https://user-images.githubusercontent.com/3502217/57016345-eeecf680-6c19-11e9-9a2f-510cd8e55e07.gif)

This will open the project files in our code editor Visual Studio Code:

![Code](https://user-images.githubusercontent.com/3502217/57016487-b4378e00-6c1a-11e9-867b-274b22659ee4.JPG)

We can close the "Welcome" page and open the integrated Terminal (from the "View" menu):

![Open Terminal](https://user-images.githubusercontent.com/3502217/57023893-801c9700-6c33-11e9-9568-cdc90c158012.gif)

Insert the following into the Terminal and press `Enter`:

```
npm install
```

This will download all the scripts our server needs to function.

![npm install](https://user-images.githubusercontent.com/3502217/57024312-924b0500-6c34-11e9-812c-403c953292ba.png)

You will notice we have a new "package-lock.json"-file and a U next to it. Also the Y on the left has a 1 on it. This just means that we have made changes to the code. We can safely ignore this as it would only matter if we wanted to share the code with others to collaborate.

![git changes](https://user-images.githubusercontent.com/3502217/57024324-9545f580-6c34-11e9-9773-f9f8c4cc5cdc.png)

Next we rename the ".env.example"-file to ".env" and insert the bot token from the Discord Developer Portal:

![Bot Token](https://user-images.githubusercontent.com/3502217/57024528-22894a00-6c35-11e9-9fbd-cbdc36366a8e.png)

![Bot Token VS Code](https://user-images.githubusercontent.com/3502217/57024787-c1ae4180-6c35-11e9-896a-7a2a9544561f.png)

> The bot token is how your bot logs into his account (it's a username and password in one). Do not share this token with anyone or they could log into the bots account and potentially do damage on your Discord Server.

Save the file changes and click into the Terminal. Now enter this and hit `Enter`:

```
node server
```

Your bot is now running on our local PC and should be logged in on the Discord Server:

![bot online](https://user-images.githubusercontent.com/3502217/57025129-9f68f380-6c36-11e9-9719-0bd55b31ffba.png)

Now we have to set up the roles we want to assign to a member who joins a certain voice channel. Head into the Server Settings and add the Roles `In Voice Channel 1` and `In Voice Channel 2`. If you want you can also enable "Display role members separately from online members" to show to your Server members, who is currently playing together (this only works if they don't also have another role that have this option enabled):

![Create Roles](https://user-images.githubusercontent.com/3502217/57025798-7d707080-6c38-11e9-8fde-0ab2a55460e1.png)

> In my personal Discord Server I have two voice channels. When a member joins "Channel 1" they will be assigned the role "In Voice Channel 1". Anyone with this role cannot post in the "general" text channel, but will be able to access a previously hidden private text channel. You can assign access to the text channels individually by editing the permissions certain roles have in the channel's settings.

![Edit channel permissions](https://user-images.githubusercontent.com/3502217/57025623-f7542a00-6c37-11e9-8acb-81a28e937f8c.png)

Members with one of the two new roles are not allowed to send messages in the general text channel:

![general permissions](https://user-images.githubusercontent.com/3502217/57026173-6aaa6b80-6c39-11e9-87bb-e805486f0022.png)

If you want to hide a private text channel we can set it so it only shows up to a member who is in a certain voice channel. To do this, create the new text channel and make it a "Private Channel":

![private text channel](https://user-images.githubusercontent.com/3502217/57026588-79dde900-6c3a-11e9-8f02-18bc37de3537.png)

Make sure to allow access to members with the role `In Voice Channel 1`:

![private text 1 access](https://user-images.githubusercontent.com/3502217/57026599-7c404300-6c3a-11e9-985f-6a96a31bb688.png)

Then create a text channel for the second voice channel and enable access for `In Voice Channel 2`. We also have to create a second voice channel of course. Our Server looks like this now:

![overview channels](https://user-images.githubusercontent.com/3502217/57026874-1d2efe00-6c3b-11e9-9971-fd5e3e970676.png)

Now we only have to tell our bot what role it should assign to a member if they join a certain voice channel. To do this we will assign ourselves different roles and join voice channels to see the channel IDs in the Terminal log.

First right-click your account in Discord and assign yourself the role `In Voice Channel 1` then join the first voice channel. You will see this output in the Terminal in Visual Studio Code:

![Terminal log](https://user-images.githubusercontent.com/3502217/57027383-85caaa80-6c3c-11e9-9e59-e1ce972eba52.png)

Copy the Role ID and Voice Channel ID into the ".env"-file:

![Add IDs](https://user-images.githubusercontent.com/3502217/57027834-c4ad3000-6c3d-11e9-8ae9-49d71557aa3a.png)

Then remove the role `In Voice Channel 1` from your account, add `In Voice Channel 2` and enter the second voice channel. Take the output from the Terminal and add it to the ".env"-file (put a , inbetween the values). You can do this indefinitely if you have more than two voice and text channels:

![Add IDs 2](https://user-images.githubusercontent.com/3502217/57027971-181f7e00-6c3e-11e9-9971-da3d3be39540.png)

> Make sure, not to include any spaces around the `=` and `,`

When you're finished set the variable `SETUP` above to `false` and save the ".env"-file. Then click into the Terminal and press `CTRL + C` to stop the server. Restart it by running:

```
node server
```

And now our bot should be fully functional and logged in from our local server. When you join a voice channel you will be assigned the corresponding role and the text channel permissions will be applied to your account until you leave the voice channel.

> If you are using Discord with the account that has administrator rights on your Server, private text channels will always be visible to you and you will always be able to write texts in the general channel. To test out the bot's features you can create a dummy Discord account and invite the dummy to the Server. This way you can experience what a normal non-administrator member of your Server would see.

### 6. Hosting the bot

You could host your bot for free on glitch.com, however their service is meant for playing around with code and testing out normal webserver functions (node.js http). By default the free service by glicht.com will suspend your running script when it doesn't receive a http-request (someone visiting your webserver's IP-address in their browser) within 5 minutes.

There is a way to bypass this restriction by constantly pinging your IP, however I will not provide instructions on how to do this. I do not want to promote this practice directly. If you really want to do this you will have to do some research on the Internet (not this: 👉👌). Who knows, maybe after experimenting a bit you will end up investing money in their service after all `¯\_(ツ)_/¯`.

#### Using a VPS hosting service

There are plenty of paid services on the internet for exactly our use case (Heroku, Digital Ocean, Amazon AWS). I recently discovered that `1&1` has rebranded to `1&1 IONOS` and they now offer a VPS plan for € 1 per month that is powerful enough to run a server OS and our bot. You can set up a simple subscription and try following along this tutorial. If it doesn't work out for you, IONOS provides a 30 day money-back-guarantee.

> **Please note:** It looks like the "VPS S plan" is not available outside of Europe (at the time of writing this, it is only available on ionos.de and ionos.at). However, you might be able to create a subscription on the German site (maybe you have to use a VPN).

If you want to support me you can use my [referral link](https://www.ionos.de/pro/vps?ac=OM.PU.PUf11K357403T7073a&kwk=618172100). This way I will receive a small kickback from your purchase if you decide to keep using it after the trial month.

Sign up for the "VPS S plan" and pick Linux Ubuntu as the operating system. Open the `Cloud Panel` on the IONOS website, choose the server we have just created, click on the `Actions` button above and click on "Access KVM Console". This shows you a "live-stream" of the monitor output of the server we just created. You can enter text and execute commands.

#### Setup SSH on VPS to be able to run code from our local client shell (on your Windows PC)

With the KVM Console open we can login (you can find the username and password in the Cloud Panel below your server) and execute the following commands to enable SSH access:

```
sudo apt update
```

```
sudo apt upgrade
```

```
sudo apt install openssh-server
```

After the installation is complete you can close the KVM Console and open Powershell on our local PC (Tip: `Win + X` then `I` is a quick keyboard shortcut). Enter the following command into PowerShell: `ssh USERNAME@IP` (replace USERNAME and IP with the data from the Cloud Panel).

> You are now logged in to the server and can interact with it using our local Powershell window. If you want to exit just type `exit` and press `Enter` or just close the Powershell window. Whenever you want to access the server just open a new Powershell window and enter `ssh USERNAME@IP`.

##### (optional) Generate an SSH-Key to skip password

To make management of our remote server easier, we can store a secret combination on the server and another on our local PC (in the users-folder under .ssh). This will make it possible to log into the server without entering a password every time.

1. Open Powershell and enter the following: `ssh-keygen -t rsa -C "email@domain.com"` (you can enter your own email-address if you want)
2. Press `Enter` to accept the defaults.
3. Now execute this command to copy the server code to our server:
   ```
   cat C:\Users\WINDOWS_USERNAME\.ssh\id_rsa.pub | ssh USERNAME@IP "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
   ```
   > Make sure to replace WINDOWS_USERNAME, USERNAME and IP with your data.

Now you should be able to `ssh` into your server without a password prompt. If you want to access the server from another PC you will have to copy the ssh-key from your users folder on this PC to the other PC or just enter the password every time you want to access the server.

#### Server setup (final step 🙌)

To run the Discord bot on our server we have to do the same things we did on our local PC. First we install all the necessary server software, download the bot code, add our custom ".env"-file and then we tell the server to run the code.

Open a PowerShell window and enter: `ssh USERNAME@IP`

Then execute the following commands:

```
sudo apt install nodejs
```

```
sudo apt install npm
```

```
sudo apt install git
```

```
cd /home
```

```
git clone https://github.com/flechnical/patbot.git
```

```
cd patbot
```

Open a second PowerShell window in our local "patbot"-folder (SHIFT + right-click -> `Open PowerShell window here`) and execute:

```
scp ./.env USER@IP:/home/patbot
```

> Replace USER and IP with your data. This will copy our ".env"-file to the server.

Switch back to the first PowerShell window and run:

```
npm install
```

and

```
npm start
```

> If we close the Powershell window the node process will be terminated. You can either start the process from the IONOS KVM-console or you send the start command from our PowerShell remotely without opening a new SSH session: `ssh USER@IP 'cd /home/patbot; npm start'`

> You can use `ps -ef | grep node` when connected via SSH to get a list of the currently running node processes. If the server crashes or it is being rebooted and we want to start the node process again, the ssh-command above is a fast way to get back up and running. To kill all node processes you can do: `pkill -f node`

##### (recommended) Setting up the Autostart-Script (startup.sh)

If the server crashes, we would have to manually restart our node process (albeit just a simple SSH command [see above infobox]). To avoid this we will just tell the server to execute our "startup.sh"-file whenever it reboots.

1. Make startup.sh executable with `chmod +x /home/patbot/startup.sh`
1. Create a cron job with `crontab -e`
1. If it asks for an editor to use, choose `nano`
1. Go to the bottom of the file with your arrow keys and enter `@reboot /home/patbot/startup.sh`
1. Press `CTRL + X`, then `Y`, then `Enter` to save and exit

And with that you have a bot that is running in the cloud and automatically logs back in, in case of server downtime 🎉🥂. I hope you were able to follow along my instructions. It might be a bit complicated if you have never worked with GitHub or programming in general, but then maybe you can take this as your challenge to learn about programming and get further every time you attempt to climb this ⛰.

---

## Known limitations

- Administrators on your Server are exempt from our custom-role's permissions as the admin-role overwrites PatBot's restrictions (you could remove their admin role when they join a channel and add it again when they leave; however if something goes wrong, you could end up with PatBot being the only admin on your server...)
- The voice-channel-text-channels are hidden and can only be accessed by a user when they are in the voice channel; however their text chat selection does not automatically switch away from the general channel; once the user enters the text channel, they can only see people that have permission to view this channel in the users panel
- If you have other roles on your Discord server and have them set up to show their users separately from others in the users panel, you might not see users with our role (everyone who is in a certain voice channel) shown separately, because other roles take priority
- If a user logs out without leaving the voice channel, he will keep the role he had while in the voice channel
