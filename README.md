# SolRaise Mobile

**SolRaise Mobile** is the mobile application component of the **SolRaise** platform, a decentralized crowdfunding solution built on the **Solana** blockchain. This Expo (React Native) application brings the power of blockchain-based crowdfunding to **iOS** and **Android** devices.

---

## Project Links

- **Main Project**: [Eshan-Sharma/SolRaise](https://github.com/Eshan-Sharma/SolRaise)
- **Main Project Live Link**: [https://sol-raise.vercel.app/](https://sol-raise.vercel.app/)
- **Mobile Project**: [Eshan-Sharma/SolRaise-Mobile](https://github.com/Eshan-Sharma/SolRaise-Mobile)

## Solana Escrow Contract Information

- **Escrow Account on Solana**: [Solana Explorer](https://explorer.solana.com/tx/3hpSchewHDvWHm6B9Wk5KqtDjrhzdJDTdafad7iym6sAMnNmXksMKiEzy2NdMgLAP4LRsjN3X2p6F6Xf5XvQbALN?cluster=devnet)
- **Escrow Program ID**: HqqkyS7miTreeC6qhj4iCPD8cuAtbGgiRbJceCGdF9AB
- **Anchor IDL**: [IDL.json](idl.json)
- ![image](https://github.com/user-attachments/assets/24cef897-ac4b-444f-8bfa-d2cf3805c37a)


---

## Project Details

### Problem Statement

Traditional mobile crowdfunding applications often suffer from high fees, lack of transparency, and limited global accessibility. **SolRaise Mobile** aims to address these issues by leveraging the Solana blockchain and providing a user-friendly mobile interface.

### Solution

SolRaise Mobile tackles these challenges by:

- Utilizing the **Solana blockchain** for rapid, low-cost transactions on mobile devices.
- Offering an intuitive, mobile-optimized user interface for easy fundraising and donating.
- Implementing mobile-friendly donor-recipient matching to foster connections.
- Providing a donation matching system to amplify contributions via mobile.
- Ensuring transparency and security through blockchain technology, accessible on-the-go.

Our mobile platform makes decentralized fundraising more accessible, allowing users to create, manage, and contribute to campaigns from anywhere, at any time.

---

## Goals and Milestones

- Develop and launch beta versions for both iOS and Android platforms.
- Achieve seamless integration with the main SolRaise web platform.
- Implement secure mobile wallet integration for Solana transactions.
- Reach **100 active mobile users** during the devnet testing phase.
- Successfully process **5-100 mobile-initiated test transactions** on devnet.
- Optimize app performance for various device types and network conditions.
- Implement push notifications for campaign updates and donation matching.
- Conduct thorough security audits for mobile-specific vulnerabilities.
- Gather and incorporate user feedback through in-app surveys and testing sessions.
- Prepare a comprehensive plan for transitioning from devnet to mainnet.

---

## Primary Key Performance Indicator (KPI)

- **Main KPI**: Number of Active Mobile Users
  - **Success Milestone**: 100 active mobile users within three months of the public beta launch on devnet.

### Secondary KPIs

- Number of mobile-initiated transactions.
- User retention rate (30-day active users).
- Average session duration.
- Crash-free users percentage.
- App Store and Google Play Store ratings.

---

## Setup Instructions for Expo Project

To set up the **SolRaise Mobile** Expo project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/Eshan-Sharma/SolRaise-Mobile.git
cd SolRaise-Mobile
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Install Expo CLI globally (if not already installed):

```bash
npm install -g expo-cli
```

### 4. Set up environment variables:

Create a .env file in the root directory and add the necessary environment variables (e.g., Solana RPC URL, API keys).

### 5. Start the Expo development server:

```bash
expo start
```

### 6. Run on mobile device or emulator:

For iOS simulator: Press i in the terminal or click "Run on iOS simulator" in the Expo DevTools.
For Android emulator: Press a in the terminal or click "Run on Android device/emulator" in the Expo DevTools.
To run on a physical device: Scan the QR code with the Expo Go app (iOS) or the Expo app (Android).

## Testing

To run the test suite:

```bash
npm test
```

Building for Production
To create a production build:

For iOS:

```bash
expo build:ios
```

For Android:

```bash
expo build:android
```

Follow the prompts to complete the build process.

## Contributing

We welcome contributions to SolRaise Mobile! Please read our CONTRIBUTING.md file for guidelines on how to submit pull requests, report issues, and suggest improvements.

## License

This project is licensed under the MIT License.
