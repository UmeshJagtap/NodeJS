// 1) Install dependencies

// npm init -y
// npm install express @octokit/rest dotenv
// # Optional (for GitHub App or webhooks):
// npm install @octokit/auth-app @octokit/webhooks
// # Optional (TypeScript):
// npm install -D typescript ts-node @types/node @types/express

// If you use TypeScript, initialize it:
// npx tsc --init

// 2) Prepare a GitHub token
// For quick starts, use a Personal Access Token (classic) with repo scope (for private repos) or public_repo (for public repos):
// Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic).

// Security best practice: put the token in .env and never commit it.

// .env
// GITHUB_TOKEN=ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXX
// PORT=3000

// Own Example
// 3) Minimal Express + Octokit server (JavaScript)

// server.js
import express from 'express';
import dotenv from 'dotenv';
import { Octokit } from '@octokit/rest';

dotenv.config();

const app = express();
app.use(express.json());

// Initialize Octokit with token auth
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
  userAgent: 'express-octokit-example/1.0.0',
  request: {
    timeout: 10000, // 10s
  },
});

// Health check
app.get('/', (_req, res) => {
  res.send('Octokit + Express is running ✅');
});

/*
 * GET /repos/:owner/:repo/issues
 * Example: GET /repos/octocat/Hello-World/issues?state=open
 */

app.get('/repos/:owner/:repo/issues', async (req, res) => {
  const { owner, repo } = req.params;
  const { state = 'open', per_page = 30, page = 1 } = req.query;

  try {
    const { data } = await octokit.issues.listForRepo({
      owner,
      repo,
      state,
      per_page: Number(per_page),
      page: Number(page),
    });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(err.status || 500).json({
      message: err.message || 'Failed to list issues',
    });
  }
});

/**
 * POST /repos/:owner/:repo/issues
 * Body: { "title": "Bug: something broke", "body": "Details...", "labels": ["bug"] }
 */
app.post('/repos/:owner/:repo/issues', async (req, res) => {
  const { owner, repo } = req.params;
  const { title, body, labels, assignees } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'title is required' });
  }

  try {
    const { data } = await octokit.issues.create({
      owner,
      repo,
      title,
      body,
      labels,
      assignees,
    });
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(err.status || 500).json({
      message: err.message || 'Failed to create issue',
    });
  }
});

/**
 * GET /user
 * Returns the authenticated user (useful to confirm the token is valid)
 */
app.get('/user', async (_req, res) => {
  try {
    const { data } = await octokit.rest.users.getAuthenticated();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(err.status || 500).json({
      message: err.message || 'Failed to get authenticated user',
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
