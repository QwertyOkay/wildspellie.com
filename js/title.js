
    let activeAlert = false;
    const title = "Jamminjar.com | Drinkware";
    const msg = "TUMBLERS | BEER GLASSES | WINE GLASSES";
    const changeTitle = setInterval(() => {
      document.title = activeAlert ? title : msg;

      activeAlert = !activeAlert;
    }, 5500);
  