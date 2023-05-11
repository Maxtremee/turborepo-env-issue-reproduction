const config = {
  stage: process.env.NEXT_PUBLIC_STAGE as string,
  environment: process.env.VERCEL_ENV ?? "development",
}

export default config
