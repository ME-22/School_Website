// Load header and footer; provide inline fallbacks for file:// usage
function insertHeader(html) {
  const el = document.querySelector('header');
  if (el) el.innerHTML = html;
}
function insertFooter(html) {
  const el = document.querySelector('footer');
  if (el) el.innerHTML = html;
}

fetch('header.html')
  .then(res => { if (!res.ok) throw new Error('Fetch failed'); return res.text(); })
  .then(data => insertHeader(data))
  .catch(() => {
    insertHeader(`
      <div>
        <a href="index.html"><img src="./images/Main Logo.png" alt="Main Logo" /></a>
      </div>
      <nav>
        <a href="home.html">Home</a>
        <a href="info.html">Info</a>
        <a href="contact.html">Contact</a>
      </nav>
    `);
  });

fetch('footer.html')
  .then(res => { if (!res.ok) throw new Error('Fetch failed'); return res.text(); })
  .then(data => insertFooter(data))
  .catch(() => {
    insertFooter(`
      <h3>CONTACT</h3>
      <p>Dischargedhc@gmail.com</p>
      <p>+358 40 0425698</p>
      <p>13100 Hämeenlinna, Finland</p>
      <img src="./images/Main Logo.png" alt="Main Logo">
    `);
  });