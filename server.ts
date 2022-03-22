function handler(req: Request): Response {
  const body = "Hello, World!";
  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

import { serve } from "https://deno.land/std@0.130.0/http/server.ts";

serve(handler);
