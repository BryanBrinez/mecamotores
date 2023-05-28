import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "@models/user";
import bcrypt from "bcryptjs";
import  connectToDB  from "@utils/database";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await connectToDB();

        const { email, password } = credentials;

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("Invalid Email or Password");
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
          throw new Error("Invalid Email or Password");
        }

        return user;
      },
    }),
  ],
 
  secret: process.env.NEXTAUTH_SECRET,
});
export { handler as GET, handler as POST }