import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session.server";
import { GitHubStrategy } from "remix-auth-github";

import "dotenv/config";

interface User {
  token: string;
}

const gitHubStrategy = new GitHubStrategy(
  {
    clientID: process.env.GITHUB_OAUTH_CLIENT_ID!,
    clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET!,
    callbackURL: "http://localhost:3000/auth/github/callback",
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async ({ accessToken, extraParams, profile }) => {
    // Get the user data from your DB or API using the tokens and profile
    // return User.findOrCreate({ email: profile.emails[0].value });
    console.log(accessToken);
    console.log(extraParams);
    console.log(profile);

    const user: User = { token: "abc" };
    return user;
  }
);

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
const authenticator = new Authenticator<User>(sessionStorage);
authenticator.use(gitHubStrategy);

export default authenticator;
