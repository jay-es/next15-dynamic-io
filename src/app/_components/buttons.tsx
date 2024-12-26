"use client";

import { useRouter } from "next/navigation";
import { revalidatePath, revalidateTag } from "./buttons.action";

export function RevalidatePathButton({ path }: { path: string }) {
  async function handleClick() {
    revalidatePath(path);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-foreground text-background px-4 py-2 rounded-lg"
    >
      revalidatePath: {path}
    </button>
  );
}

export function RevalidateTagButton({ tag }: { tag: string }) {
  async function handleClick() {
    revalidateTag(tag);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-foreground text-background px-4 py-2 rounded-lg"
    >
      revalidateTag: {tag}
    </button>
  );
}

export function RefreshButton() {
  const router = useRouter();

  function handleClick() {
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="border border-foreground px-4 py-2 rounded-lg"
    >
      router.refresh
    </button>
  );
}

export function ReloadButton() {
  function handleClick() {
    location.reload();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="border border-foreground px-4 py-2 rounded-lg"
    >
      location.reload
    </button>
  );
}
