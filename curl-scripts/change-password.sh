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

# TOKEN=d4f189a85e20c5656a10e9762ba2bf4b OLDPW=2 NEWPW=3 sh curl-scripts/change-password.sh
