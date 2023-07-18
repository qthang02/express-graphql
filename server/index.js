const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/resolvers');
const { set } = require('mongoose');

const server = new ApolloServer({typeDefs, resolvers});

const app = express();

async function startApolloServer() {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`);
}

startApolloServer();






