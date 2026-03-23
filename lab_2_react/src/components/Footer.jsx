import { useState, useEffect } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    const platform = navigator.platform;
    const userAgent = navigator.userAgent;

    localStorage.setItem('userPlatform', platform);
    localStorage.setItem('userAgent', userAgent);

    setSysInfo({
      os: localStorage.getItem('userPlatform'),
      browser: localStorage.getItem('userAgent')
    });
  }, []);

  return (
<footer className="mt-8 text-center text-sm opacity-70">
      <p>&copy; 2026 Руслан. Всі права захищено.</p>
    </footer>
  );
}

export default Footer;