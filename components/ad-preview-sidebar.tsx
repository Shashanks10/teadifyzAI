"use client"

import React from "react"

type Props = {
  title?: string
  price?: string
  description?: string
  linkUrl?: string
  className?: string // allow parent to control layout and positioning
}

export default function AdPreviewSidebar({
  title = "Your Product Title",
  price = "",
  description = "Discover timeless elegance with your product. Enhance your campaign with compelling visuals and clear CTAs.",
  linkUrl = "https://yourstore.com/product",
  className,
}: Props) {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null)
  const [mediaUrl, setMediaUrl] = React.useState<string | null>(null)
  const [mediaType, setMediaType] = React.useState<"image" | "video" | null>(null)
  const [isHovering, setIsHovering] = React.useState(false)

  function onPickFile() {
    fileInputRef.current?.click()
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setMediaUrl(url)
    if (file.type.startsWith("image/")) setMediaType("image")
    else if (file.type.startsWith("video/")) setMediaType("video")
    else setMediaType(null)
  }

  React.useEffect(() => {
    return () => {
      if (mediaUrl && mediaUrl.startsWith("blob:")) URL.revokeObjectURL(mediaUrl)
    }
  }, [mediaUrl])

  return (
    <aside aria-label="Ad preview" className={`w-full ${className || ""}`}>
      <div className="rounded-xl border border-border bg-card text-card-foreground shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="h-9 w-9 rounded-full bg-muted" aria-hidden />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Your Name</span>
            <span className="text-xs text-muted-foreground">Sponsored ·</span>
          </div>
        </div>

        {/* Copy */}
        <div className="px-4">
          <p className="text-sm leading-6 text-pretty">{description}</p>
          {(title || price) && (
            <p className="mt-1 text-sm text-muted-foreground">
              {title}
              {price ? ` • ${price}` : ""}
            </p>
          )}
        </div>

        {/* Media uploader / preview */}
        <div className="px-4 pt-3">
          <div
            className={`relative flex cursor-pointer items-center justify-center rounded-lg border border-dashed ${
              isHovering ? "border-primary/60 bg-muted/40" : "border-muted-foreground/30 bg-muted/30"
            } aspect-video`}
            onClick={onPickFile}
            onDragOver={(e) => {
              e.preventDefault()
              setIsHovering(true)
            }}
            onDragLeave={() => setIsHovering(false)}
            onDrop={(e) => {
              e.preventDefault()
              setIsHovering(false)
              const file = e.dataTransfer.files?.[0]
              if (!file) return
              const url = URL.createObjectURL(file)
              setMediaUrl(url)
              if (file.type.startsWith("image/")) setMediaType("image")
              else if (file.type.startsWith("video/")) setMediaType("video")
            }}
            aria-label="Upload images or videos for ad preview"
            role="button"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/*"
              className="sr-only"
              onChange={onFileChange}
            />

            {mediaUrl && mediaType === "image" && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={mediaUrl || "/placeholder.svg?height=300&width=500&query=ad%20image"}
                alt="Uploaded media preview"
                className="h-full w-full rounded-lg object-cover"
              />
            )}

            {mediaUrl && mediaType === "video" && (
              <video src={mediaUrl} className="h-full w-full rounded-lg object-cover" controls />
            )}

            {!mediaUrl && (
              <div className="flex flex-col items-center justify-center text-center px-6">
                <p className="text-sm font-medium">Click to upload images and videos</p>
                <p className="mt-1 text-xs text-muted-foreground">and see the preview here</p>
              </div>
            )}
          </div>
        </div>

        {/* Link preview */}
        <div className="px-4 py-3">
          <div className="flex items-center justify-between rounded-md border border-input bg-background px-3 py-2">
            <div className="min-w-0">
              <p className="truncate text-xs text-muted-foreground">{linkUrl}</p>
              <p className="truncate text-sm">Understated Elegance, Festive …</p>
            </div>
            <button
              type="button"
              className="ml-3 inline-flex h-8 items-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:opacity-90"
              onClick={() => window.open(linkUrl, "_blank", "noopener,noreferrer")}
            >
              Open Link
            </button>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between border-t border-border px-4 py-2">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px]"
              aria-hidden
            >
              👍
            </span>
            <span
              className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px]"
              aria-hidden
            >
              ❤️
            </span>
            <span className="text-xs text-muted-foreground">+ You</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>Like</span>
            <span>Comment</span>
            <span>Share</span>
          </div>
        </div>
      </div>

      <p className="mt-2 text-xs text-muted-foreground">
        Preview updates as you fill campaign details. Media is not uploaded to a server in this preview.
      </p>
    </aside>
  )
}
