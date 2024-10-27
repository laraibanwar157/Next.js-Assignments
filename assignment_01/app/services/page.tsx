import myStyle from './services.module.css'
import Link from 'next/link';

const ServicesPage = () => {
    return (
      <div className={myStyle.services}>
        <h1>This is services page.</h1>
          <ul>
            <li><Link href="/services/app-development">App Development</Link></li>
            <li><Link href="/services/website-development">Website Development</Link></li>
          </ul>
      </div>
    );
  };

export default ServicesPage;