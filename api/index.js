const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const schema = require('./routes/schema')

// Import API Routes
app.use(schema)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
