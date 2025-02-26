"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the escrow page
    router.push("/escrow");
  }, [router]);

  return null; // No need to render anything as we're redirecting
}