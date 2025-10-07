# Advanced Playwright Features Workshop

This repository supports the hands-on **Advanced Playwright Features Workshop** delivered at Testing Talks. It is designed for attendees and engineers who want to explore powerful Playwright techniques to elevate their test automation skills using **TypeScript**.

## 🎯 Workshop Overview

During this 2.5-hour interactive workshop, we explore advanced Playwright concepts including:

* POM and reusable fixtures
* Network mocking and request interception for real-time API validation
* Visual regression testing
* Data-driven testing
* Test data management
* Parallel execution and browser context isolation
* Integrating Playwright into CI/CD - GitHub Actions

At the end of the session, you’ll understand how to design a scalable, maintainable Playwright framework for modern web testing.

## 🧰 Prerequisites

Make sure you have the following installed:

* **Node.js** (version 18 or higher)
* **npm** or **yarn**
* **Git** (to clone the repository) – download from [https://git-scm.com/downloads](https://git-scm.com/downloads)
* A code editor such as **VS Code**

## ⚙️ Setup & Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/amancilla-turing/playwright-workshop.git
cd playwright-workshop
npm install
```

**Note:** If you don’t have Git installed, you can click **“Code → Download ZIP”** on the GitHub page, extract the folder, open a terminal inside it, and then run:

```bash
npm install
```

**Note:** You don’t need to install Playwright separately — it’s already included as a dev dependency in this project. Just run `npm install`.

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run a single test:

```bash
npx playwright test tests/specs/getquote.spec.ts
```

Open Playwright Test Report:

```bash
npx playwright show-report
```

## 🗂️ Project Structure

```
├── .github/workflows/playwright.yml     # GitHub Actions workflow for CI
├── playwright.config.ts                 # Global Playwright configuration
├── tests/
│   ├── data/                            # Test data JSON files
│   ├── fixtures/                        # Shared fixtures and setup scripts
│   ├── pages/                           # Page Object Models
│   └── specs/                           # Spec files (test cases)
```

## ✍️ Live Coding During the Workshop

The following spec files will be **created live** during the session:

* `tests/specs/getquote-visual.spec.ts`
* `tests/specs/getquote-network-mock.spec.ts`
* `tests/specs/getquote-data-driven.spec.ts`

These files (and related screenshots) are intentionally **excluded** from the repository so participants can build them from scratch during the workshop.

## 🌐 Practice Application

All examples use the **Get a Quote** form available at:
👉 [https://www.turingconsulting.com.au/playwright-workshop](https://www.turingconsulting.com.au/playwright-workshop)

This form provides a realistic scenario for learning how to:

* Interact with form inputs and validations
* Mock network calls
* Capture and compare visual states
* Drive tests with dynamic data

## 🧠 Learning Outcomes

By completing this workshop, you’ll gain hands-on experience with:

* Advanced Playwright features and TypeScript integration
* Building maintainable test frameworks using Page Object Model (POM)
* Efficient test data and fixture management
* Visual regression and network interception testing
* Integrating Playwright tests into CI/CD pipelines

## 🙌 Acknowledgements

This repository was created for the **Testing Talks Workshop: Advanced Playwright Features**.

Special thanks to the **Playwright** open-source community for building such a powerful toolset for modern automation testing.

---

**Author:** Abdiel Alejandro Mancilla Barajas
**Workshop Host:** Testing Talks Melbourne
**Website:** [www.turingconsulting.com.au](https://www.turingconsulting.com.au)
