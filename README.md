# Todos
*or TodoListNextJS*

![Screenshot on Desktop](/public/desktop.png)

I finally decided to learn some front-end stuff and picked Next.js because I heard it has great market share. :)

## Description

Todos is a note-taking app that allows you to keep track of what you need to do with a simple and elegant UI. Jot down important items and events and you will never forget them again.

## Current Features

 - Create, edit and delete todo items
 - Login, logout, register, change password and change username
 - Authentication using NextAuth's `CredentialsProvider`
 - Search bar
 - Pagination

## Technologies Used

 - [React](https://react.dev)
 - [Next.js](https://nextjs.org)
 - [NextAuth.js](https://next-auth.js.org)
 - [NextUI](https://nextui.org)
 - [Tailwind CSS](https://tailwindcss.com)

## Potential Feature Additions

 - Light Mode
 - OAuth2 (starting with GitHub)
 - Search filters
 - Reminder system (deadlines, email notifications, etc...)

## System Dependencies

 - Linux (WSL and MacOS probably work idk)
 - Docker
 - `node.js` (version 20 or above)
 - `npm`
 - `npx`

## Usage

### Setup

NextAuth and the postgres database requires additional configuration through environment variables/files. Copy `.env.example` to `.env` and supply `POSTGRES_PASSWORD` and `NEXTAUTH_SECRET` with your own randomly generated secret items.

```bash
cp .env.example .env
nvim .env # do stuff
```

Your computer probably doesn't have a seeded database up and running for Todos. In that case, run the following commands to setup `prisma` and `postgres`.

```bash
# Start postgres database
docker compose up -d postgres

# Create tables
npx prisma db push

# Optionally, seed database with initial values
npx tsx ./prisma/seeduser.ts
npx tsx ./prisma/seedtodo.ts
```

### Development

To start a development environment entirely in docker:

```bash
docker compose up dev postgres
# OR
docker compose up -d dev postgres # to detach terminal from docker
```

Alternatively, you may want to try out a hybrid development environment:

```bash
# /dev/pts/1
docker compose up postgres

# New terminal
# /dev/pts/2
npm run dev
```

### Production

Once the website is deemed ready for use, run these commands:

```bash
docker compose up prod postgres
# OR
docker compose up -d prod postgres
```

### Troubleshooting

Occassionally, Intellisense may break and there might be graphical glitches in the website. But don't worry! I've found that *resetting* the website completely will get rid of these annoying problems.

```bash
# Stop the website!
docker compose down # or press Ctrl+C

# "Reset"
rm -r .next
rm -r node_modules
npm install
```