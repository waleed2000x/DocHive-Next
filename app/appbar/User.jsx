"use client";

export default function User() {
  const name = "Waleeds";
  // const name = data?.user?.name;
  let firstName = "";

  if (name) {
    const spliter = name.split(" ");
    firstName = spliter[0];
  }
  const status = "authenticated";
  return (
    <>
      {status === "authenticated" ? (
        <div className="appbar-name">
          <p>
            Welcome,<span>{firstName}</span>!
          </p>
        </div>
      ) : null}
    </>
  );
}
