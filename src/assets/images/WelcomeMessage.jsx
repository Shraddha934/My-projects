const WelcomeMessage = () => {
  return (
    <>
      <center className="welcome">
        <h1>Welcome to </h1>
        <h1>WedBliss</h1>
        <h2>Celebrate Maharashtrian Wedding Culture and Traditions</h2>
        <p>
          Celebrate Maharashtrian Wedding Culture and Traditions. Welcome to
          WedBliss, your one-stop destination for all things related to
          Maharashtrian weddings. Explore our rich cultural heritage and
          discover the traditions that make these weddings truly special.
        </p>
      </center>
      <nav className="nav nav-pills nav-justified">
        <a className="nav-link" aria-current="page" href="/product">
          <img
            src="WedBliss/src/components/pandit.jpeg"
            width="70px"
            height="70px"
          />
          Wedding Products for Every Maharashtrian Celebration
        </a>
        <a className="nav-link" href="/info">
          <img src="pandit.jpeg" width="70px" height="70px" />
          Discover Maharashtrian Wedding Culture and Traditions
        </a>
        <a className="nav-link" href="/panditregi">
          <img src="pandit.jpeg" width="70px" height="70px" />
          Register as a Pandit and Expand Your Reach
        </a>
        <a className="nav-link" href="/profiles">
          {/* <img src="pandit.jpeg" width="70px" height="70px" /> */}
          Find best Pnadit ji for your Rituals and Marriage performance..!
        </a>
      </nav>
    </>
  );
};

export default WelcomeMessage;
