const config = {
  stage: process.env.NEXT_PUBLIC_STAGE as string,
  environment: process.env.NEXT_PUBLIC_STAGE ?? "development",
}

export default config
