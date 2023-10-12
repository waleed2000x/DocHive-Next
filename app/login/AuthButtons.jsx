import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn } from "next-auth/react";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function AuthButtons() {
  const { status } = useSession();

  status === "authenticated" ? redirect("/dashboard") : null;

  return (
    <>
      <Button
        startIcon={<GitHubIcon />}
        variant="text"
        className="githubButton"
        onClick={() => signIn("github")}
      >
        Github
      </Button>
      <Button
        startIcon={<GoogleIcon />}
        variant="text"
        className="googleButton"
        onClick={() => signIn("google")}
      >
        Google
      </Button>
    </>
  );
}
