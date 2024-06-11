# WhatsApp Status Downloader

WhatsApp Status Downloader is a Chrome extension that allows users to download WhatsApp status images and videos from WhatsApp Web.

## Installation

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle in the top right corner.
4. Click on the "Load unpacked" button and select the directory where you cloned or downloaded this repository.

## Usage

1. Open [WhatsApp Web](https://web.whatsapp.com/) and log in to your account.
2. Click on the WhatsApp Status Downloader extension icon in the Chrome toolbar.
3. Click the "Download Statuses" button to download all status images and videos displayed on the page.
4. Optionally, you can select specific statuses by checking the checkboxes next to them and then click the "Download Selected" button.

## Features

- Download all WhatsApp status images and videos with a single click.
- Selectively download specific statuses by checkbox selection.
- Works seamlessly with WhatsApp Web.

## How it Works

The extension injects a content script into the WhatsApp Web page, which extracts the URLs of status images and videos. These URLs are then sent to the background script, which initiates the download process using the Chrome Downloads API.

## Contributing

Contributions are welcome! Please feel free to open issues or pull requests for any improvements, bug fixes, or new features.

## License

This project is licensed under the [MIT License](LICENSE).
