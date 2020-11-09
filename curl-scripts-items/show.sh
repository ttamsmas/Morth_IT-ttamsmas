#!/bin/bash

API="http://localhost:4741"
URL_PATH="/item"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "games": {}
  }'

echo

// TOKEN="" sh curl-scripts/getgame.sh
