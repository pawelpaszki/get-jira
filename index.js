const util = require('util');
const exec = util.promisify(require('child_process').exec);

const api = require("jira-client");

const JIRA_HOST = "issues.redhat.com";
const JIRA_PROTOCOL = "https";
const JIRA_PASSWORD = "your_password_here";
const JIRA_USERNAME = "your_username_here";

const client = new api({
  host: JIRA_HOST,
  password: JIRA_PASSWORD,
  protocol: JIRA_PROTOCOL,
  username: JIRA_USERNAME
});

findJira();

async function findJira() {
  const issue = await client.findIssue("INTLY-8461");
  console.log(issue);
}
