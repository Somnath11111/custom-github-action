const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  const { context } = github;
  console.log(`PR Title: ${context.payload.pull_request.title}`);
  console.log(`PR Author: ${context.payload.pull_request.user.login}`);
}

run().catch((error) => {
  core.setFailed(error.message);
});
