#!bin/sh

# Exit the script on any command with non 0 return code
set -e

npx sharp -i ./src/images/app-icons/icon.png -o ./static/icons/fission.png resize 16
npx sharp -i ./src/images/app-icons/icon.png -o ./static/icons/fission.png resize 32
npx sharp -i ./src/images/app-icons/icon.png -o ./static/icons/fission.png resize 96
npx sharp -i ./src/images/app-icons/icon.png -o ./static/icons/fission.png resize 512
npx sharp -i ./src/images/app-icons/icon.png -o ./static/icons/fission.png resize 384
npx sharp -i ./src/images/app-icons/icon.png -o ./static/icons/fission.png resize 256
npx sharp -i ./src/images/app-icons/icon.png -o ./static/icons/fission.png resize 192
npx sharp -i ./src/images/app-icons/icon.png -o ./static/icons/fission.png resize 144
npx sharp -i ./src/images/app-icons/icon.png -o ./static/icons/fission.png resize 96
npx sharp -i ./src/images/app-icons/icon.png -o ./static/icons/fission.png resize 48
npx sharp -i ./src/images/app-icons/apple-icon.png -o ./static/icons/fission.png resize 180
npx sharp -i ./src/images/app-icons/apple-icon.png -o ./static/icons/fission.png resize 152
npx sharp -i ./src/images/app-icons/apple-icon.png -o ./static/icons/fission.png resize 144
npx sharp -i ./src/images/app-icons/apple-icon.png -o ./static/icons/fission.png resize 120
npx sharp -i ./src/images/app-icons/apple-icon.png -o ./static/icons/fission.png resize 114
npx sharp -i ./src/images/app-icons/apple-icon.png -o ./static/icons/fission.png resize 76
npx sharp -i ./src/images/app-icons/apple-icon.png -o ./static/icons/fission.png resize 72
npx sharp -i ./src/images/app-icons/apple-icon.png -o ./static/icons/fission.png resize 60
npx sharp -i ./src/images/app-icons/apple-icon.png -o ./static/icons/fission.png resize 57
