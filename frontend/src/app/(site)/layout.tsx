import Layout  from '@/components/layout/Layout';
import WelcomePopup from '@/components/welcome/WelcomePopup';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <Layout>
    {children}
    
    <WelcomePopup />
    </Layout>;
} 
