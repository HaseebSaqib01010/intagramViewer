import { FloatingNav } from '../../components/ui/FloatingNavbar';
import { navItems } from "@/data";
import BlogDetails from '../../components/ui/BlogDetails';
import Footer from '../../components/Footer';
import AppWrapper from '@/components/AppWrapper';


const BlogPage = () => {
  return (
    <AppWrapper>

      <FloatingNav navItems={navItems} />
      <BlogDetails />
      <Footer />

    </AppWrapper>
  );

};

export default BlogPage;