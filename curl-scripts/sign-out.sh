#!/bin/bash
API="http://localhost:4741"
URL_PATH="/sign-out"
curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
echo

# TOKEN=ff9a0b0ef9500431864c7d0fb6bd4a60 sh curl-scripts/sign-out.sh
