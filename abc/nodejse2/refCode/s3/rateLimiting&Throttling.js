// Rate Limit :- ( Hard stop )
//   Limit --> Reject
//   100 req/min
//   101 --> 429 To many request

// Throttling :- ( Soft Control )
//   Limit --> Slow Down
//   100 fast
//   After that --> slow down --> request delay

// So in industry
//   [  Rate Limiting  +  Throttling behaviour  ]
// both are used together.

//

// 3. Token Bucket ( Inustry Favourite )

//   1. bucket holds token
//   2. each request uses 1 token
//   3. Token refill at fixed rate
