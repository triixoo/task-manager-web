try {
  main();
} catch (error) {
  document.querySelector("#loading h1").textContent =
    "The workspace could not start";
  document.getElementById("loading-message").textContent =
    "Please reload the page. If the problem continues, try a current browser.";
  console.error(error);
}
