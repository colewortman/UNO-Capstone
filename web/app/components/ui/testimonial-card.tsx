"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  videoSrc?: string
  thumbnailSrc?: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  videoSrc,
  thumbnailSrc,
  href,
  className
}: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isLinkedCard = Boolean(href && href !== "#")
  const Card = isLinkedCard ? 'a' : 'div'
  const initials = author.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
  const needsToggle = text.length > 120

  return (
    <Card
      {...(isLinkedCard ? { href } : {})}
      className={cn(
        "flex h-full flex-col rounded-lg border-t",
        "bg-gradient-to-b from-muted/50 to-muted/10",
        "p-4 text-start sm:p-6",
        "hover:from-muted/60 hover:to-muted/20",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none">
            {author.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {author.handle}
          </p>
        </div>
      </div>
      <div className="mt-4 min-h-[4.5rem]">
        <p
          className={cn(
            "sm:text-md text-sm text-muted-foreground",
            !isExpanded && "line-clamp-3",
          )}
        >
          {text}
        </p>
        {needsToggle && !isLinkedCard && (
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="mt-1 text-xs font-medium text-white/80 underline underline-offset-2 hover:text-white"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
      {videoSrc && (
        <div className="mt-4 aspect-video w-full overflow-hidden rounded-md border bg-black">
          <video
            className="h-full w-full object-cover"
            controls
            preload="metadata"
            playsInline
            poster={thumbnailSrc ?? author.avatar}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </Card>
  )
}