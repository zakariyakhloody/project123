const asyncFunction = async () => {
  try {
    // Code here
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

(async function() {
  await asyncFunction();
})();
