const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  const { context } = github;
  console.log(`PR Title: ${context.payload.pull_request.title}`);
  console.log(`PR Author: ${context.payload.pull_request.user.login}`);

  if (context.payload.pull_request.user.login === "dependabot[bot]") {
    console.log("This PR is raised by Dependabot.");
  } else {
    console.log("Not a Dependabot PR.");
  }

  
}

run().catch((error) => {
  core.setFailed(error.message);
});
