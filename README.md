# 🎭 cured-songsterr-patcher
> **"The cure is in the code."**

![Version](https://img.shields.io/badge/version-1.3.3-green)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Linux-blue)
![License](https://img.shields.io/badge/license-The%20Unlicense-lightgrey)

A high-performance userscript engineered to bypass hydration-based feature locks. Developed by **PlaguedMike** at **Plague-Doctor-Studio**, this utility demonstrates advanced client-side state manipulation and network layer interception.

---

## 🛠 Technical Features

This patcher addresses the core limitations of standard DOM-based scripts by operating at the protocol level:

- **State Hydration Interception**: Utilizes a `MutationObserver` to capture and modify the `#state` JSON block before the React engine mounts the application.
- **Global Fetch Override**: Replaces the native `window.fetch` using `Object.defineProperty` to inject authenticated profile data (`mike@curedhosting.com`) into encrypted network traffic.
- **Canvas Redraw Engine**: Resolves common rendering race conditions by monitoring the tablature container and triggering global resize events to force a UI redraw.
- **Cured Protocol Logging**: Implements a custom console logging system with ASCII branding to verify patch status in real-time.

## 🚀 Installation

1. **Install a Manager**: Ensure you have [Tampermonkey](https://www.tampermonkey.net/) or an equivalent userscript manager installed in your browser.
2. **Deploy the Script**: 
   - [Click here to install the Latest Release](https://github.com/PlaguedMike/cured-songsterr-patcher/raw/main/patcher.user.js).
   - Click **Install** when prompted by your extension.
3. **Verify Deployment**:
   - Navigate to any Songsterr tab.
   - Open Developer Tools (`F12`) to view the **Cured Hosting** initialization logo.

## 🧪 Engineering Context

Developed as a practical application of concepts within an **AI Software Engineering** curriculum, this project focuses on:
* **Asynchronous Synchronization**: Solving the "Race Condition" between server-side data and client-side rendering.
* **API Hooking**: Safe interception of global browser APIs.
* **Cross-Platform Compatibility**: Optimized for performance on **Windows 10** and **Linux Mint** environments.

## 🥼 Contact
- **Lead Architect:** [PlaguedMike](https://github.com/PlaguedMike)
- **Email:** [mike@curedhosting.com](mailto:mike@curedhosting.com)
- **Studio:** Plague-Doctor-Studio / Cured Hosting

---
*Disclaimer: This project is for educational and research purposes only.*
