const path = url.pathname;

// GET /health
if (
  request.method === "GET" && 
  path === "/health"
) {
  return Response.json({
    status: "ok",
    service: "global-event-ticket-reservation",
    version: "week9-v1"
  });
}