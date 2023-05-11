#!/bin/bash

if [[ "$VERCEL_GIT_COMMIT_REF" == "staging" || "$VERCEL_GIT_COMMIT_REF" == "master"  ]] ; then
  # Proceed with the build
  echo "✅ - Fresh build"
  exit 1;

else
  # Use turbo-ignore
  npx turbo-ignore;
fi