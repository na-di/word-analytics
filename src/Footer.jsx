function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <small>
        `&copy; {year} Copyright by{' '}
        <a href="https://www.webforu.co.il/" target="_blank">
          {' '}
          Avneri Digetal Marketing
        </a>
      </small>
      <small>😁השתדלו תמיד לשמוח!</small>
    </footer>
  );
}

export default Footer;
