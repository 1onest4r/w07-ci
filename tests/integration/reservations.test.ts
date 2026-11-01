describe("Global Event Ticket Reservation API", () => {
  
  it("GET /health returns a healthy response", async () => {
    const response = await exports.default.fetch(
      `${BASE_URL}/health`
    );
    expect(response.status).toBe(200);

    const data = await response.json<{
      status: string;
      service: string;
    }>();

    expect(data.status).toBe("ok");
    expect(data.service).toBe(
      "global-event-ticket-reservation"
    );
  });
  
  // ... other existing tests
});