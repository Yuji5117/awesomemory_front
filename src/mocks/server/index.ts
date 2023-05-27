export const initMock = async () => {
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { worker } = await import("./browser");
    worker.start();
  }
};
