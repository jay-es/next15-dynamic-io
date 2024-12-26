import { cacheLife } from "next/dist/server/use-cache/cache-life";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";

async function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

function Display({ name }: { name: string }) {
  return (
    <>
      <code>{new Date().toISOString()}</code> {name}
    </>
  );
}

export async function AsyncComponent() {
  await sleep(1_000);
  return <Display name="AsyncComponent" />;
}

export async function WithUseCache() {
  "use cache";

  await sleep(1_000);
  return <Display name="WithUseCache" />;
}

export async function WithUseCacheAndCacheLife() {
  "use cache";
  cacheLife({ expire: 5 });

  await sleep(1_000);
  return <Display name="WithUseCacheAndCacheLife" />;
}

export async function WithUseCacheAndCacheTag(props: { tag: string }) {
  "use cache";
  cacheTag(props.tag);

  await sleep(1_000);
  return <Display name="WithUseCacheAndCacheTag" />;
}
