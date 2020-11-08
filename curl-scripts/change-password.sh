#!/bin/bash

API="http://localhost:4741"
URL_PATH="/change-password"

curl "${API}${URL_PATH}" \
--include \
--request PATCH \
--header "Authorization: Bearer ${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
  "passwords": {
    "old": "'"${OLDPW}"'",
    "new": "'"${NEWPW}"'"
  }
}'

echo

# TOKEN=ff9a0b0ef9500431864c7d0fb6bd4a60 OLDPW=4 NEWPW=2 sh curl-scripts/change-password.sh
