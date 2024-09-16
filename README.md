# SolRaise Mobile

**SolRaise Mobile** is the mobile application component of the **SolRaise** platform, a decentralized crowdfunding solution built on the **Solana** blockchain. This Expo (React Native) application brings the power of blockchain-based crowdfunding to **iOS** and **Android** devices.

---

## Project Links

- **Main Project**: [Eshan-Sharma/SolRaise](https://github.com/Eshan-Sharma/SolRaise)
- **Main Project Live Link**: [https://sol-raise.vercel.app/](https://sol-raise.vercel.app/)
- **Mobile Project**: [Eshan-Sharma/SolRaise-Mobile](https://github.com/Eshan-Sharma/SolRaise-Mobile)

# Design(Work in progress)
![image](https://github.com/user-attachments/assets/737f2496-a578-4610-b6c2-205a0257133f)
![image](https://github.com/user-attachments/assets/0824f9cc-d3dd-4147-90c0-5474e79efd4c)

## Project Demo (Work in progress)

https://github.com/user-attachments/assets/00f6fc51-fb1e-4f9d-8809-89dffe964930

For detailed updates and incremental demo videos, check out the [Incremental Project Updates](INCREMENTAL_PROJECT_UPDATE_DEMOS.md) page.

# Tech Stack

## Web Application (SolRaise)
- **Frontend Framework:** [Next.js](https://nextjs.org/) – A React-based framework for server-side rendering and static site generation.
- **Database ORM:** [Prisma](https://www.prisma.io/) – An intuitive ORM for managing database schemas and migrations, providing type-safe queries.
- **Database:** [PostgreSQL](https://www.postgresql.org/) – A powerful, open-source relational database used to store and manage application data.
- **CSS Framework:** [Tailwind CSS](https://tailwindcss.com/) – A utility-first CSS framework for designing a highly customizable UI.
- **UI Components:** [ShadCN UI](https://shadcn.dev/) – A modern UI library built on Radix Primitives and Tailwind CSS.
- **Blockchain:** [Solana](https://solana.com/) – A high-performance blockchain for fast, low-cost decentralized applications.
- **Smart Contracts Framework:** [Anchor](https://project-serum.github.io/anchor/) – A framework for building and deploying Solana smart contracts using Rust.
- **Language for Smart Contracts:** [Rust](https://www.rust-lang.org/) – A memory-efficient language, ideal for building reliable and high-performance Solana smart contracts.

## Mobile Application (SolRaise)
- **Framework:** [Expo](https://expo.dev/) – A powerful React Native framework for building cross-platform mobile applications.
- **Styling:** [NativeWind](https://www.nativewind.dev/) – Tailwind CSS for React Native, providing utility-based styling for mobile apps.
- **Database ORM:** [Prisma](https://www.prisma.io/) – Provides a unified data management layer for mobile.
- **Database:** [PostgreSQL](https://www.postgresql.org/) – Same as the web, PostgreSQL powers the mobile backend for data persistence and management.
- **Blockchain Integration:** [Solana React Native SDK](https://github.com/solana-labs/wallet-adapter) – A set of tools for integrating Solana into mobile apps with wallet and blockchain support.
- **Blockchain:** [Solana](https://solana.com/) – Fast and efficient blockchain used for decentralized applications.
- **Language for Smart Contracts:** [Rust](https://www.rust-lang.org/) – For building Solana programs.

## Solana Escrow Contract Information
- **Wallet used for deployment**: Ei6ERbXYRcDGnrrTJv7zRtMdyP14intfof9C7mLPjE8P

### Updated Deployment
- **Escrow Program ID**: HqqkyS7miTreeC6qhj4iCPD8cuAtbGgiRbJceCGdF9AB
- **Anchor IDL**: [IDL.json](solana-escrow/idl.json)
- ![image](https://github.com/user-attachments/assets/ca734112-bb6a-4a15-be07-7dd27f8ba4ec)

### Initial Deployment
- **Escrow Account on Solana**: [Solana Explorer](https://explorer.solana.com/tx/3hpSchewHDvWHm6B9Wk5KqtDjrhzdJDTdafad7iym6sAMnNmXksMKiEzy2NdMgLAP4LRsjN3X2p6F6Xf5XvQbALN?cluster=devnet)
- **Escrow Program ID**: HqqkyS7miTreeC6qhj4iCPD8cuAtbGgiRbJceCGdF9AB
- **Anchor IDL**: [IDL.json](idl.json)
- ![image](https://github.com/user-attachments/assets/24cef897-ac4b-444f-8bfa-d2cf3805c37a)

## Expo Application Services (EAS)

### Android build artifact ready through EAS.

![image](https://github.com/user-attachments/assets/92c73d20-6195-435c-9310-bed39b4591ff)

## PostgresSql table

This project uses **PostgreSQL** with **Prisma ORM** to manage a crowdfunding system, consisting of `Campaign` and `Donation` models.
![image](https://github.com/user-attachments/assets/5f6c861d-4ca8-46cb-bec6-a9f2a4ad936c)

### Table Breakdown
**Campaign Table**
- id: Unique identifier for the campaign (String).
- title: Campaign title (String).
- description: Description of the campaign (String).
- creatorWallet: The creator's wallet address (String).
- fundsGoal: The funding goal for the campaign (Float).
- duration: Duration of the campaign (Int).
- status: Current status of the campaign. Uses the CampaignStatus enum, which defaults to ACTIVE.
- createdAt: Timestamp when the campaign was created, defaults to the current time.
- updatedAt: Timestamp when the campaign was last updated, auto-updates on modification.
- donations: List of related donations.

**Donation Table**
- id: Unique identifier for each donation (String).
- campaignId: Foreign key referencing the campaign (String).
- campaign: Relation to the Campaign model.
- donorWallet: The wallet address of the donor (String).
- amount: Donation amount (Float).
- createdAt: Timestamp when the donation was made, defaults to the current time.

**CampaignStatus Enum**
- ACTIVE: Campaign is currently accepting donations.
- SUCCESSFUL: Campaign reached its funding goal.
= FAILED: Campaign failed to reach its goal.
- CANCELED: Campaign was canceled.
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

For EAS Build

```bash
npx eas build --profile development --platform android
```

Run EAS Build 

```bash
npx expo start --dev-client
```

Follow the prompts to complete the build process.

## Contributing

We welcome contributions to SolRaise Mobile! Please read our CONTRIBUTING.md file for guidelines on how to submit pull requests, report issues, and suggest improvements.

## License

This project is licensed under the MIT License.
