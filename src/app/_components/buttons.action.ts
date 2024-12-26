"use server";

import cache from "next/cache";

export async function revalidatePath(path: string) {
  cache.revalidatePath(path);
}

export async function revalidateTag(tag: string) {
  cache.revalidateTag(tag);
}
