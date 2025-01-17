import connectDB from '@/config/database';
import User from '../models/User';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful sign in
    async signIn({ profile }) {
      await connectDB();

      const userExists = await User.findOne({
        email: profile.email,
      });

      if (!userExists) {
        // Truncate user name if it is too long
        const username = profile.name.slice(0, 20);
      }

      await User.create({
        email: profile.email,
        usename,
        image: profile.picture,
      });

      return true;
    },

    // Modifies the session object
    async session({ session }) {
      // Add later
    },
  },
};
