import "dotenv/config";
export const apiEnv = {
    dbUrl: process.env.DATABASE_URL,
    testDbUrl: process.env.TEST_DATABASE_URL,
    port: process.env.PORT
};
export const authEnv = process.env.ACCESS_TOKEN_SECRET as string;

