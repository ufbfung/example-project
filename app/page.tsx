import Image from "next/image";
import { ArrowRight, BookOpen, FileText, Rocket } from "lucide-react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const resources = [
  {
    icon: FileText,
    title: "Templates",
    description: "Start from a production-ready example built with Next.js.",
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
  },
  {
    icon: BookOpen,
    title: "Learning",
    description: "Follow guided lessons to master the fundamentals.",
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background px-6 py-16 font-sans">
      <header className="mx-auto flex w-full max-w-3xl items-center justify-end gap-3">
        <Show when="signed-out">
          <SignInButton>
            <Button variant="outline" size="sm">
              Sign in
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button size="sm">Sign up</Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-10">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-balance">
            Making a change to my web app.
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            Looking for a starting point or more instructions? Explore the
            resources below to get going.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {resources.map(({ icon: Icon, title, description, href }) => (
            <a key={title} href={href} className="group">
              <Card className="h-full transition-colors hover:ring-foreground/20">
                <CardHeader>
                  <div className="flex size-9 items-center justify-center rounded-lg bg-muted text-foreground">
                    <Icon className="size-4.5" />
                  </div>
                  <CardTitle className="mt-3 flex items-center gap-1">
                    {title}
                    <ArrowRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Rocket />
              Deploy Now
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
