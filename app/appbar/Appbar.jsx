import Link from "next/link";
import UserButton from "./UserButton";
import User from "./User";

export default function Appbar() {
  return (
    <div className="appbar">
      <div className="appbar-center">
        <Link href="/">
          <h1>
            Doc<span>Hive</span>
          </h1>
        </Link>
        <User />
        <div className="nav-items">
          <UserButton />
        </div>
      </div>
    </div>
  );
}
