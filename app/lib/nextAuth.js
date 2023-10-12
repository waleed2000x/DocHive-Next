import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
import Auth0Provider from "next-auth/providers/auth0";
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID,
      clientSecret: process.env.GITHUB_APP_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_APP_CLIENT_ID,
      clientSecret: process.env.GOOGLE_APP_CLIENT_SECRET,
    }),
    // Auth0Provider({
    //   clientId: process.env.AUTH0_CLIENT_ID,
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET,
    //   issuer: process.env.AUTH0_ISSUER,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // }),
  ],
};
