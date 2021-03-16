import CookieConsent from 'react-cookie-consent';

export default function AceptCookies() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="ACEITO"
      cookieName="myAwesomeCookieName2"
      style={{ background: '#2B373B' }}
      buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
      expires={150}
    >
      Este site usa cookies para melhorar a experiência do usuário.{' '}
      <span style={{ fontSize: '10px' }}></span>
    </CookieConsent>
  );
}
