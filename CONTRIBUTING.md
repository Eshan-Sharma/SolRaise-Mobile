# Contributing to SolRaise Mobile

We're excited that you're interested in contributing to SolRaise Mobile! This document provides guidelines for contributing to the SolRaise Mobile project, an Expo (React Native) application. By participating in this project, you agree to abide by its terms.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [How Can I Contribute?](#how-can-i-contribute)
4. [Development Environment Setup](#development-environment-setup)
5. [Style Guidelines](#style-guidelines)
6. [Commit Messages](#commit-messages)
7. [Pull Requests](#pull-requests)
8. [Testing](#testing)
9. [Debugging](#debugging)
10. [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [project email].

## Getting Started

- Ensure you have a [GitHub account](https://github.com/signup/free)
- Fork the [SolRaise-Mobile repository](https://github.com/Eshan-Sharma/SolRaise-Mobile) on GitHub
- Clone your fork locally
- Set up your development environment as described in the [README.md](README.md)

## How Can I Contribute?

### Reporting Bugs

- Use the GitHub issue tracker to report bugs
- Before creating a new issue, please check if the same issue has already been reported
- When reporting a bug, include:
  - Your operating system name and version
  - Device information (if applicable)
  - Expo version
  - React Native version
  - Detailed steps to reproduce the bug
  - Any relevant error messages or screenshots

### Suggesting Enhancements

- Use the GitHub issue tracker to suggest enhancements
- Provide a clear and detailed explanation of the feature or improvement you want to see
- Include examples of how the feature would be used and why it would be beneficial

### Your First Code Contribution

- Look for issues labeled "good first issue" or "help wanted"
- Comment on the issue to express your interest in working on it
- If you need help, don't hesitate to ask questions in the issue thread

## Development Environment Setup

1. Install Node.js (version 12 or later)
2. Install Expo CLI: `npm install -g expo-cli`
3. Clone your fork: `git clone https://github.com/YOUR-USERNAME/SolRaise-Mobile.git`
4. Navigate to the project directory: `cd SolRaise-Mobile`
5. Install dependencies: `npm install`
6. Start the Expo development server: `expo start`

## Style Guidelines

### JavaScript and React Native Style Guide

- We follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- For React Native specific code, refer to the [React Native Community Style Guide](https://github.com/react-native-community/react-native-code-style)
- Use functional components and hooks instead of class components where possible
- Use ES6+ features

### ESLint and Prettier

- We use ESLint and Prettier to enforce code style
- Run `npm run lint` to check your code for style issues
- Run `npm run format` to automatically format your code

## Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

## Pull Requests

1. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`
2. Make your changes and commit them using the guidelines above
3. Push your branch to your fork on GitHub
4. From your fork, open a pull request in the `main` branch
5. Ensure the PR description clearly describes the problem and solution. Include the relevant issue number if applicable
6. Do not include issue numbers in the PR title
7. Include screenshots and animated GIFs in your pull request whenever possible

## Testing

- Write unit tests for new features using Jest and React Native Testing Library
- Ensure all tests pass before submitting a pull request: `npm test`
- Aim for high test coverage, especially for complex logic

## Debugging

- Use React Native Debugger for debugging
- For performance issues, use the Performance Monitor in the React Native Debugger
- Use `console.log()` sparingly in production code. Consider using a logging library for better control

## Community

- Join our [Discord server](https://discord.gg/AUahUhkrf3) for real-time discussions
- Follow us on [Twitter](https://x.com/SRaise30230) for project updates

Remember, the goal is to create a great mobile experience for SolRaise users. Your contributions play a crucial role in achieving this. If you have any questions or need help, don't hesitate to reach out to the maintainers or the community.

Thank you for contributing to SolRaise Mobile!
