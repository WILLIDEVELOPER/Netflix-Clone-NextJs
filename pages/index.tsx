import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();
  return (
    <>
      <h1 className="text-4xl text-white font-bold">Netflix clone</h1>
      <p className="text-white">Logged in as: {user?.name}</p>
      <button
        className="text-white font-bold w-full h-10 bg-slate-700"
        onClick={() => signOut()}
      >
        logout
      </button>
    </>
  );
}
