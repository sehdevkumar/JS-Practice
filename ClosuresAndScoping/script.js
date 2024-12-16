function rateLimiter(apiFunction, limit) {
  let calls = 0;
  let startTime = Date.now();

  return function (...args) {
    const now = Date.now();
    if (now - startTime >= 10000) {
      // Reset counter after 1 second
      startTime = now;
      calls = 0;
    }

    if (calls < limit) {
      calls++;
      return apiFunction(...args); // Call the actual API function
    } else {
      console.log("Rate limit exceeded. Please wait.");
    }
  };
}

// Simulate an API call
function fetchUserData(id) {
  console.log(`Fetching data for user ${id}`);
}

const limitedFetch = rateLimiter(fetchUserData, 3); // Limit to 3 calls per second

// Test
limitedFetch(1);
limitedFetch(2);
limitedFetch(3);
limitedFetch(4); // Rate limit exceeded
limitedFetch(5); // Rate limit exceeded
setTimeout(()=> {
     limitedFetch(6)
},8000)
