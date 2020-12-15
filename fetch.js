async function loadFileAndPrintToConsole(url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    const tt = type(data);
    document.write(tt)
  } catch (err) {
    console.error(err);
  }
}

loadFileAndPrintToConsole('https://threejsfundamentals.org/LICENSE');