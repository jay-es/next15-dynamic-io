import Image from "next/image";
import { Suspense } from "react";
import {
  AsyncComponent,
  WithUseCache,
  WithUseCacheAndCacheLife,
  WithUseCacheAndCacheTag,
} from "./_components/async-components";
import {
  RefreshButton,
  ReloadButton,
  RevalidatePathButton,
  RevalidateTagButton,
} from "./_components/buttons";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <section>
          {/* Suspense で囲まないとエラーになる */}
          <div>
            <Suspense fallback="...">
              <AsyncComponent />
            </Suspense>
          </div>

          <div>
            <WithUseCache />
          </div>

          {/* Suspense で囲まないとエラーになる */}
          <div>
            <Suspense fallback="...">
              <WithUseCacheAndCacheLife />
            </Suspense>
          </div>

          <div>
            <WithUseCacheAndCacheTag tag="my-tag" />
          </div>

          <div className="mt-4 flex gap-4">
            <RevalidatePathButton path="/" />
            <RevalidateTagButton tag="my-tag" />
          </div>
          <div className="mt-4 flex gap-4">
            <RefreshButton />
            <ReloadButton />
          </div>
        </section>
      </main>
    </div>
  );
}
