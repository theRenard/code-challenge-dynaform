const { Router } = require('express')

const router = Router()

// Mock Users
const users = {
  "name":"User",
  "fields":[
      {
          "name":"first_name",
          "type": "String"
      },
      {
          "name":"last_name",
          "type": "String"
      },
      {
          "name":"age",
          "type": "Number"
      },
      {
          "name":"address",
          "type": "String"
      },
      {
          "name":"gender",
          "type": "GenderEnum('M','F')"
      },
      {
          "name":"birth_date",
          "type": "Date"
      }
  ]
}
/* GET users listing. */
router.get('/schema', function (_req, res, _next) {
  res.json(users)
})

module.exports = router
