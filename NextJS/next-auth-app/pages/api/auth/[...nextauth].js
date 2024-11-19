import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { MongoClient } from 'mongodb';

let client;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (!client.isConnected()) await client.connect();
  }
  return client.db();
}

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  database: process.env.DATABASE_URL, // MongoDB URL
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: 'your-secret-key',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const db = await connectToDatabase();

        // Insert user data into a collection (e.g., 'users')
        await db.collection('users').updateOne(
          { email: user.email }, // Match user by email
          { $set: { name: user.name, email: user.email, image: user.image } }, // Upsert user data
          { upsert: true } // Insert if not found
        );

        console.log('Database connected, user inserted/updated.');
        return true; // Allow sign-in
      } catch (error) {
        console.error('Error connecting to database:', error);
        return false; // Deny sign-in
      }
    },
  },
});
